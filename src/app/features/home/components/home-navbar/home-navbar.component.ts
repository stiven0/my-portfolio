import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

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

  readonly menuItems = signal<MenuItems[]>([
    { name: 'Sobre mí', redirectTo: 'about' },
    { name: 'Experiencia', redirectTo: 'experience' },
    { name: 'Proyectos', redirectTo: 'projects' },
    { name: 'Skills', redirectTo: 'skills' },
    { name: 'Contacto', redirectTo: 'contact' }
  ]);

  openExternal = ( url: string ) => window.open( url, '_blank', 'noopener,noreferrer' );

}