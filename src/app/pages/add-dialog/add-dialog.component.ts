import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayersDetailService } from 'src/app/services/players-detail.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  playerForm!: FormGroup;



  uneseniTekst:any;
  ime:string='';
  poruka:string="";
  profil:string="";
    message :string="";
    empList: Array<{profil: string, message: string}> = [];

ngOnInit(): void {
  this.playerForm = new FormGroup({
    'playerName':new FormControl(null, [Validators.required]),
    'international': new FormControl(null, [Validators.required]),
    'transfer':new FormControl(null, Validators.required),
    'content':new FormControl('write text',[ Validators.required, Validators.maxLength(250)])
    });

}
addPlayer(){
console.log(this.playerForm.value)
}
}
