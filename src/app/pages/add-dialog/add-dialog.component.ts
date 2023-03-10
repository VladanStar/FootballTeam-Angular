import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayersDetailService } from 'src/app/services/players-detail.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css'],
})
export class AddDialogComponent implements OnInit {

constructor(private service:PlayersDetailService ){}
  playerForm!: FormGroup;
  playerData:any;

  uneseniTekst: any;
  ime: string = '';
  poruka: string = '';
  profil: string = '';
  message: string = '';
  empList: Array<{ profil: string; message: string }> = [];
player:any={ime:'Vladan Cupric', int:"Serbian"}
  ngOnInit(): void {
this.playerData=this.service.playersDetails;
    this.playerForm = new FormGroup({
      playerName: new FormControl(null, [Validators.required]),
      international: new FormControl(null, [Validators.required]),
      transfer: new FormControl(null, Validators.required),
      content: new FormControl('write text', [
        Validators.required,
        Validators.maxLength(150),
      ]),
    });
  }
  addPlayer() {
    console.log(this.playerForm.value);
this.playerData=this.playerData.push(this.player)
console.log(this.playerData)
this.playerForm.reset();
  }
}
