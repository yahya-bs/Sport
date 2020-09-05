import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdressComponent } from './components/adress/adress.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { EventComponent } from './components/event/event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddMatchComponent } from './components/add-match/add-match.component';
import { ScoresComponent } from './components/scores/scores.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { HttpClientModule } from '@angular/common/http';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TrColorDirective } from './Directives/tr-color.directive';
import { AllUsersComponent } from './all-users/all-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdressComponent,
    ContactUsComponent,
    LoginComponent,
    SignUpComponent,
    AdminComponent,
    ServiceComponent,
    HomeComponent,
    MatchesComponent,
    EventComponent,
    ScoreComponent,
    NewsComponent,
    VideosComponent,
    BlogComponent,
    InfoComponent,
    AddMatchComponent,
    ScoresComponent,
    PlayerComponent,
    PlayersComponent,
    DisplayPlayerComponent,
    DisplayUserComponent,
    ReversePipe,
    TrColorDirective,
    AllUsersComponent,
    EditUserComponent,
    ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
