import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from '@pages/home/home.component';

const routes: Routes = [
    { path: '',     component: HomeComponent },
    { path: '**',   component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { 
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
