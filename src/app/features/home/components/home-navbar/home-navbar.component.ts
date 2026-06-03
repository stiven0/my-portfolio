import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { auditTime, fromEvent } from 'rxjs';

import { MenuItems } from '@core/interfaces/menu-items';

@Component({
    selector: 'app-home-navbar',
    templateUrl: './home-navbar.component.html',
    styleUrls: ['./home-navbar.component.scss'],
    standalone: true,
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        RouterLink
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
  export class HomeNavbarComponent {

    private readonly destroyRef = inject(DestroyRef);

  readonly menuItems = signal<MenuItems[]>([
    { name: 'Sobre mí', redirectTo: 'about' },
    { name: 'Experiencia', redirectTo: 'experience' },
    { name: 'Proyectos', redirectTo: 'projects' },
    { name: 'Skills', redirectTo: 'skills' }
  ]);

    readonly activeSection = signal<string>('about');

    constructor() {
      fromEvent(window, 'scroll')
        .pipe(auditTime(50), takeUntilDestroyed(this.destroyRef))
        .subscribe(() => this.syncActiveSectionByScroll());

      setTimeout(() => this.syncActiveSectionByScroll(), 0);
    }

    setActive = ( sectionId: string ) => this.activeSection.set(sectionId);

    private syncActiveSectionByScroll(): void {
      const sections = this.menuItems();
      const triggerLine = window.innerHeight * 0.32;

      for (let i = sections.length - 1; i >= 0; i--) {
        const { redirectTo } = sections[i];
        const element = document.getElementById(redirectTo);
        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          this.activeSection.set(redirectTo);
          return;
        }
      }

      this.activeSection.set(sections[0]?.redirectTo ?? 'about');
    }

  openExternal = ( url: string ) => window.open( url, '_blank', 'noopener,noreferrer' );

}