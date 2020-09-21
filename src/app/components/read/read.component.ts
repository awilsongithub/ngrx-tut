import { RemoveTutorial } from "./../../actions/tutorial.actions";
import { Component, OnInit } from "@angular/core";
import { AppState } from "./../../app.state";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Tutorial } from "./../../models/tutorial.model";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.scss"],
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;

  // pass store of type Store with argument AppState (shape of the store)
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select("tutorial");
  }

  ngOnInit() {}

  removeTutorial(tutorial) {
    this.store.dispatch(new RemoveTutorial(tutorial.id));
  }
}
