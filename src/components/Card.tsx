import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";

interface CardProps {
  cardTitle: string;
}

export const Card: React.FC<CardProps> = ({ cardTitle }) => {
  return (
    <Box shadow="sm" rounded="md" bg="white" w="100%" p={1}>
      <Flex role="group" position="relative" py={2} px={3}>
        <Text>{cardTitle}</Text>
        <IconButton
          position="absolute"
          top={0}
          right={0}
          opacity={0}
          _groupHover={{ opacity: 1 }}
          _hover={{ bg: "green.100" }}
          size="xs"
          aria-label="Edit Card"
          icon={<MdModeEditOutline />}
        />
      </Flex>
    </Box>
  );
};
