import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayersDetailService } from 'src/app/services/players-detail.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css'],
})
export class AddDialogComponent implements OnInit {
  constructor(private service: PlayersDetailService) {}
  playerForm!: FormGroup;
  playerData: any;
  ime: any = '';
  details: any;
  playerName: string = '';
  poruka: string = '';
  text: string = '';
  transfer: number = 0;

  profil: string = '';
  message: string = '';
  playerList: Array<{
    profil: string;
    message: string;
    text: string;
    trans: number;
  }> = [];
  player: any = { playerName: this.playerName, int: 'Serbian' };
  ngOnInit(): void {
    this.playerData = this.service.playersDetails;
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
    this.ime = this.playerForm.value.playerName;
    this.details = this.playerForm.value.content;
    this.player = { playerName: this.ime, playerDetails: this.details };
    this.playerData = this.playerData.push(this.player);

    console.log(this.ime);
    console.log(this.playerData);
    this.playerForm.reset();
  }
}
