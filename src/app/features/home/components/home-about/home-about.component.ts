import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-home-about',
    templateUrl: './home-about.component.html',
    styleUrls: ['./home-about.component.scss'],
    standalone: true,
    imports: [TranslatePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAboutComponent {
}