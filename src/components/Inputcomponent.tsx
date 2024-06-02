import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, {useState,useContext} from "react";
import { BiSend } from "react-icons/bi";
import { ChatContext } from "../providers/ChatProvider";

const Inputcomponent = () => {
  const [inputValue, setInputValue] = useState("");
  const {addMessage} =  useContext(ChatContext);

  const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addMessage(inputValue, true);
      setInputValue("");
    }
  };

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <Box px={8} position="absolute" bottom="8" w="100%">
      <InputGroup>
        <Input
          placeholder="Send a message..."
          size="md"
          _placeholder={{ fontSize: "14px" }}
          fontSize="14px"
          borderColor="#E4E8EE"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <InputRightElement>
          <BiSend size={21} color="#ACACAE" />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Inputcomponent;
