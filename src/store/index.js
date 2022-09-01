import { createSlice, configureStore } from "@reduxjs/toolkit";

//get search inputs from local storage
let initialState;
if (JSON.parse(localStorage.getItem("searchInputs"))) {
  initialState = JSON.parse(localStorage.getItem("searchInputs"));
} else {
  initialState = {
    searchInputs: [],
    nextId: 0,
  };
}

const searchSlice = createSlice({
  name: "searchInputs",
  initialState,
  reducers: {
    add(state, action) {
      const newSearch = { id: state.nextId, text: action.payload.text };
      state.searchInputs.push(newSearch);
      state.nextId++;
    },
    delete(state, action) {
      //find index of search inputs by id
      const index = state.searchInputs.findIndex(
        (obj) => obj.id === action.payload
      );

      state.searchInputs.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: searchSlice.reducer,
});

export const searchActions = searchSlice.actions;

export default store;
