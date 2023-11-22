import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isFetchPending, setFetchPending] = useState(false);
  const [pizzaget, pizzaset] = useState([]);
  useEffect(() => {
    setFetchPending(true);
    fetch("https://pizza.kando-dev.eu/Pizza")
      .then((res) => res.json())
      .then((data) => pizzaset(data));
    setFetchPending(false);
  }, []);
  return (
    <div>
      {isFetchPending ? (
        <div className="spinner-border"></div>
      ) : (
        <div>
          <h1 className="text-center">Pizzák</h1>
          <div className="d-flex justify-content-around">
            {pizzaget.map((pizza) => (
              <div className="card">
                <p>Pizza neve: {pizza.name}</p>
                <b>Glutén mentes-e: {pizza.isGlutenFree ? "Igen" : "Nem"}</b>
                <img height="150px" src={pizza.kepURL} alt={pizza.id}></img>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
