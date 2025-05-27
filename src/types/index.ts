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
