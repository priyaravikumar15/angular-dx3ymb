import { Routes} from '@angular/router'; 
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

export const approutes:Routes =[
  { path:'' , redirectTo:'/home', pathMatch :'full'},
  { path:'home' , component:HomeComponent},
  {path:'Shop',component:ShopComponent}
]

export const routing = RouterModule.forRoot(approutes);