import { Servicio } from '../dominio/puertos/Servicio';
import { ResultadoRevision } from '../dominio/entidades/types';

export const crearRevisarTexto = (servicio: Servicio) => {
  return async (texto: string): Promise<ResultadoRevision> => {
    if (!texto.trim()) {
      throw new Error('El texto no puede estar vacío');
    }

    return await servicio.revisarTexto(texto);
  };
};
