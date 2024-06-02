import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Inputcomponent from "./components/Inputcomponent";
import ChatMessage from "./components/ChatMessage";

function App() {
  return (
    <ChakraProvider>
      <Box h="100vh" position="relative">
        <Header />
        <Box p={8}>
          <ChatMessage isQuestion message="Explain like im5" />
          <ChatMessage message="Our own Large Language Model (LLM) is a type of Al that can learn from data. We have trained it on 7 billion parameters which makes it better than other LLMs. We are featured on aiplanet.com and work with leading enterprises to help them use Al securely and privately. We have a Generative Al Stack which helps reduce the hallucinations in LLMs and allows enterprises to use Al in their applications." />
        </Box>
        <Inputcomponent />
      </Box>
    </ChakraProvider>
  );
}

export default App;
