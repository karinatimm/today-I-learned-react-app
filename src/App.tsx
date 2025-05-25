import "./style.css";
import Header from "./components/Header";
import { useState } from "react";
import FactForm from "./components/FactForm";

const App = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      <FactForm />
    </>
  );
};

export default App;
