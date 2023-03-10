import { Component, OnInit } from '@angular/core';
import { PlayersDetailService } from 'src/app/services/players-detail.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
searchText:any;
playerData:any;

constructor(private service:PlayersDetailService){}
ngOnInit(): void {
  this.playerData=this.service.playersDetails;
}
deleteItem(i:any){
console.log(i);
this.playerData.splice(i,1)
console.log(this.playerData)
}
}
