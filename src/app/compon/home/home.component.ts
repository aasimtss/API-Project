import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { interval, Subscription } from 'rxjs';
import { LoaderService } from 'src/app/loader.service';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: any;
  public games: Array<Game> = [];
  private routeSub: Subscription | undefined;
  private gameSub: Subscription | undefined;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    public loader: LoaderService
  ) {}

  ngOnInit(): void {
    const source = interval(1000);
    const subscribe = source.subscribe((val) => console.log(`first ${val}`));
    setTimeout(() => {
      const subscribe1 = source.subscribe((val) =>
        console.log(`second ${val}`)
      );
      subscribe.unsubscribe();
      setTimeout(() => {
        subscribe1.unsubscribe();
      }, 5000);
    }, 8000);

    // // this.spinner.show();
    // setTimeout(() => {
    //   // this.spinner.hide();
    // }, 3000);
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }

  searchGames(sort: string, search?: string): void {
    this.gameSub = this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList);
      });
  }
  openGameDetails(id: string): void {
    this.router.navigate(['/details', id]);
  }
  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
