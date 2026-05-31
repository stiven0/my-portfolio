import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-home-contact',
    templateUrl: './home-contact.component.html',
    styleUrls: ['./home-contact.component.scss'],
    standalone: true,
    imports: [MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContactComponent {
  openNewTab = ( url: string ) => window.open( url, '_blank');
}