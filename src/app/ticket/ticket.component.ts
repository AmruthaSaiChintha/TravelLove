import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Bus {
  charges: number;
  BusName: string;
  source: string;
  destination: string;
  departureTime: string;
  departureDate: string;
}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class ticketComponent implements OnInit {
  source: string = '';
  destination: string = '';
  departureDate: string = '';
  departureTime: string = '';
  BusName: string = '';
  charges: string = '';
  bankName: any;
  cardNumber: any;
  showSuccessMessage: boolean | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.source = history.state.source;
    this.destination = history.state.destination;
    this.departureDate = history.state.departureDate;
    this.departureTime = history.state.departureTime;
    this.BusName = history.state.BusName;
    this.charges = history.state.charges;
  }

  downloadTicket(): void {
    const doc = new jsPDF();
    doc.text(`Source: ${this.source}`, 20, 20);
    doc.text(`Destination: ${this.destination}`, 20, 30);
    doc.text(`Departure Date: ${this.departureDate}`, 20, 40);
    doc.text(`Departure Time: ${this.departureTime}`, 20, 50);
    doc.text(`BusName: ${this.BusName}`, 20, 60);
    doc.text(`Charges: ${this.charges}`, 20, 70);
    doc.save('ticket.pdf');
  }

  submitBankDetails() {
    const bankCredData = {
      userId: 123, // Replace with the actual user ID
      bankName: this.bankName,
      cardNumber: this.cardNumber,
      isActive: true // Set the status as needed
    };

    this.httpClient.post('https://localhost:44365/api/bankcreds', bankCredData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(
      (response) => {
        console.log('Bank card data sent:', response);
        this.showSuccessMessage = true; // Show success message after submitting
      },
      (error) => {
        console.error('Error sending bank card data:', error);
      }
    );
  }

  navigateToTicket() {
    this.router.navigate(['/ticket']); // Navigate to the ticket component
  }
  submitBankAndBookingDetails() {
  const bankCredData = {
    userId: 123, // Replace with the actual user ID
    bankName: this.bankName,
    cardNumber: this.cardNumber,
    isActive: true // Set the status as needed
  };

  const bookingData = {
    UserName: this.source, // Replace with the actual user name
    BusName: this.BusName,
    ContactNo: '1234567890', // Replace with the actual contact number
    Source: this.source,
    Destination: this.destination,
    DepartureDate: this.departureDate,
    charges: parseInt(this.charges) // Convert charges to an integer
  };

  // Send bank and booking details to the server
  this.httpClient.post('https://localhost:44365/api/bankcreds', bankCredData, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }).subscribe(
    (bankResponse) => {
      console.log('Bank card data sent:', bankResponse);

      // After bank response, save booking details
      this.httpClient.post('https://localhost:44365/api/Bookings', bookingData, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).subscribe(
        (bookingResponse) => {
          console.log('Booking data sent:', bookingResponse);
          this.showSuccessMessage = true; // Show success message after submitting
        },
        (bookingError) => {
          console.error('Error sending booking data:', bookingError);
        }
      );

    },
    (bankError) => {
      console.error('Error sending bank card data:', bankError);
    }
  );
}

}





