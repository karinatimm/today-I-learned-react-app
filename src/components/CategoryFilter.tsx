import type React from "react";
import { CATEGORIES } from "../utils/categories.ts";
import Category from "./Category.tsx";
import { type CategoryName } from "../utils/categories";

type CategoryFilterProps = {
  setCurrentCategory: React.Dispatch<
    React.SetStateAction<"all" | CategoryName>
  >;
};

const CategoryFilter = ({ setCurrentCategory }: CategoryFilterProps) => {
  return (
    <aside>
      <ul>
        <li className="category">
          <button
            className="btn btn-all-categories"
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>

        {CATEGORIES.map((cat) => (
          <Category
            key={cat.name}
            cat={cat}
            setCurrentCategory={setCurrentCategory}
          />
        ))}
      </ul>
    </aside>
  );
};

export default CategoryFilter;
