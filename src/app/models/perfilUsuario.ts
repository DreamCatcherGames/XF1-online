import { Equipo } from "./equipo";

export class PerfilUsuario {
	equipoA:Equipo;
	equipoB:Equipo;
	saldo:number;
	Username:string;
	Country:string;
	First_Name:string;
	Last_Name:string;
	Email:string;
	Money:number;
	Encrypted_Password:string;
	Salt:string;
	Token:string;
	Active:boolean;
}