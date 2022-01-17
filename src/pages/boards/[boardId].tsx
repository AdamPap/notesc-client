import { Box, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { NextPage, NextPageContext } from "next";
import buildClient from "../../api/buildClient";

interface BoardShowProps {
  board: Board;
}

const BoardShow: NextPage<BoardShowProps> = ({ board }) => {
  return (
    <Box>
      <Box>BOARD SHOW</Box>
      <Grid templateColumns="repeat(5, 1fr)">
        {board.lists.map((list) => (
          <GridItem key={list.id}>
            <Heading>{list.title}</Heading>
            <VStack align="start">
              {list.cards.map((card) => (
                <Box>{card.title}</Box>
              ))}
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const client = buildClient(ctx);
  const { boardId } = ctx.query;

  const { data } = await client.get<Board>(`/boards/${boardId}`);

  return {
    props: {
      board: data,
    },
  };
};

export default BoardShow;
