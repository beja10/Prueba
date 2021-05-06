
/*
class League {
  leagueName: string;
  country: string;
  cathegory: number;
  //lista de equipos de clase Club
  teams:Club[];
  //partidos(array bidimensional)
  games:Game[][];

  constructor(name:string, country:string, cathegory:number, teams:Club[]) {
    this.leagueName = name;
    this.country = country;
    this.cathegory = cathegory;
    this.teams = teams;
    //con esto y la siguiente linea genero el array bidimensional de partidos
    this.games = new Array(teams.length);

    //crear segunda dimension
    for (var i:number = 0; i < teams.length; i++) {
      this.games[i] = new Array(teams.length);
    }
  }

  //paso el indice de cada equipo para almacenar el partido en esa posicion
  setGameStatsByIds(homeTeam:number, awayTeam:number, game:Game) {
    if (homeTeam >= 0 && awayTeam >= 0 && homeTeam != awayTeam && homeTeam < this.teams.length && awayTeam < this.teams.length) {
      this.games[homeTeam][awayTeam] = game;
    } else {
      console.log("No la lies mostro, has metido un id sin sentido.");
    }    
  }

  //devuelve el id dado de un equipo de tipo Club
  getIdFromTeam(team:Club):number {
    var i = 0;
    while(i < this.teams.length && team != this.teams[i]) {
      i++;
    }
    if (i < this.teams.length) {
      return i;
    } else {
      return -1;
    }
  }

  //dado el equipo de casa y de fuera almaceno el partido
  setGameStatsByTeams(homeTeam:Club, awayTeam:Club, game:Game) {
    var homeId:number = this.getIdFromTeam(homeTeam);
    var awayId:number = this.getIdFromTeam(awayTeam);
    this.setGameStatsByIds(homeId, awayId, game);
  }

  //buscar equipo por id
  getTeam(id:number):Club {
    return this.teams[id];
  }
}

class Club {
  clubName: string;
  stadium: string;
  year: number;

  constructor(name:string, stadium:string, year:number) {
    this.clubName = name;
    this.stadium = stadium;
    this.year = year;
  }
}

class Game {
  statsHome:Stats;
  statsAway:Stats;
}

class Stats {
  goals: number;
}

//tuple
class Jornada {
  games:[number, number][];
}

class Table {
  points: number;
  won: number;
  drawn: number;
  lost: number;
  for: number;
  against: number;

  constructor(poi:number, w:number, d:number, l:number, f:number, aga:number) {
    this.points = poi;
    this.won = w;
    this.drawn = d;
    this.lost = l;
    this.for = f;
    this.against = aga;
  }
  
  goalDif():number {
    return this.for - this.against;
  }
}

//CLUBS
const malagacf = new Club("Málaga C.F.", "La Rosaleda", 1904);
const cdestepona = new Club("C.D. Estepona", "Miguel Muñoz Pérez", 1995);
const camalaga = new Club("C.A. Malagueño", "Ciudad Deportiva de la Federación Malagueña", 1990);
const elpalocf = new Club("El Palo C.F.", "Nuevo San Ignacio", 1965);
const cdalhaurino = new Club("C.D. Alhaurino", "Miguel Fijones", 1908);
const velezcf = new Club("Vélez C.F.", "Vivar Téllez", 1990);
const jtorremcf = new Club("Juventud Torremolinos C.F.", "Municipal El Pozuelo", 1958);
const alhtorrecf = new Club("Alhaurín de la Torre C.F.", "Los Manantiales", 1969);
const anteqcf = new Club("Antequera C.F.", "El Maulí", 1992);
const marbellafc = new Club("Marbella F.C.", "Antonio Lorenzo Cuevas", 1997);

var arrayClubs:Club[] = [];
arrayClubs.push(malagacf, cdestepona, camalaga, elpalocf, cdalhaurino, velezcf, jtorremcf, alhtorrecf, anteqcf, marbellafc);

console.log(arrayClubs);

//LEAGUE
const liga = new League("Superliga Malacitana", "España", 1, arrayClubs);

//HOME STATS
const homeStats = new Stats();

//AWAY STATS
const awayStats = new Stats();

function aleatorio(min:number, max:number):number {
  return Math.round((Math.random() * (max - min) + min));
}*/


var res1 = (<HTMLInputElement>document.getElementById("res1")).value;
var local1:number = parseInt(res1);
var res2 = (<HTMLInputElement>document.getElementById("res2")).value;
var visit1:number = parseInt(res2);
var res3 = (<HTMLInputElement>document.getElementById("res3")).value;
var local2:number = parseInt(res3);
var res4 = (<HTMLInputElement>document.getElementById("res4")).value;
var visit2:number = parseInt(res4);
var res5 = (<HTMLInputElement>document.getElementById("res5")).value;
var local3:number = parseInt(res5);
var res6 = (<HTMLInputElement>document.getElementById("res6")).value;
var visit3:number = parseInt(res6);
var res7 = (<HTMLInputElement>document.getElementById("res7")).value;
var local4:number = parseInt(res7);
var res8 = (<HTMLInputElement>document.getElementById("res8")).value;
var visit4:number = parseInt(res8);
var res9 = (<HTMLInputElement>document.getElementById("res9")).value;
var local5:number = parseInt(res9);
var res10 = (<HTMLInputElement>document.getElementById("res10")).value;
var visit5:number = parseInt(res10);

class Club {
  clubName: string;
  points: number;
  played: number;
  win: number;
  draw: number;
  lose: number;
  gFor: number;
  gAgainst: number;
  dif: number;

  constructor(name:string, points:number, played:number, win:number, draw:number, lose:number, gFor:number, gAgainst:number, dif:number) {
    this.clubName = name;
    this.points = points;
    this.played = played;
    this.win = win;
    this.draw = draw;
    this.lose = lose;
    this.gFor = gFor;
    this.gAgainst = gAgainst;
    this.dif = dif;
  }

  
}



