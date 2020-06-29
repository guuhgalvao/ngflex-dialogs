import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  info: string;
}

@Component({
  selector: 'app-rates-values-dialog',
  templateUrl: './rates-values-dialog.component.html',
  styleUrls: ['./rates-values-dialog.component.css']
})
export class RatesValuesDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RatesValuesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
