import { useState } from 'react';
import { useRevision } from '../hooks/useRevision';

export const RevisorGramatical = () => {
  const [texto, setTexto] = useState('');
  const { resultado, cargando, error, envio } = useRevision();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Revisor Gramatical</h1>
      
      <form onSubmit={(e) => envio(e, texto)}>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Ingresa el texto a verificar..."
          rows={6}
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
        <button 
          type="submit" 
          disabled={cargando}
          style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}
        >
          {cargando ? 'Analizando...' : 'Verificar Gramática'}
        </button>
      </form>

      {error && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#ffebee', color: '#c62828' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {resultado && (
        <div style={{ marginTop: '20px' }}>
          <h2>Resultados</h2>
          {resultado.fueModificado ? (
            <div>
              <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#fff3cd' }}>
                <p><strong>Texto Original:</strong></p>
                <p>{resultado.textoOriginal}</p>
              </div>
              <div style={{ padding: '10px', backgroundColor: '#d4edda' }}>
                <p><strong>Texto Corregido:</strong></p>
                <p>{resultado.textoCorregido}</p>
              </div>
            </div>
          ) : (
            <p style={{ color: '#2e7d32' }}>✓ No se encontraron errores gramaticales</p>
          )}
        </div>
      )}
    </div>
  );
};
