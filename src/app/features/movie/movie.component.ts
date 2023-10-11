import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-movie-page",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"],
  standalone: true,
})
export class MovieComponent {
  constructor(
    private readonly route: ActivatedRoute,
  ) { }
  movieID = this.route.snapshot.params["id"];
}
