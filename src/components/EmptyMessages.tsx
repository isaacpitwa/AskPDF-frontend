import {
  Flex,
  List,
  ListItem,
  ListIcon,
  Heading,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { MdCheckCircle,MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { ChatContext } from "../providers/ChatProvider";

const EmptyMessages = () => {
    const {isFileSelected} = useContext(ChatContext);
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      h="80vh"
    >
      <Heading as="h2" size="lg">
        Welcome to AskPDF!
      </Heading>
      <List spacing={3} mt={6}>
        <ListItem>
          <ListIcon as={ isFileSelected? MdCheckCircle: MdOutlineRadioButtonUnchecked} color="green.500" />
          Upload your file.
        </ListItem>
        <ListItem>
          <ListIcon as={isFileSelected? MdCheckCircle: MdOutlineRadioButtonUnchecked} color="green.500" />
          Ask our bot questions about the file.
        </ListItem>
      </List>
    </Flex>
  );
};

export default EmptyMessages;
