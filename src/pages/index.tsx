import { Box } from "@chakra-ui/react";
import { NextPage, NextPageContext } from "next";
import buildClient from "../api/buildClient";

interface BoardsIndexProps {
  boards: Board[];
}

const BoardsIndex: NextPage<BoardsIndexProps> = ({ boards }) => {
  console.log(boards);
  return (
    <Box>
      <Box>Boards Index</Box>
      {boards.map((board) => (
        <Box key={board.id}>{board.title}</Box>
      ))}
    </Box>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const client = buildClient(ctx);

  const { data } = await client.get<Board[]>("/boards");

  return { props: { boards: data } };
};

export default BoardsIndex;
