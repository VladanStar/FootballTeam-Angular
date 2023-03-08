import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeampageComponent } from './pages/teampage/teampage.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { NotFoundComponent } from './pages/not-found/not-found.component';
>>>>>>> 9fe67e46d032551c30a09bd2ea55f4714739fc1b

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    TeampageComponent,
<<<<<<< HEAD


=======
    NotFoundComponent
>>>>>>> 9fe67e46d032551c30a09bd2ea55f4714739fc1b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
