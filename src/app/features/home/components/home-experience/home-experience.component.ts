import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-home-experience',
    templateUrl: './home-experience.component.html',
    styleUrls: ['./home-experience.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeExperienceComponent {
}
