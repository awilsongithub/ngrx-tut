import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Tutorial, TutorialRequest } from "../models/tutorial.model";

export const ADD_TUTORIAL = "[TUTORIAL] Add";
export const REMOVE_TUTORIAL = "[TUTORIAL] Remove";

export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;
  constructor(public payload: TutorialRequest) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;
  constructor(public id: number) {}
}

export type Actions = AddTutorial | RemoveTutorial;
