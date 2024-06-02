import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { BiSend } from "react-icons/bi";

const Inputcomponent = () => {
  return (
    <Box px={8} position="absolute" bottom="8" w="100%">
      <InputGroup>
        <Input
          placeholder="Send a message..."
          size="md"
          _placeholder={{ fontSize: "14px" }}
          fontSize="14px"
          borderColor="#E4E8EE"
        />
        <InputRightElement>
          <BiSend size={21} color="#ACACAE" />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Inputcomponent;
