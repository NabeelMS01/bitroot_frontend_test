import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import CardDetails from "../Components/CardDetaild/CardDetails";
import { ComponentContext } from "../Contexts/contexts";

function HomePage() {
  const [data, setData] = useState([]);
  const { cardData, setCardData } = useState(ComponentContext);
  const { open, setOpen } = useContext(ComponentContext);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await axios
        .get(
          "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
        )
        .then((response) => {
          setData(response.data);
        });
    } catch (error) {}
  };
  return (
    <div className="App">
      <CardDetails />
      <div className="row">
        {data.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
