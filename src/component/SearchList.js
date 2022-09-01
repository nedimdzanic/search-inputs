import React from "react";
import Button from "./UI/Button";
import { useDispatch } from "react-redux";
import { searchActions } from "../store";

const SearchList = (props) => {
  const dispatch = useDispatch();
  const deleteSearchInputHandler = () => {
    dispatch(searchActions.delete(props.search.id));
  };

  return (
    <ul>
      <li>
        {props.search.text}{" "}
        <Button onClick={deleteSearchInputHandler}>X</Button>
      </li>
    </ul>
  );
};

export default SearchList;
