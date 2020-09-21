import { Action } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.model";
import {
  ADD_TUTORIAL,
  REMOVE_TUTORIAL,
  Actions,
} from "./../actions/tutorial.actions";

const initialState: Tutorial = {
  id: new Date().getTime(),
  name: "Initial Tutorial",
  url: "http://google.com",
};

export function reducer(state: Tutorial[] = [initialState], action: Actions) {
  switch (action.type) {
    case ADD_TUTORIAL:
      const uniqueNumber = new Date().getTime();
      let tutorial: Tutorial = { ...action.payload, id: uniqueNumber };
      return [...state, tutorial];
    case REMOVE_TUTORIAL:
      const filtered = state.filter((t) => t.id != action.id);
      return filtered;
    default:
      return state;
  }
}
