import { Servicio } from '../dominio/puertos/Servicio';
import { ResultadoRevision, APIResponse } from '../dominio/entidades/types';
import { API_ENDPOINT, API_KEY } from '../config/env';

export const crearAdaptador = (): Servicio => ({
  async revisarTexto(texto: string): Promise<ResultadoRevision> {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify({ text: texto }),
      });

      if (!response.ok) {
        throw new Error(`Error en la API: ${response.status}`);
      }

      const data: APIResponse = await response.json();

      return {
        textoOriginal: texto,
        textoCorregido: data.data.text,
        fueModificado: data.data.modified,
      };
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : 'Error desconocido al verificar gramática'
      );
    }
  },
});
