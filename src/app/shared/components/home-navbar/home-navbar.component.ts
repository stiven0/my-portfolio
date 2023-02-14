import { Component, OnDestroy, AfterViewInit } from '@angular/core';

import { Subject, takeUntil, timer } from 'rxjs';

import { MenuItems } from '@core/interfaces/menu-items';
import { Confetti } from '@core/interfaces/confetti';

declare const confetti: Confetti;

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent implements AfterViewInit, OnDestroy {

  private destroyed$ = new Subject<void>();

  menuItems: MenuItems[] = [ 
    { name: 'Inicio', redirectTo: 'home' },
    { name: 'Sobre mí', redirectTo: 'about' },
    { name: 'Proyectos', redirectTo: 'projects' },
    { name: 'Skills', redirectTo: 'skills' },
    { name: 'Contacto', redirectTo: 'contact' }
  ];

  ngAfterViewInit(): void {
    timer(500).pipe( takeUntil( this.destroyed$ ) ).subscribe( _ => this.runConfetti() );
  }

  ngOnDestroy(): void {

    this.destroyed$.next();
    this.destroyed$.complete();

  }

  runConfetti() {

    confetti.start();
    timer(4000).pipe( takeUntil( this.destroyed$ ) ).subscribe( _ => confetti.stop() );

  }

}