import React, { createContext, useState } from "react";

// State to hold the chat messages and file selection
const initialChatState = {
  messages: [] as { text: string, isQuestion: boolean }[],
  isFileSelected: false,
  addMessage: (message: string,isQuestion: boolean) => {},
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
      messages: [...prevState.messages, { text: message,isQuestion }],
    }));
    console.log("Message added: ", message);
  };


  // Provide the chat context value to the children components
  return (
    <ChatContext.Provider
      value={{
        messages: chatState.messages as { text: string, isQuestion:boolean }[],
        isFileSelected: chatState.isFileSelected,
        addMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
