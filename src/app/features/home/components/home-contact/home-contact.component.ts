import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-home-contact',
    templateUrl: './home-contact.component.html',
    styleUrls: ['./home-contact.component.scss'],
    standalone: true,
    imports: [MatButtonModule, TranslatePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContactComponent {
  openNewTab = ( url: string ) => window.open( url, '_blank');
}