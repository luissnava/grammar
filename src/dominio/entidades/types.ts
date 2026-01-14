import {ReactNode} from "react";
export interface ErrorGramatical {
  mensaje: string;
  posicion: number;
  longitud: number;
  sugerencias: string[];
  regla: string;
  contexto: string;
}

export interface ResultadoRevision {
  textoOriginal: string;
  textoCorregido: string;
  fueModificado: boolean;
}

export interface EstadoRevision {
  resultado: ResultadoRevision | null;
  cargando: boolean;
  error: string | null;
}
export interface APIResponse {
  status: string;
  error: string | null;
  data: {
    modified: boolean;
    text: string;
  };
}


export type RevisarTexto = (texto: string) => Promise<ResultadoRevision>;

export interface ContextoType {
  revisarTexto: RevisarTexto;
}

export interface Props {
  children: ReactNode;
  revisarTexto: RevisarTexto;
}
