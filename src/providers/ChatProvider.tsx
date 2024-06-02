import React, { createContext, useState } from "react";

// State to hold the chat messages and file selection
const initialChatState = {
  messages: [] as { text: string; isQuestion: boolean }[],
  isFileSelected: false,
  isUploadingFile: false,
  isFectchingAnswer: false,
  addMessage: (message: string, isQuestion: boolean) => {},
  addFile: (file: File) => {},
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
    if(isQuestion){
      setTimeout(() => {
        setChatState((prevState) => ({
          ...prevState,
            isFectchingAnswer: false,
          messages: [...prevState.messages, { text: "This is a dummy answer", isQuestion: false }],
        }));
      }, 2000);
    }
  };

  const addFile = (file: File) => {
    setChatState((prevState) => ({
      ...prevState,
      isUploadingFile: true,
    }));
    // TODO:: updload file to API
    setTimeout(() => {
      setChatState((prevState) => ({
        ...prevState,
        isFileSelected: true,
        isUploadingFile: false,
      }));
      console.log("File added: ", file.name);
    }, 4000);
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
