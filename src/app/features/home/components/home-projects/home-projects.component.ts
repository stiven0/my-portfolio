import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Projects } from '@core/interfaces/projects';

@Component({
    selector: 'app-home-projects',
    templateUrl: './home-projects.component.html',
    styleUrls: ['./home-projects.component.scss'],
    standalone: true,
    imports: [MatButtonModule, MatDividerModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeProjectsComponent {

  readonly projects = signal<Projects[]>([
    {
      image: 'dayvents.jpg',
      title: 'Dayvents 💙🤍',
      subtitle: 'Aplicación web y móvil en producción',
      description: 'Aplicación web progresiva (PWA) desplegada en Play Store con alrededor de 380 usuarios.',
      technologies: [ 'Javascript', 'Angular', 'NodeJS', 'Express', 'MongoDB' ],
      buttons: [  
        { name: 'ver web', url: 'https://dayvents.com/' }, 
        { name: 'play store', url: 'https://play.google.com/store/apps/details?id=com.dayvents.app' } 
      ],
      redirectTo: 'https://dayvents.com/'
    },
    {
      image: 'agvm.PNG',
      title: 'AGVM 🚀',
      subtitle: 'CLI open source para Angular',
      description: 'Administrador de versiones globales de Angular multiplataforma.',
      technologies: [ 'Javascript', 'Typescript', 'NodeJS', 'CLI' ],
      buttons: [
        { name: 'npm package', url: 'https://www.npmjs.com/package/agvm' },
        { name: 'ver repositorio', url: 'https://github.com/stiven0/agvm' },
      ],
      redirectTo: 'https://www.npmjs.com/package/agvm'
    },
    {
      image: 'day-phrase.jpg',
      title: 'Inspiración - Frases Diarias ✍🏼',
      subtitle: 'Aplicación móvil publicada',
      description: 'Aplicación movil que genera frases diarias.',
      technologies: [ 'Flutter', 'Dart' ],
      buttons: [
        { name: 'play store', url: 'https://play.google.com/store/apps/details?id=com.fraseapp.dev' }
      ],
      redirectTo: 'https://play.google.com/store/apps/details?id=com.fraseapp.dev'
    },
    {
      image: 'js-time-ago.jpg',
      title: 'Librería js-time-ago',
      subtitle: 'Librería npm para manejo de tiempo relativo',
      description: 'Librería que permite determinar hace cuánto tiempo ocurrió u ocurrirá un evento',
      technologies: [ 'Javascript', 'Typescript', 'NodeJS' ],
      buttons: [
        { name: 'ver repositorio', url: 'https://github.com/stiven0/js-time-ago' },
        { name: 'npm package', url: 'https://www.npmjs.com/package/js-time-ago' }
      ],
      redirectTo: 'https://www.npmjs.com/package/js-time-ago'
    },
    {
      image: 'github.png',
      title: 'Clean Architecture API',
      subtitle: 'Plantilla backend para APIs escalables',
      description: 'Backend API con arquitectura limpia usando Node.js, Express y TypeScript, orientado a mantenibilidad, escalabilidad y buenas prácticas.',
      technologies: [ 'NodeJS', 'Express', 'TypeScript' ],
      buttons: [
        { name: 'ver repositorio', url: 'https://github.com/stiven0/clean-architecture-api' }
      ],
      redirectTo: 'https://github.com/stiven0/clean-architecture-api'
    },
    {
      image: 'github.png',
      title: 'Clean Architecture Flutter',
      subtitle: 'Base móvil con enfoque en arquitectura limpia',
      description: 'Aplicación base en Flutter con Dart y Riverpod aplicando arquitectura limpia para separar responsabilidades y facilitar pruebas.',
      technologies: [ 'Flutter', 'Dart', 'Riverpod' ],
      buttons: [
        { name: 'ver repositorio', url: 'https://github.com/stiven0/clean-architecture-flutter' }
      ],
      redirectTo: 'https://github.com/stiven0/clean-architecture-flutter'
    }
  ]);

  redirectTo = ( url: string ) => window.open( url );

}