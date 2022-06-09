import { Campeonato } from "./campeonato";
import { Puntaje } from "./puntaje";

export class LigaPublica {
	Championship:Campeonato[];
    Scores:Puntaje[];
    Unique_Key:string;
    Champ_Key:string;
    Name:string;
    Type:string;
}

export class LigaPrivada{
    Championship:Campeonato;
    Unique_Key:string;
    Champ_Key:string;
    Name:string;
    Type:string;
    OwnerUsername:string;

    constructor(){}

    static createNEmptyLigas(cantidad:number):LigaPrivada[]{
        const ligas:LigaPrivada[] = [];
        for(var i=0; i<cantidad;i++)
            ligas.push(
                {
                    Championship:new Campeonato(),
                    Unique_Key:'123456789A',
                    Champ_Key:'',
                    Name:'CR League', 
                    Type:'',
                    OwnerUsername:''
                }
            );
        return ligas;
    }

}