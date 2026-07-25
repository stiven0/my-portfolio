import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-home-experience',
    templateUrl: './home-experience.component.html',
    styleUrls: ['./home-experience.component.scss'],
    standalone: true,
    imports: [TranslatePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeExperienceComponent {
}
