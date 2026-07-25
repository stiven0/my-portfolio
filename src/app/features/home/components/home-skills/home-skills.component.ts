import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-home-skills',
    templateUrl: './home-skills.component.html',
    styleUrls: ['./home-skills.component.scss'],
    standalone: true,
    imports: [MatButtonModule, TranslatePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSkillsComponent {
  openNewTab = ( url: string ) => window.open( url, '_blank');
}