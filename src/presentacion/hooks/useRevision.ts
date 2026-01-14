import { useState } from 'react';
import { ResultadoRevision } from '../../dominio/entidades/types';
import { useContexto } from '../contexto/ContextoRevision';

interface EstadoRevision {
  resultado: ResultadoRevision | null;
  cargando: boolean;
  error: string | null;
}

export const useRevision = () => {
  const { revisarTexto } = useContexto();
  const [estado, setEstado] = useState<EstadoRevision>({
    resultado: null,
    cargando: false,
    error: null,
  });

  const revisar = async (texto: string) => {
    setEstado({ resultado: null, cargando: true, error: null });

    try {
      const resultado = await revisarTexto(texto);
      setEstado({ resultado, cargando: false, error: null });
    } catch (error) {
      setEstado({
        resultado: null,
        cargando: false,
        error: error instanceof Error ? error.message : 'Error desconocido',
      });
    }
  };

  const envio = (e: React.FormEvent, texto: string) => {
    e.preventDefault();
    revisar(texto);
  };

  return {
    ...estado,
    revisar,
    envio,
  };
};
