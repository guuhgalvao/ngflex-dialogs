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

  shareZapZap(): void {
    let msg = `Marca: Chevrolet\nAno do modelo: 2018\nAno de fabricação: 2018\n\n*48x de R$ 208,33*`;
    let target = `https://api.whatsapp.com/send?phone=${encodeURIComponent('+55 11 99451-7370')}&text=${encodeURIComponent(msg)}`;
    window.open(target);
    // console.log('test');
  }

}
