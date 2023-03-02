import { Component, OnInit } from '@angular/core';
import { PlayersDetailService } from 'src/app/services/players-detail.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
playerData:any;
constructor(private service:PlayersDetailService){}
ngOnInit(): void {
  this.playerData=this.service.playersDetails;
}

}
