import { createContext, useContext} from 'react';
import { ContextoType, Props } from '../../dominio/entidades/types';

const Contexto = createContext<ContextoType | undefined>(undefined);

export const Proveedor = ({ children, revisarTexto }: Props) => {
  return (
    <Contexto.Provider value={{ revisarTexto }}>
      {children}
    </Contexto.Provider>
  );
};

export const useContexto = () => {
  const contexto = useContext(Contexto);
  if (!contexto) {
    throw new Error('Error en el COntexto');
  }
  return contexto;
};
