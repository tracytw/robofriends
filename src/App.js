import React, { Fragment, useState } from "react";
import CardList from "./components/cardList";
import SearchBox from "./components/searchBox";
import { robots } from "./components/robots";
import Scroll from "./components/scroll";

const App = () => {
  const [search, setSearch] = useState("");
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filterRobots = robots.filter((result) =>
    result.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Fragment>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filterRobots} />
      </Scroll>
    </Fragment>
  );
};

export default App;
