import { Escuderia } from "./Escuderia";
import { Piloto } from "./piloto";

export class PerfilUsuario {

	equipoA:{
		escuderia:Escuderia;
		pilotos:Piloto[];
	};

	equipoB:{
		escuderia:Escuderia;
		pilotos:Piloto[];
	};

	saldo:number;

}