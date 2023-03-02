import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrainerDetailsService {
  constructor() {}

  trainerDetails = [
    {
      id: 1,
      trainerName: 'Carlo Ancelotti',
      trainerImg:
        'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1246896283.jpeg',
    },
    {
      id: 2,
      trainerName: 'Jose Murinho',
      trainerImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2jUBeOeLM7dyxv3zlJb1TJFhJjUmFwiW77XOAjWTiZGNrEGi65EnHp4Ni9Bf8zHQftE&usqp=CAU',
    },
    {
      id: 3,
      trainerName: 'Josep Guardiola',
      trainerImg:
        'https://www.kurir.rs/data/images/2019/04/18/17/1827135_pepe-ap01_ls.jpg',
    },
  ];
}
