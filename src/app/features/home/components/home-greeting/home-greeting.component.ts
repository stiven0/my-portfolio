import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-home-greeting',
    templateUrl: './home-greeting.component.html',
    styleUrls: ['./home-greeting.component.scss'],
    standalone: true,
    imports: [MatButtonModule, TranslatePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeGreetingComponent {
}