import React, { createContext, useState } from "react";
import { ApiService } from "../services/ApiService";

// State to hold the chat messages and file selection
const initialChatState = {
  messages: [] as { text: string; isQuestion: boolean }[],
  isFileSelected: false,
  isUploadingFile: false,
  isFectchingAnswer: false,
  addMessage: (message: string, isQuestion: boolean) => {},
  addFile: (file: File) => {},
  pdf_id: 0,
};

export const ChatContext = createContext(initialChatState);

const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [chatState, setChatState] = useState(initialChatState);

  // Function to add a new message to the chat
  const addMessage = (message: string, isQuestion: boolean) => {
    setChatState((prevState) => ({
      ...prevState,
      isFectchingAnswer: isQuestion,
      messages: [...prevState.messages, { text: message, isQuestion }],
    }));

    // TODO:: send message to API
    if (isQuestion) {
      console.log("PDF ID: ", chatState.pdf_id)
      ApiService.ask(message,chatState.pdf_id).then((response)=>{
        setChatState((prevState) => ({
          ...prevState,
          isFectchingAnswer: false,
          messages: [
            ...prevState.messages,
            { text: response.answer, isQuestion: false },
          ],
        }));
      
      }).catch((error) => {
        console.error("An error occurred while asking the question:", error);
        setChatState((prevState) => ({
          ...prevState,
          isFectchingAnswer: false,
        }));
      });
    }
  };

  const addFile = (file: File) => {
    setChatState((prevState) => ({
      ...prevState,
      isUploadingFile: true,
    }));
    // TODO:: updload file to API
    ApiService.uploadPDF(file)
      .then((response) => {
        console.log("File uploaded: ", response);
        setChatState((prevState) => ({
          ...prevState,
          isFileSelected: true,
          isUploadingFile: false,
          pdf_id: response.id,
        }));
      })
      .catch((error) => {
        console.error("An error occurred while uploading the file:", error);
        setChatState((prevState) => ({
          ...prevState,
          isUploadingFile: false,
        }));
      });
  };

  // Provide the chat context value to the children components
  return (
    <ChatContext.Provider
      value={{
        ...chatState,
        addMessage,
        addFile,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
