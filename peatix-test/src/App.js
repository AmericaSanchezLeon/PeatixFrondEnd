import Logo from "./assets/peatix-logo.svg";
import "./App.css";
import "./styles/media.css"
import CelToFar from "./components/CelToFar";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Logo" className="header__img" />
      </header>
      <div>
        <CelToFar />
      </div>
      <DarkMode />
    </div>
  );
}

export default App;
