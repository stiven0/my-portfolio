import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';

// components
import { HomeNavbarComponent } from '@shared/components/home-navbar/home-navbar.component';
import { HomeAboutComponent } from '@shared/components/home-about/home-about.component';
import { HomeProjectsComponent } from '@shared/components/home-projects/home-projects.component';
import { HomeSkillsComponent } from '@shared/components/home-skills/home-skills.component';
import { HomeContactComponent } from '@shared/components/home-contact/home-contact.component';
import { HomeFooterComponent } from '@shared/components/home-footer/home-footer.component';
import { HomeGreetingComponent } from '@shared/components/home-greeting/home-greeting.component';

@NgModule({
    declarations: [
        HomeNavbarComponent,
        HomeGreetingComponent,
        HomeAboutComponent,
        HomeProjectsComponent,
        HomeSkillsComponent,
        HomeContactComponent,
        HomeFooterComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        AngularMaterialModule 
    ],
    exports: [
        AngularMaterialModule,
        HomeNavbarComponent,
        HomeGreetingComponent,
        HomeAboutComponent,
        HomeProjectsComponent,
        HomeSkillsComponent,
        HomeContactComponent,
        HomeFooterComponent
    ]
})
export class SharedModule {}