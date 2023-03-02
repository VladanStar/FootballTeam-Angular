import { Component, OnInit } from '@angular/core';
import { PlayersDetailService } from 'src/app/services/players-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  playerData:any;
constructor(private service: PlayersDetailService){}
ngOnInit(): void {
this.playerData=this.service.playersDetails
}

}
