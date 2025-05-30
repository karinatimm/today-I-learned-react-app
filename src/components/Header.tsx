import { type SetState as SetStateType } from "../types/index";

type HeaderProps = {
  showForm: boolean;
  setShowForm: SetStateType<boolean>;
};

const Header = ({ showForm, setShowForm }: HeaderProps) => {
  const appTitle = "Today I Learned";

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
        <h1>{appTitle}</h1>
      </div>

      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
};

export default Header;
