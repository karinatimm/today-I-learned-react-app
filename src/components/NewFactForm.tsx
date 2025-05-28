import { useState } from "react";
import supabase from "../supabase.js";
import { MAX_LENGTH, isValidHttpUrl } from "../utils/utils.ts";
import { CATEGORIES } from "../utils/categories.ts";
import {
  type Fact as FactType,
  type SetState as SetStateType,
} from "../types/index";
import type { FormEvent } from "react";

type NewFactFormProps = {
  setFacts: SetStateType<FactType[]>;
  setShowForm: SetStateType<boolean>;
};

const NewFactForm = ({ setFacts, setShowForm }: NewFactFormProps) => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text && isValidHttpUrl(source) && category && textLength <= 200) {
      setIsUploading(true);

      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();

      setIsUploading(false);

      if (!error) setFacts((prevFacts) => [newFact[0], ...prevFacts]);

      setText("");
      setSource("");
      setCategory("");

      setShowForm(false);
    }
  };

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Share a fact with the world..."
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span>{MAX_LENGTH - textLength}</span>
      <input
        type="text"
        value={source}
        placeholder="Trustworthy source..."
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
};

export default NewFactForm;
