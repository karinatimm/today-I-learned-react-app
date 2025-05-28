import { type CategoryName } from "../utils/categories";

export type Fact = {
  id: number;
  text: string;
  source: string;
  category: CategoryName;
  votesInteresting: number;
  votesMindblowing: number;
  votesFalse: number;
  created_at?: string;
};

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type Vote = keyof Pick<
  Fact,
  "votesInteresting" | "votesMindblowing" | "votesFalse"
>;
