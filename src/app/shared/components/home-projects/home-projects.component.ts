import { Component } from '@angular/core';
import { Projects } from '@core/interfaces/projects';

@Component({
    selector: 'app-home-projects',
    templateUrl: './home-projects.component.html',
    styleUrls: ['./home-projects.component.scss'],
    standalone: false
})
export class HomeProjectsComponent {

  projects: Projects[] = [
    {
      image: 'dayvents.jpg',
      title: 'Dayvents 💙🤍',
      description: 'Aplicación web progresiva (PWA) desplegada en Play Store con alrededor de 380 usuarios.',
      technologies: [ 'Javascript', 'Angular', 'NodeJS', 'Express', 'MongoDB' ],
      buttons: [  
        { name: 'web', url: 'https://dayvents.com/' }, 
        { name: 'store', url: 'https://play.google.com/store/apps/details?id=com.dayvents.app' } 
      ],
      redirectTo: 'https://dayvents.com/'
    },
    {
      image: 'agvm.PNG',
      title: 'AGVM 🚀',
      description: 'Administrador de versiones globales de Angular multiplataforma.',
      technologies: [ 'Javascript', 'Typescript', 'NodeJS', 'CLI' ],
      buttons: [
        { name: 'web', url: 'https://www.npmjs.com/package/agvm' },
        { name: 'github', url: 'https://github.com/stiven0/agvm' },
      ],
      redirectTo: 'https://www.npmjs.com/package/agvm'
    },
    {
      image: 'day-phrase.jpg',
      title: 'Inspiración - Frases Diarias ✍🏼',
      description: 'Aplicación movil que genera frases diarias.',
      technologies: [ 'Flutter', 'Dart' ],
      buttons: [
        { name: 'store', url: 'https://play.google.com/store/apps/details?id=com.fraseapp.dev' }
      ],
      redirectTo: 'https://play.google.com/store/apps/details?id=com.fraseapp.dev'
    },
    {
      image: 'js-time-ago.jpg',
      title: 'Librería js-time-ago',
      description: 'Librería que permite determinar hace cuánto tiempo ocurrió u ocurrirá un evento',
      technologies: [ 'Javascript', 'Typescript', 'NodeJS' ],
      buttons: [
        { name: 'github', url: 'https://github.com/stiven0/js-time-ago' },
        { name: 'web', url: 'https://www.npmjs.com/package/js-time-ago' }
      ],
      redirectTo: 'https://www.npmjs.com/package/js-time-ago'
    }
  ];

  redirecTo = ( url: string ) => window.open( url );

}