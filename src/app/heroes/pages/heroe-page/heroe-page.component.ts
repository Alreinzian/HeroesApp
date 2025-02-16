import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-page',
  standalone: false,

  templateUrl: './heroe-page.component.html',
  styles: ``,
})
export class HeroePageComponent implements OnInit {
  public hero?: Hero;
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap(({ id }) => this.heroesService.getHeroeById(id))
      )
      .subscribe((hero) => {
        if (!hero) return this.router.navigate(['/heroes/list']);
        this.hero = hero;
        return;
      });
  }
}
