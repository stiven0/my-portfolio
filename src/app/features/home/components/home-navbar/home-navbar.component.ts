import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { timer } from 'rxjs';

import { MenuItems } from '@core/interfaces/menu-items';
import { Confetti } from '@core/interfaces/confetti';

declare const confetti: Confetti;

@Component({
    selector: 'app-home-navbar',
    templateUrl: './home-navbar.component.html',
    styleUrls: ['./home-navbar.component.scss'],
    standalone: true,
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        RouterLink
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeNavbarComponent implements AfterViewInit {

  private readonly destroyRef = inject(DestroyRef);

  readonly menuItems = signal<MenuItems[]>([
    { name: 'Inicio', redirectTo: 'home' },
    { name: 'Sobre mí', redirectTo: 'about' },
    { name: 'Proyectos', redirectTo: 'projects' },
    { name: 'Skills', redirectTo: 'skills' },
    { name: 'Contacto', redirectTo: 'contact' }
  ]);

  ngAfterViewInit(): void {
    timer(600)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.runConfetti());
  }

  runConfetti(): void {

    confetti.start();
    timer(4000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => confetti.stop());

  }

}