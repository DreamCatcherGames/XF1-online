import { Equipo } from "./equipo";

export class PerfilUsuario {
	Teams:Equipo[];
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