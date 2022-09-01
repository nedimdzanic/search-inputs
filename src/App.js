import React, { useState } from "react";
import Search from "./component/UI/Search";
import Button from "./component/UI/Button";
import SearchList from "./component/SearchList";

import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "./store";

const App = () => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const dispatch = useDispatch();
  const searchInputsState = useSelector((state) => state);
  const searchInputs = useSelector((state) => state.searchInputs);

  localStorage.setItem("searchInputs", JSON.stringify(searchInputsState));

  const addSearchHandler = () => {
    dispatch(searchActions.add({ text: enteredSearch }));
    setEnteredSearch("");
  };

  const searchChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
  };

  return (
    <>
      <Search
        onChange={searchChangeHandler}
        value={enteredSearch}
        type="text"
      />
      <Button onClick={addSearchHandler}>Add</Button>

      {searchInputs.map((search) => (
        <SearchList key={search.id} search={search} />
      ))}
    </>
  );
};

export default App;
