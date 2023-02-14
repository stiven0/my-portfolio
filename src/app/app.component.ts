import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  ngAfterContentInit(): void {

    const srcConfettiJS = 'assets/lib/confetti.js';

    window.onload = () => {
      let confettiJS = document.createElement('script');
      confettiJS.src = srcConfettiJS;
      document.head.appendChild(confettiJS);
    }

  }

}