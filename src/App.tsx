import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Inputcomponent from "./components/Inputcomponent";
import ChatMessage from "./components/ChatMessage";
import { ChatContext } from "./providers/ChatProvider";
import { useContext } from "react";
import EmptyMessages from "./components/EmptyMessages";

function App() {
  const { messages } = useContext(ChatContext);
  return (
    <ChakraProvider>
        <Box h="100vh" position="relative">
          <Header />
          <Box p={8}>
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                isQuestion={message.isQuestion}
                message={message.text}
              />
            ))}
            {messages.length === 0 && (<EmptyMessages/>)}
          </Box>
          <Inputcomponent />
        </Box>
    </ChakraProvider>
  );
}

export default App;
