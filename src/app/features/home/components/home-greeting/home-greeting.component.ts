import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-home-greeting',
    templateUrl: './home-greeting.component.html',
    styleUrls: ['./home-greeting.component.scss'],
    standalone: true,
    imports: [MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeGreetingComponent {
}