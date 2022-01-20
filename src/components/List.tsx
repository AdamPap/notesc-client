import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Card } from "./Card";

interface ListProps {
  cards: Card[];
  listTitle: string;
}

export const List: React.FC<ListProps> = ({ cards, listTitle }) => {
  return (
    <Box shadow="md" bg="teal.100" rounded="md" p={2}>
      <Heading color="teal.900" size="md" p={1}>
        {listTitle}
      </Heading>
      <VStack>
        {cards.map((card) => (
          <Card cardTitle={card.title} />
        ))}
      </VStack>
    </Box>
  );
};
