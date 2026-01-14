# Grammar Check - Arquitectura Hexagonal

Aplicación de corrección gramatical implementada con React + TypeScript siguiendo los principios de Arquitectura Hexagonal.

##  Arquitectura Hexagonal

### Capas y Responsabilidades

1. **Dominio**
   - Contiene las entidades y reglas de negocio puras
   - Define los puertos (interfaces)
   - NO depende de ninguna capa externa
   - NO conoce React, APIs o frameworks

2. **Casos de Uso (Aplicación)**
   - Contiene los casos de uso
   - Orquesta la lógica de negocio
   - Depende solo del dominio (puertos)

3. **Infraestructura (Adaptadores)**
   - Implementa los adaptadores concretos
   - Integración con APIs externas (APIVerve)
   - Implementa las interfaces definidas en el dominio

4. **Presentación**
   - Componentes React
   - Custom hooks para manejo de estado
   - Context API para inyección de dependencias

### Flujo de Dependencias

```
Presentación → Casos de Uso → Dominio ← Infraestructura
```

El dominio es el centro y NO depende de nadie. Todas las capas externas dependen del dominio.

## 🔧 Decisiones Técnicas

### 1. Ports & Adapters
- **Puerto**: `Servicio` define el contrato
- **Adaptador**: `AdaptadorAPI` implementa la integración con APIVerve
- El caso de uso depende del puerto, no del adaptador (Inversión de Dependencias)

### 2. Context API
- Usado ÚNICAMENTE para inyección de dependencias
- Provee el caso de uso a los componentes
- NO se usa como store global

### 3. Custom Hook
- `useRevision` encapsula toda la lógica de estado
- Maneja: cargando, error, resultado
- Los componentes solo se encargan de la UI

### 4. TypeScript Estricto
- Sin uso de `any`
- Tipado fuerte en todas las capas
- Interfaces explícitas para contratos

### 5. Manejo de Errores
- Validación en el caso de uso
- Try-catch en el adaptador
- Mensajes claros para el usuario

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Configurar API Key en .env
VITE_API_KEY=tu-api-key-aqui

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
