export class Event {
    
    constructor(
        public id_deporte: number,
        public id_usuario:number,
        public titulo: string,
        public fecha: number,
        public descripcion: string,
        public foto: string,
        public provincia: string,
        public id_eventos?: number,
    ){}
}
