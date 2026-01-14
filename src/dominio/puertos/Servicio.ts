import { ResultadoRevision } from '../entidades/types';

export interface Servicio {
  revisarTexto(texto: string): Promise<ResultadoRevision>;
}
