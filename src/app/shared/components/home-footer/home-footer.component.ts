import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
    selector: 'app-home-footer',
    templateUrl: './home-footer.component.html',
    styleUrls: ['./home-footer.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFooterComponent {
  readonly currentYear = signal(new Date().getFullYear());
}
