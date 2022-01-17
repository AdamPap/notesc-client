interface Card {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface Board {
  id: number;
  title: string;
  content: string;
  lists: List[];
  createdAt: string;
  updatedAt: string;
}

interface List {
  id: number;
  title: string;
  content: string;
  cards: Card[];
  createdAt: string;
  updatedAt: string;
}
