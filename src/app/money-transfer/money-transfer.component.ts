import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet if using standalone component

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [RouterOutlet], // Import RouterOutlet for routing
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss'],
})
export class MoneyTransferComponent {
  amount: number = 1000;
  recipientName: string = '';
  recipientAccount: string = '';

  onContinue() {
    console.log('Amount:', this.amount);
    console.log('Recipient Name:', this.recipientName);
    console.log('Recipient Account:', this.recipientAccount);
  }
}
