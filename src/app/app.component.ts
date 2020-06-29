import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareSimulationDialogComponent } from './share-simulation-dialog/share-simulation-dialog.component';
import { RatesValuesDialogComponent } from './rates-values-dialog/rates-values-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  info = 'Teste';

  constructor(public dialog: MatDialog) {}

  openShareSimulationDialog(): void {
    const dialogRef = this.dialog.open(ShareSimulationDialogComponent, {
      width: '40vw',
      height: '90vh',
      data: {info: this.info}
    });
  }

  openRatesAndValuesDialog(): void {
    const dialogRef = this.dialog.open(RatesValuesDialogComponent, {
      width: '90vw',
      height: '75vh',
      data: {info: this.info}
    });
  }
}
