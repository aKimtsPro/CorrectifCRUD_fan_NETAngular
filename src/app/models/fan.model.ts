export interface Fan {

    id: number;
    nom: string;
    dateNaiss: Date;
    series: string[];

}

export interface FanCreateForm {

    nom: string;
    dateNaiss: string;

}