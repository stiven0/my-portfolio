import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { TranslatePipe } from '@ngx-translate/core';
import { Projects } from '@core/interfaces/projects';

@Component({
    selector: 'app-home-projects',
    templateUrl: './home-projects.component.html',
    styleUrls: ['./home-projects.component.scss'],
    standalone: true,
    imports: [MatButtonModule, MatDividerModule, TranslatePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeProjectsComponent {

  readonly projects = signal<Projects[]>([
    {
      image: 'dayvents.jpg',
      title: 'projects.items.dayvents.title',
      subtitle: 'projects.items.dayvents.subtitle',
      description: 'projects.items.dayvents.description',
      technologies: [ 'Javascript', 'Angular', 'NodeJS', 'Express', 'MongoDB' ],
      buttons: [  
        { name: 'projects.items.dayvents.buttons.web', url: 'https://dayvents.com/' }, 
        { name: 'projects.items.dayvents.buttons.store', url: 'https://play.google.com/store/apps/details?id=com.dayvents.app' } 
      ],
      redirectTo: 'https://dayvents.com/'
    },
    {
      image: 'agvm.PNG',
      title: 'projects.items.agvm.title',
      subtitle: 'projects.items.agvm.subtitle',
      description: 'projects.items.agvm.description',
      technologies: [ 'Javascript', 'Typescript', 'NodeJS', 'CLI' ],
      buttons: [
        { name: 'projects.items.agvm.buttons.npm', url: 'https://www.npmjs.com/package/agvm' },
        { name: 'projects.items.agvm.buttons.repo', url: 'https://github.com/stiven0/agvm' },
      ],
      redirectTo: 'https://www.npmjs.com/package/agvm'
    },
    {
      image: 'day-phrase.jpg',
      title: 'projects.items.dayPhrase.title',
      subtitle: 'projects.items.dayPhrase.subtitle',
      description: 'projects.items.dayPhrase.description',
      technologies: [ 'Flutter', 'Dart' ],
      buttons: [
        { name: 'projects.items.dayPhrase.buttons.store', url: 'https://play.google.com/store/apps/details?id=com.fraseapp.dev' }
      ],
      redirectTo: 'https://play.google.com/store/apps/details?id=com.fraseapp.dev'
    },
    {
      image: 'js-time-ago.jpg',
      title: 'projects.items.timeAgo.title',
      subtitle: 'projects.items.timeAgo.subtitle',
      description: 'projects.items.timeAgo.description',
      technologies: [ 'Javascript', 'Typescript', 'NodeJS' ],
      buttons: [
        { name: 'projects.items.timeAgo.buttons.repo', url: 'https://github.com/stiven0/js-time-ago' },
        { name: 'projects.items.timeAgo.buttons.npm', url: 'https://www.npmjs.com/package/js-time-ago' }
      ],
      redirectTo: 'https://www.npmjs.com/package/js-time-ago'
    },
    {
      image: 'github.png',
      title: 'projects.items.cleanApi.title',
      subtitle: 'projects.items.cleanApi.subtitle',
      description: 'projects.items.cleanApi.description',
      technologies: [ 'NodeJS', 'Express', 'TypeScript' ],
      buttons: [
        { name: 'projects.items.cleanApi.buttons.repo', url: 'https://github.com/stiven0/clean-architecture-api' }
      ],
      redirectTo: 'https://github.com/stiven0/clean-architecture-api'
    },
    {
      image: 'github.png',
      title: 'projects.items.cleanFlutter.title',
      subtitle: 'projects.items.cleanFlutter.subtitle',
      description: 'projects.items.cleanFlutter.description',
      technologies: [ 'Flutter', 'Dart', 'Riverpod' ],
      buttons: [
        { name: 'projects.items.cleanFlutter.buttons.repo', url: 'https://github.com/stiven0/clean-architecture-flutter' }
      ],
      redirectTo: 'https://github.com/stiven0/clean-architecture-flutter'
    }
  ]);

  redirectTo = ( url: string ) => window.open( url );

}