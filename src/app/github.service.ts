import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly githubUser = 'vladimirandavs19'; // tu usuario de GitHub
  private readonly apiUrl = `https://api.github.com/users/${this.githubUser}/repos`;
  constructor(private http: HttpClient) { }
   getRepos() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(repos => 
        repos
          .filter(r => !r.fork) // opcional: omite forks
          .sort((a, b) => b.stargazers_count - a.stargazers_count) // ordenar por estrellas
      )
    );
  }
}
