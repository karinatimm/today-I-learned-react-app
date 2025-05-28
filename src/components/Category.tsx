import { type CategoryName } from "../utils/categories";
import { type CategoryType } from "../utils/categories";
import { type SetState as SetStateType } from "../types/index";

type CategoryProps = {
  cat: CategoryType;
  setCurrentCategory: SetStateType<"all" | CategoryName>;
};

const Category = ({ cat, setCurrentCategory }: CategoryProps) => {
  return (
    <li className="category">
      <button
        className="btn btn-category"
        style={{ backgroundColor: cat.color }}
        onClick={() => setCurrentCategory(cat.name)}
      >
        {cat.name}
      </button>
    </li>
  );
};

export default Category;
