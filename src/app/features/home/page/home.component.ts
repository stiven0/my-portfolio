import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HomeAboutComponent } from '@features/home/components/home-about/home-about.component';
import { HomeContactComponent } from '@features/home/components/home-contact/home-contact.component';
import { HomeExperienceComponent } from '@features/home/components/home-experience/home-experience.component';
import { HomeFooterComponent } from '@features/home/components/home-footer/home-footer.component';
import { HomeGreetingComponent } from '@features/home/components/home-greeting/home-greeting.component';
import { HomeNavbarComponent } from '@features/home/components/home-navbar/home-navbar.component';
import { HomeProjectsComponent } from '@features/home/components/home-projects/home-projects.component';
import { HomeSkillsComponent } from '@features/home/components/home-skills/home-skills.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
        HomeNavbarComponent,
        HomeGreetingComponent,
        HomeAboutComponent,
        HomeExperienceComponent,
        HomeProjectsComponent,
        HomeSkillsComponent,
        HomeContactComponent,
        HomeFooterComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
