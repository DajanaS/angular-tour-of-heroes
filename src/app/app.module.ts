import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { RouterModule } from '@angular/router';
import { DashBoardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }, {
        path: 'dashboard',
        component: DashBoardComponent
      }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }, {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
