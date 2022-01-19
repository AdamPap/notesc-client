import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface CardProps {
  cardTitle: string;
}

export const Card: React.FC<CardProps> = ({ cardTitle }) => {
  return (
    <Box rounded="md" bg="white" w="100%" py={2} px={3}>
      <Text>{cardTitle}</Text>
    </Box>
  );
};
