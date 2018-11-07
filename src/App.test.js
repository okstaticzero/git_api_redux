import React from "react";
import ReactDOM from "react-dom";
import userListReducer from "./redux/UserListReducer.js";
import { getUserListSuccess } from "./redux/actions.js";

//action creator test
it("action creator should return an object with payload and type", () => {
  expect(getUserListSuccess([{ test: true }], { type: "undefined" })).toEqual({
    payload: [{ test: true }],
    type: "USERLIST_FETCH_SUCCEEDED"
  });
});

//reducer test
it("reducer should initially return an empty array", () => {
  expect(userListReducer(undefined, {})).toEqual([]);
});

//reducer test
it("reducer should return an array equal to what it was passed", () => {
  expect(
    userListReducer([], {
      type: "USERLIST_FETCH_SUCCEEDED",
      payload: {data:[{name:"matt"}]}
    })
  ).toEqual([{name:"matt"}]);
});
