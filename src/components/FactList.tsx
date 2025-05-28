import Fact from "./Fact";
import {
  type Fact as FactType,
  type SetState as SetStateType,
} from "../types/index";

type FactListProps = {
  facts: FactType[];
  setFacts: SetStateType<FactType[]>;
};

const FactList = ({ facts, setFacts }: FactListProps) => {
  if (facts.length === 0) {
    return (
      <p className="message">
        No facts for this category yet! Create the first one ✌️
      </p>
    );
  }
  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        ))}
      </ul>
      <p className="facts-length">
        There are {facts.length} facts in the database. Add your own!
      </p>
    </section>
  );
};

export default FactList;
