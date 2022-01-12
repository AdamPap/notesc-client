import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { AxiosInstance } from "axios";
import { NextPage, NextPageContext } from "next";
import NextLink from "next/link";
import buildClient from "../../api/buildClient";

interface HomeProps {
  cards: Card[];
}

const Home: NextPage<HomeProps> = ({ cards }) => {
  return (
    <Box>
      <Heading>INDEX</Heading>
      <VStack>
        {cards.map((card) => (
          <Box key={card.id} boxShadow="lg" p={4} rounded="lg" width="400px">
            <Heading as="h1" size="md">
              {card.title}
            </Heading>
            <Text>{card.content}</Text>
            <NextLink href="/cards/[cardId]" as={`/cards/${card.id}`}>
              <Button>View</Button>
            </NextLink>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const client = buildClient(ctx);

  const { data } = await client.get<Card[]>("/cards");

  return { props: { cards: data } };
};

export default Home;
