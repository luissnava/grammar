import { Proveedor } from './presentacion/contexto/ContextoRevision';
import { RevisorGramatical } from './presentacion/componentes/RevisorGramatical';
import { crearRevisarTexto } from './casos-de-uso/RevisarTexto';
import { crearAdaptador } from './infraestructura/AdaptadorAPI';

const adaptador = crearAdaptador();
const revisarTexto = crearRevisarTexto(adaptador);

function App() {
  return (
    <Proveedor revisarTexto={revisarTexto}>
      <RevisorGramatical />
    </Proveedor>
  );
}

export default App;
