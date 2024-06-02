import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect, useContext } from "react";
import { Images } from "../assets/Images";
import { MdAddCircleOutline } from "react-icons/md";
import { HiOutlineDocument } from "react-icons/hi2";
import { ChatContext } from "../providers/ChatProvider";

const Header = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { addFile, isUploadingFile } = useContext(ChatContext);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    fileInput.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      addFile(selectedFile);
    }
  };
  return (
    <HStack px={8} py={4} shadow={8} boxShadow={"md"}>
      <Image src={Images.LOGO} alt="Ai Planet" />
      <Spacer />
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInput}
        accept=".pdf"
        onChange={handleFileChange}
      />
      {file && (
        <HStack mx={4}>
          {isUploadingFile ? (
            <Spinner size="sm" color="#2DA958" />
          ) : (
            <Box p={1} border="1px solid #2DA958" borderRadius={4}>
              <HiOutlineDocument size={24} color="#2DA958" />
            </Box>
          )}
          <Text size="sm" fontSize="small" color="#2DA958">
            {file.name}
          </Text>
        </HStack>
      )}
      {!isMobile && (
        <Button
          colorScheme="black"
          variant="outline"
          leftIcon={<MdAddCircleOutline size={18} />}
          onClick={handleButtonClick}
          fontSize={14}
          size={"sm"}
        >
          Upload PDF
        </Button>
      )}
      {isMobile && (
        <IconButton
          aria-label="Upload PDF"
          icon={<MdAddCircleOutline size={24} />}
          variant="outline"
          onClick={handleButtonClick}
          colorScheme="black"
        />
      )}
    </HStack>
  );
};

export default Header;
