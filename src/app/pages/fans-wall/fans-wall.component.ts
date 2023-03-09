import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from './custom-validators';

@Component({
  selector: 'app-fans-wall',
  templateUrl: './fans-wall.component.html',
  styleUrls: ['./fans-wall.component.css']
})
export class FansWallComponent  implements OnInit{
  projectForm!: FormGroup;
  uneseniTekst:any;
  ime:string='';
  poruka:string="";


  messageArray:Array<{user:string,message:string}> = [];

  ngOnInit(): void {
  this.projectForm = new FormGroup({
  'projectName':new FormControl(null, [Validators.required, ForbiddenNameValidator(/Test/)]),
  'email': new FormControl(null, [Validators.required, Validators.email]),
  'projectStatus':new FormControl('Fans'),
  'content':new FormControl('write text',[ Validators.required, Validators.maxLength(250)])
  });
  }
  onSaveProject(){
  console.log(this.projectForm.value)
  this.ime = this.projectForm.value.projectName;
  this.poruka = this.projectForm.value.content;

  }
}
