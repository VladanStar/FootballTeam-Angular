import { Component, OnInit } from '@angular/core';
import { PlayersDetailService } from 'src/app/services/players-detail.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  searchText: any;
  playerData: any;
  totalLength:any;
  page: number = 1;
  p: any;

  constructor(private service: PlayersDetailService) {}

  ngOnInit(): void {
    this.playerData = this.service.playersDetails;
    this.totalLength = this.playerData.length;
    console.log(this.playerData);
  }

  deleteItem(i: number) {
    console.log(i);
    this.playerData.splice(i, 1);
    console.log(this.playerData);
  }
}
