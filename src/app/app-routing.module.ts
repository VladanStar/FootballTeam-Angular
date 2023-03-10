import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeampageComponent } from './pages/teampage/teampage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FansWallComponent } from './pages/fans-wall/fans-wall.component';
import { AddDialogComponent } from './pages/add-dialog/add-dialog.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'add', component:AddDialogComponent},
{path:'team',component:TeamComponent},
{path:'team/:id',component:TeampageComponent},
{path:'about', component:AboutComponent},
{path:'fans', component:FansWallComponent},
{path:'contact', component:ContactComponent},

{path:"not-found", component:NotFoundComponent},
{ path: '**', redirectTo: '/not-found' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
