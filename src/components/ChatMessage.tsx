import { Avatar, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Images } from "../assets/Images";

const ChatMessage = ({ isQuestion = false, message = "" }) => {
  return (
    <HStack mb={12} alignItems={isQuestion ? "center" : "flex-start"}>
      {isQuestion && (
        <Avatar size="md" name="Someone" src="" bg="#B0ACE9" color="#FFF"  mr={5}/>
      )}
      {!isQuestion && <Image src={Images.CHAT_BOT} alt="AiPlanet Bot" mr={6} />}
      <Text fontSize={14} color="black">
        {message}
      </Text>
    </HStack>
  );
};

export default ChatMessage;
