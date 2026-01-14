Implementa una pequeña aplicación en React + TypeScript que permita realizar un Grammar Check utilizando el catálogo de APIs de APIVerve.

La aplicación debe permitir al usuario:

Ingresar un texto libre.

Enviar el texto a un servicio de Grammar Check.

Mostrar la lista de errores gramaticales y sus sugerencias.

⚠️ El foco de la prueba NO es el diseño visual, sino la calidad del código, la arquitectura y las decisiones técnicas.

Requerimientos funcionales

Un campo de texto para ingresar el contenido a evaluar.
Un botón para ejecutar el análisis gramatical.
Mostrar:
Errores detectados
Sugerencias de corrección
Manejo de estados:
Cargando
Error
Resultado exitoso
Requerimientos técnicos obligatorios
1. Arquitectura (requisito clave)
La solución debe implementar arquitectura Hexagonal, con separación clara entre:
Dominio
Casos de uso (Application Layer)
Infraestructura (Adapters / API)
Presentación (React)
El dominio NO debe depender de APIVerve ni de React.
2. Dominio
Definir entidades y modelos fuertemente tipados.
No se permite el uso de any.
El dominio debe representar errores gramaticales de forma explícita.
3. Ports & Adapters
Definir un puerto (interface) para el servicio de Grammar Check.
Implementar un adapter concreto que consuma la API de APIVerve.
El caso de uso debe depender del puerto, no del adapter.
4. Casos de uso
Implementar al menos un use case que orqueste la operación de Grammar Check.
La lógica de negocio debe vivir aquí, no en los componentes ni en los adapters.
5. Estado y Hooks
Implementar un custom hook para manejar:
Estado de carga
Resultado
Error
Evitar lógica de negocio dentro de los componentes.
6. Context API
Utilizar Context únicamente si es justificable, por ejemplo:
Inyección de dependencias
Provisión del servicio de Grammar Check
No usar Context como store global genérico.
7. Manejo de errores
Manejo explícito de errores de red o de dominio.
Mostrar mensajes claros para el usuario.
Entregables
Código fuente de la aplicación.
Un README breve explicando (Deseable):
La estructura del proyecto
Cómo se aplica la arquitectura Hexagonal
Decisiones técnicas relevantes
Criterios de evaluación
Correcta aplicación de arquitectura Hexagonal
Calidad del tipado en TypeScript
Separación de responsabilidades
Uso adecuado de hooks y estado
Claridad y mantenibilidad del código


carolinatl@positivosmais.com
gabrieltl@positivosmais.com


