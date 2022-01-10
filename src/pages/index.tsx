import { NextPage, NextPageContext } from "next";
import buildClient from "../api/buildClient";

interface HomeProps {
  cards: Card[];
}

interface Card {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const Home: NextPage<HomeProps> = ({ cards }) => {
  return (
    <div>
      <h1>INDEX</h1>
      {cards.map((card) => (
        <div key={card.id}>
          <div>{card.title}</div>
          <div>{card.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;

Home.getInitialProps = async (ctx: NextPageContext) => {
  const client = buildClient(ctx);

  const { data } = await client.get("/cards");

  return { cards: data };
};
