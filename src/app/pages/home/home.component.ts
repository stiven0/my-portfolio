import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HomeAboutComponent } from '@shared/components/home-about/home-about.component';
import { HomeContactComponent } from '@shared/components/home-contact/home-contact.component';
import { HomeFooterComponent } from '@shared/components/home-footer/home-footer.component';
import { HomeGreetingComponent } from '@shared/components/home-greeting/home-greeting.component';
import { HomeNavbarComponent } from '@shared/components/home-navbar/home-navbar.component';
import { HomeProjectsComponent } from '@shared/components/home-projects/home-projects.component';
import { HomeSkillsComponent } from '@shared/components/home-skills/home-skills.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
        HomeNavbarComponent,
        HomeGreetingComponent,
        HomeAboutComponent,
        HomeProjectsComponent,
        HomeSkillsComponent,
        HomeContactComponent,
        HomeFooterComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
