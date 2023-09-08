import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { aboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './Admin/Admin.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { viewbusesComponent } from './viewbuses/viewbuses.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { searchComponent } from './search/search.component';
import { booknowComponent } from './booknow/booknow.component';
import { ticketComponent } from './ticket/ticket.component';
import { regbusesComponent } from './regbuses/regbuses.component';
import { FaceComponent } from './face/face.component';
import { FeedbackuserComponent } from './feedbackuser/feedbackuser.component';
import { TransactionComponent } from './transaction/transaction.component';
import { JourneyComponent } from './journey/journey.component';
import { ProfilefaceComponent } from './profileface/profileface.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { NotesComponent } from './notes/notes.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { BusInfoComponent } from './bus-info/bus-info.component';
import { SelectseatComponent } from './selectseat/selectseat.component';
import { SeatinfoComponent } from './seatinfo/seatinfo.component';
import { ViewbookComponent } from './viewbook/viewbook.component';

const routes: Routes = [


  {path:"",component:IndexComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"Admin",component:AdminComponent},
  {path:"about",component:aboutComponent},
  {path:"booknow",component:booknowComponent},
  {path:"regbuses",component:regbusesComponent},
   {path:"signup",component:SignupComponent},
   {path:"ContactUs",component:ContactUsComponent},
   {path:"customerDashboard",component:CustomerDashboardComponent},
   {path:"adminDashboard",component:AdminDashboardComponent},
   {path:"viewbuses",component:viewbusesComponent},
   {path:"face",component:FaceComponent},
  { path: 'search', component: searchComponent },
   { path: 'ticket', component: ticketComponent },
   {path:"feedbackuser",component:FeedbackuserComponent},
   {path:"transaction",component:TransactionComponent},
  {path:"journey",component:JourneyComponent},

  {path:"profileface",component:ProfilefaceComponent},
  {path:"viewprofile",component:ViewprofileComponent},
  {path:"notes",component:NotesComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"viewbookings",component:ViewbookingsComponent},
  {path:"businfo",component:BusInfoComponent},
  {path:"selectseat",component:SelectseatComponent},
  {path:"seatinfo",component:SeatinfoComponent},
  {path:"viewbook",component:ViewbookComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
