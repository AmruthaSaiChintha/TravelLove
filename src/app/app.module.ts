import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { aboutComponent } from './about/about.component';
import {AdminComponent}from './Admin/Admin.component';
import { MenuComponent } from './menu/menu.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { viewbusesComponent } from './viewbuses/viewbuses.component';
import { searchComponent} from './search/search.component';
import { PostModule } from './post/post.module';
import { BookModule } from './book/book.module';
import { booknowComponent } from './booknow/booknow.component';
import { ticketComponent } from './ticket/ticket.component';
import { regbusesComponent } from './regbuses/regbuses.component';
import { ProfiComponent } from './profi/profi.component';
import { FaceComponent } from './face/face.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackuserComponent } from './feedbackuser/feedbackuser.component';

import { Post5Module } from './post5/post5.module';
import { SeatComponent } from './seat/seat.component';
import { TransactionComponent } from './transaction/transaction.component';
import { JourneyComponent } from './journey/journey.component';

import { ProfilefaceComponent } from './profileface/profileface.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { NotesComponent } from './notes/notes.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';

import { BusInfoComponent } from './bus-info/bus-info.component';
import { SelectseatComponent } from './selectseat/selectseat.component';
import { SeatinfoComponent } from './seatinfo/seatinfo.component';
import { ViewbookComponent } from './viewbook/viewbook.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    NavbarComponent,
   
       ProfileComponent,
       aboutComponent,
       searchComponent,
       ticketComponent,
       booknowComponent,
       regbusesComponent,
       AdminComponent,
       AdminDashboardComponent,
       ContactUsComponent,
        MenuComponent,
        SignupComponent,
        CustomerDashboardComponent,
        viewbusesComponent,
        ProfiComponent,
        FaceComponent,
        FeedbackComponent,
        FeedbackuserComponent,
        SeatComponent,
        TransactionComponent,
        JourneyComponent,
     
        ProfilefaceComponent,
        ViewprofileComponent,
        NotesComponent,
        ViewbookingsComponent,
       
        BusInfoComponent,
        SelectseatComponent,
        SeatinfoComponent,
        ViewbookComponent
      
      
       
       
      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PostModule,
    BookModule,
    Post5Module,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
