import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersDetailService {

  constructor() { }


//playersDetails
playersDetails = [
  {
    id:1,
    playerName:"Kylian Mbappé",
    playerDetails:"Winner of Golden Boy.  Award - 2017. Winner of French Player of the Year Award - 2018.",
    playerTransferMarket:180.00,
    international:"France",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/342229-1632686046.jpg?lm=1"
  },
  {
    id:2,
    playerName:"Erling Haaland",
    playerDetails:"Most goals scored by a player in a single match at a FIFA U-20 World Cup (9 goals)",
    playerTransferMarket:170.00,
    international:"Norway",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/418560-1656179352.jpg?lm=1"
  },
  {
    id:3,
    playerName:"Vinicius Junior",
    playerDetails:"Main position:Left Winger Other position:Right Winger",
    playerTransferMarket:120,
    international:"Brazil",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/371998-1664869583.jpg?lm=1"
  },
  {
    id:4,
    playerName:"Phil Foden",
    playerDetails:"Reddish Vulcans, Manchester City (2009-2017)",
    playerTransferMarket:110,
    international:"England",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/406635-1668524492.jpg?lm=1"
  },
  {
    id:5,
    playerName:"Jude Bellingham",
    playerDetails:"Youngest ever player to feature for Birmingham City at the age of 16 years and 38 days old.",
    playerTransferMarket:110,
    international:"England",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/581678-1661412719.jpg?lm=1"
  },
  {
    id:6,
    playerName:"Pedri",
    playerDetails:"Main position:Central Midfield",
    playerTransferMarket:100,
    international:"Spain",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/683840-1620304992.jpg?lm=1"
  }, {
    id:7,
    playerName:"Jamal Musiala",
    playerDetails:"TSV Lehnerz (2008-2010), Southampton FC (2010-2011), Chelsea FC (2011-2019), FC Bayern München (2019-2020)",
    playerTransferMarket:100,
    international:"Germany",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/580195-1667830802.jpg?lm=1"
  },
  {
    id:8,
    playerName:"Bukayo Saka",
    playerDetails:"Greenford Celtic, Watford FC (-2008), Arsenal FC (2008-2019)",
    playerTransferMarket:100,
    international:"England",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/433177-1669294809.jpg?lm=1"
  },
  {
    id:9,
    playerName:"Federico Valverde",
    playerDetails:"Club Estudiantes (La Unión), Exploradores (Artigas), Siete Estrellas (2008-2010), Carabelas (2011)",
    playerTransferMarket:100,
    international:"Uruguay",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/369081-1581501132.jpg?lm=1"
  },
  {
    id:10,
    playerName:"Pablo Gavira Gavi",
    playerDetails:"Main position:Central Midfield",
    playerTransferMarket:90,
    international:"Spain",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/646740-1653039221.jpg?lm=1"
  },
  {
    id:11,
    playerName:"Thibaut Courtois",
    playerDetails:"Bilzen VV (1997–1999), KRC Genk (1999-2009)",
    playerTransferMarket:60,
    international:"Belgium",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/108390-1665067957.jpg?lm=1"
  },{
    id:1,
    playerName:"Kylian Mbappé",
    playerDetails:"Winner of Golden Boy.  Award - 2017. Winner of French Player of the Year Award - 2018.",
    playerTransferMarket:180.00,
    international:"France",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/342229-1632686046.jpg?lm=1"
  },
  {
    id:2,
    playerName:"Erling Haaland",
    playerDetails:"Most goals scored by a player in a single match at a FIFA U-20 World Cup (9 goals)",
    playerTransferMarket:170.00,
    international:"Norway",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/418560-1656179352.jpg?lm=1"
  },
  {
    id:3,
    playerName:"Vinicius Junior",
    playerDetails:"Main position:Left Winger Other position:Right Winger",
    playerTransferMarket:120,
    international:"Brazil",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/371998-1664869583.jpg?lm=1"
  },
  {
    id:4,
    playerName:"Phil Foden",
    playerDetails:"Reddish Vulcans, Manchester City (2009-2017)",
    playerTransferMarket:110,
    international:"England",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/406635-1668524492.jpg?lm=1"
  },
  {
    id:5,
    playerName:"Jude Bellingham",
    playerDetails:"Youngest ever player to feature for Birmingham City at the age of 16 years and 38 days old.",
    playerTransferMarket:110,
    international:"England",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/581678-1661412719.jpg?lm=1"
  },
  {
    id:6,
    playerName:"Pedri",
    playerDetails:"Main position:Central Midfield",
    playerTransferMarket:100,
    international:"Spain",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/683840-1620304992.jpg?lm=1"
  }, {
    id:7,
    playerName:"Jamal Musiala",
    playerDetails:"TSV Lehnerz (2008-2010), Southampton FC (2010-2011), Chelsea FC (2011-2019), FC Bayern München (2019-2020)",
    playerTransferMarket:100,
    international:"Germany",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/580195-1667830802.jpg?lm=1"
  },
  {
    id:8,
    playerName:"Bukayo Saka",
    playerDetails:"Greenford Celtic, Watford FC (-2008), Arsenal FC (2008-2019)",
    playerTransferMarket:100,
    international:"England",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/433177-1669294809.jpg?lm=1"
  },
  {
    id:9,
    playerName:"Federico Valverde",
    playerDetails:"Club Estudiantes (La Unión), Exploradores (Artigas), Siete Estrellas (2008-2010), Carabelas (2011)",
    playerTransferMarket:100,
    international:"Uruguay",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/369081-1581501132.jpg?lm=1"
  },
  {
    id:10,
    playerName:"Pablo Gavira Gavi",
    playerDetails:"Main position:Central Midfield",
    playerTransferMarket:90,
    international:"Spain",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/646740-1653039221.jpg?lm=1"
  },
  {
    id:11,
    playerName:"Thibaut Courtois",
    playerDetails:"Bilzen VV (1997–1999), KRC Genk (1999-2009)",
    playerTransferMarket:60,
    international:"Belgium",
    playerImg:"https://img.a.transfermarkt.technology/portrait/header/108390-1665067957.jpg?lm=1"
  }




]
}
