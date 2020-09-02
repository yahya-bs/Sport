import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { AdressComponent } from './components/adress/adress.component';
import { ServiceComponent } from './service/service.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { ScoresComponent } from './components/scores/scores.component';
import { PlayersComponent } from './components/players/players.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'address', component: AdressComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'matches', component: MatchesComponent},
  { path: 'addmatch', component: AddMatchComponent},
  { path: 'scores', component: ScoresComponent},
  { path: 'players', component: PlayersComponent},
  { path: 'displayMatch/:id', component: DisplayMatchComponent},
  { path: 'displayPlayer/:id', component: DisplayPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
