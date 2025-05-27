import { useState, useEffect } from "react";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList.tsx";
import CategoryFilter from "./components/CategoryFilter";
import Loader from "./components/Loader";
import supabase from "./supabase.ts";
import { type Fact } from "./types/index.ts";
import { type CategoryName } from "./utils/categories";

const App = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [facts, setFacts] = useState<Fact[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<CategoryName | "all">(
    "all"
  );

  useEffect(() => {
    const getFacts = async () => {
      setIsLoading(true);

      let query = supabase.from("facts").select("*");

      if (currentCategory !== "all") {
        query = query.eq("category", currentCategory);
      }

      const { data: facts, error } = await query
        .order("votesInteresting", { ascending: false })
        .limit(1000);

      if (!error) {
        setFacts(facts);
      } else {
        alert("There was a problem getting data");
      }

      setIsLoading(false);
    };
    getFacts();
  }, [currentCategory]);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm && (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      )}
      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <FactList facts={facts} setFacts={setFacts} />
        )}
      </main>
    </>
  );
};

export default App;
