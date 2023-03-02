import { Component, OnInit } from '@angular/core';
import { PlayersDetailService } from 'src/app/services/players-detail.service';
import { TrainerDetailsService } from 'src/app/services/trainer-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  playerData:any;
trainerData:any
constructor(private service: PlayersDetailService, private trservice:TrainerDetailsService){}
ngOnInit(): void {
this.playerData=this.service.playersDetails;
this.trainerData=this.trservice.trainerDetails;
}

}

