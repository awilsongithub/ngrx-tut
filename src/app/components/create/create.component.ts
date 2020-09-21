import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AddTutorial } from "./../../actions/tutorial.actions";
import { AppState } from "./../../app.state";
import { Tutorial } from "./../../models/tutorial.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  addTutorial(name, url) {
    this.store.dispatch(new AddTutorial({ name: name, url: url }));
  }

  ngOnInit() {}
}
