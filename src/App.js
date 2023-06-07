import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Search from "./components/Search";
import Scroll from "./components/Scroll";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setRobots(json));
  }, []);

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  const filterRobot = robots.filter((result) =>
    result.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search searchChange={searchChange} />
      <Scroll>
        <CardList robots={filterRobot} />
      </Scroll>
    </div>
  );
};

export default App;
