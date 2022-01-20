import { Box } from "@chakra-ui/react";
import { NextPage, NextPageContext } from "next";
import React from "react";
import buildClient from "../../api/buildClient";

interface CardShowProps {
  card?: Card;
}

const CardShow: NextPage<CardShowProps> = ({ card }) => {
  return <Box>Show page {card?.title}</Box>;
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const client = buildClient(ctx);
  const { cardId } = ctx.query;

  const { data } = await client.get<Card>(`/cards/${cardId}`);

  return { props: { card: data } };
};

export default CardShow;
