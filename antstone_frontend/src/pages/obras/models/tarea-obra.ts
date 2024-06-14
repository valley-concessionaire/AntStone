import AyudanteDeAlbanil from "./ayudante_albanil";
import Obra from "./crear-obra";
import Peon from "./peon";

export interface TareaDeObra {
    id: number;
    obra: Obra;
    peones: Peon[];
    ayudantes_de_albanil: AyudanteDeAlbanil[];
    nombre: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_fin: string;
    estado: string;
    es_activo: boolean;
  }