import { Box, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { NextPage, NextPageContext } from "next";
import buildClient from "../../api/buildClient";
import { List } from "../../components/List";

interface BoardShowProps {
  board: Board;
}

const BoardShow: NextPage<BoardShowProps> = ({ board }) => {
  return (
    <Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={2} m={3}>
        {board.lists.map((list) => (
          <GridItem key={list.id}>
            <List cards={list.cards} listTitle={list.title} />
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
