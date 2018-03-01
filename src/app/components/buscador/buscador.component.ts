import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
  constructor(private _activedRoute: ActivatedRoute, private router: Router, private _heroesService: HeroesService) {
   }

  ngOnInit() {
    this._activedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
