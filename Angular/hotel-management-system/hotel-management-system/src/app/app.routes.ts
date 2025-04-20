import { Routes } from '@angular/router';
import { LoginComponent } from './components/user-login/user-login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { authGuard } from './auth.guard';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AdminHistoryPageComponent } from './components/admin-history-page/admin-history-page.component';
import { CustomerHistoryPageComponent } from './components/customer-history-page/customer-history-page.component';
import { RoomStatusComponent } from './components/room-status/room-status.component';
import { UserCheckoutComponent } from './components/user-checkout/user-checkout.component';
//import { HistoryPageComponent } from './components/history-page/history-page.component';


export const routes: Routes = [
    {path:'reservations', component:ReservationComponent},
    { path: 'mainpage', component: MainPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'homepage', component: HomepageComponent, canActivate:[authGuard] },
    { path: 'signup', component: SignupComponent },
    { path: 'admin/login', component: AdminLoginComponent },
    { path: 'admin/homepage', component: AdminHomepageComponent },
    { path: 'admin/admin-history-page', component: AdminHistoryPageComponent},
    {path:'history-by-id/:id', loadComponent:()=> import('./components/history-page/history-page.component').then(m=>m.HistoryPageComponent)},
    { path: 'customer-history-page', component: CustomerHistoryPageComponent},
    { path: 'admin/room-status', component:RoomStatusComponent},
    { path: 'user-checkout', component: UserCheckoutComponent },
];
