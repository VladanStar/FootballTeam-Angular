import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersDetailService } from 'src/app/services/players-detail.service';

@Component({
  selector: 'app-teampage',
  templateUrl: './teampage.component.html',
  styleUrls: ['./teampage.component.css']
})
export class TeampageComponent  implements OnInit{
  getTeamId:any;
  teamData:any;

constructor(private param:ActivatedRoute, private service:PlayersDetailService){}

ngOnInit(): void {
  this.getTeamId = this.param.snapshot.paramMap.get('id');
  console.log(this.getTeamId,'getteam');
if(this.getTeamId){
  this.teamData =  this.service.playersDetails.filter((value)=>{
    return value.id == this.getTeamId;
  });
  console.log(this.teamData,'teamdata');
}
}

}
