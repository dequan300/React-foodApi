/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./list";
function App() {
  let API_ID = "a800b134";
  let API_KEY = "ad5e935f5252738287f4da632a72cf35";

  const [newList, setNewList] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("greens");
  const [mark, setMark] = useState(false);

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY} `
    );

    const data = await response.json();
    console.log(data.hits);
    return setNewList(data.hits);
  };

  const updateSearch = event => {
    let newValue = event.target.value;
    setSearch(newValue);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const checked = () => {
    setMark(() => {
      return !mark;
    });
    console.log(mark);
  };

  return (
    <div>
      <form onSubmit={getSearch}>
        <h1>search foodStuff</h1>
        <input type="text" onChange={updateSearch} value={search} />
        <button type="submit">search</button>
        <input type="checkbox" onClick={checked} value={mark} />
      </form>

      {newList.map((listItems, index) => {
        return (
          <List
            key={index}
            title={listItems.recipe.label}
            image={listItems.recipe.image}
            style={{ display: checked && "none" }}
          />
        );
      })}
    </div>
  );
}

export default App;
