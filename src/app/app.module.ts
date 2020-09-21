import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/tutorial.reducer";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReadComponent } from "./components/read/read.component";
import { CreateComponent } from "./components/create/create.component";

@NgModule({
  declarations: [AppComponent, ReadComponent, CreateComponent],
  imports: [
    BrowserModule,
    // forRoot contains only singletons
    // we only want those in the root module to avoid duplicates
    StoreModule.forRoot({
      tutorial: reducer, // tutorial is return val from reducer fn
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
