import { useEffect, useState } from "react";
import "../src/index.css";
import Card from "./Components/Card/Card";
import CardDetails from "./Components/CardDetaild/CardDetails";
import axios from "axios";
import HomePage from "./Page/HomePage";
import { ComponentContext } from "./Contexts/contexts";
function App() {
  const [open, setOpen] = useState(false);
  const [cardData, setCardData] = useState({});
  return (
    <>
      <ComponentContext.Provider
        value={{ open, setOpen, cardData, setCardData }}
      >
        <HomePage />
      </ComponentContext.Provider>
    </>
  );
}

export default App;
