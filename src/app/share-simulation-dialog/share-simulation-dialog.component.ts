import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  info: string;
}

@Component({
  selector: 'app-share-simulation-dialog',
  templateUrl: './share-simulation-dialog.component.html',
  styleUrls: ['./share-simulation-dialog.component.css']
})
export class ShareSimulationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShareSimulationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
