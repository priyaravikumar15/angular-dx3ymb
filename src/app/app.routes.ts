import { Routes} from '@angular/router'; 
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const approutes:Routes =[
  { path:'' , redirectTo:'/home', pathMatch :'full'},
  { path:'home' , component:HomeComponent}
]

export const routing = RouterModule.forRoot(approutes);