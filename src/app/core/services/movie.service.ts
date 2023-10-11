import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Movie } from "../models/movie.model";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class MovieService {
  constructor(private readonly http: HttpClient) {}
  getMovieList(): Observable<Movie[]> {
    return this.http
      .get("/interview")
      .pipe(map((data:any) => data));
  }
}
