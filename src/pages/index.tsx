import { Box, Grid, GridItem, Link, useColorModeValue } from "@chakra-ui/react";
import { NextPage, NextPageContext } from "next";
import NextLink from "next/link";
import buildClient from "../api/buildClient";

interface BoardsIndexProps {
  boards: Board[];
}

const BoardsIndex: NextPage<BoardsIndexProps> = ({ boards }) => {
  return (
    <Box>
      <Box>Boards Index</Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {boards.map((board) => (
          <GridItem w="100%" key={board.id}>
            <Box bg={useColorModeValue("teal.500", "teal.300")}>
              <NextLink
                href="/boards/[boardId]"
                as={`/boards/${board.id}`}
                passHref
              >
                <Link>{board.title}</Link>
              </NextLink>
              <Box bg={useColorModeValue("teal.800", "teal.100")}>
                {board.content}
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const client = buildClient(ctx);

  const { data } = await client.get<Board[]>("/boards");

  return { props: { boards: data } };
};

export default BoardsIndex;
