import { Component } from '@angular/core';

@Component({
    selector: 'app-home-footer',
    templateUrl: './home-footer.component.html',
    styleUrls: ['./home-footer.component.scss'],
    standalone: false
})
export class HomeFooterComponent {
  currentDate = new Date();
}
