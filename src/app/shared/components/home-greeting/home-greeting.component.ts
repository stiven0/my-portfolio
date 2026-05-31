import { Component } from '@angular/core';

@Component({
    selector: 'app-home-greeting',
    templateUrl: './home-greeting.component.html',
    styleUrls: ['./home-greeting.component.scss'],
    standalone: false
})
export class HomeGreetingComponent {
  redirecTo = ( url: string ) => window.open( url );
}