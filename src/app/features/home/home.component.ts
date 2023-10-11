import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AsyncPipe, NgClass, NgForOf } from "@angular/common";
import { MovieService } from "../../core/services/movie.service";
import { LetDirective } from "@rx-angular/template/let";
import { NgIf } from "@angular/common";
import { Movie } from "src/app/core/models/movie.model";
@Component({
  selector: "app-home-page",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  imports: [
    NgClass,
    NgIf,
    AsyncPipe,
    LetDirective,
    NgForOf,
  ],
  standalone: true,
})
export class HomeComponent implements OnInit {
  movieList: Movie[] = []

  constructor(
    private readonly router: Router,
    private readonly movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe((data: Movie[]) => {
      this.movieList=data;
      this.movieList.sort((a:Movie, b:Movie) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
    });
  }

  goToMoviePage(id: string) {
    this.router.navigateByUrl('/movie/' + id);
  }
}
