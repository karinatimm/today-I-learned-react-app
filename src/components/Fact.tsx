import { useState } from "react";
import supabase from "../supabase.ts";
import {
  type Fact as FactType,
  type SetState as SetStateType,
  type Vote as VoteType,
} from "../types/index";
import { CATEGORIES, type CategoryType } from "../utils/categories.ts";

type FactProps = {
  fact: FactType;
  setFacts: SetStateType<FactType[]>;
};

const Fact = ({ fact, setFacts }: FactProps) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

  const handleVote = async (columnName: VoteType) => {
    setIsUpdating(true);

    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName as VoteType] + 1 })
      .eq("id", fact.id)
      .select();

    setIsUpdating(false);

    if (!error) {
      setFacts((prevFacts) =>
        prevFacts.map((prevFact) =>
          prevFact.id === fact.id ? updatedFact[0] : prevFact
        )
      );
    }
  };

  return (
    <li className="fact">
      <p>
        {isDisputed && <span className="disputed">[⛔️ DISPUTED]</span>}
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find(
            (cat: CategoryType) => cat.name === fact.category
          )?.color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button
          onClick={() => handleVote("votesInteresting")}
          disabled={isUpdating}
        >
          👍 {fact.votesInteresting}
        </button>
        <button
          onClick={() => handleVote("votesMindblowing")}
          disabled={isUpdating}
        >
          🤯 {fact.votesMindblowing}
        </button>
        <button onClick={() => handleVote("votesFalse")} disabled={isUpdating}>
          ⛔️ {fact.votesFalse}
        </button>
      </div>
    </li>
  );
};

export default Fact;
