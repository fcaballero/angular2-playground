import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:['app/heroes.component.css'],
})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private _heroService: HeroService,
    private _router: Router
  ){}

  ngOnInit(){
    this.getHeroes();
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  getHeroes(){
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(){
    this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
  }
}
