# Invade.io — Forma un ejército. Conquista el mapa.

**Mi papel:** Desarrollador del videojuego · **Estado:** Proyecto personal en desarrollo activo

[Ver en Google Play](https://play.google.com/store/apps/details?id=macarronesc.invadeio) · [Explorar el repositorio](https://github.com/macarronesc/invade.io)

Invade.io es un **juego de estrategia territorial en tiempo real, pensado para móvil**, desarrollado con Godot 4. Captura bases, desplaza tropas y mejora tu ejército en una campaña centrada en la sensación de progreso.

Desarrollo los sistemas del juego y la experiencia móvil: combate, decisiones de los enemigos, reglas de campaña, mejoras, persistencia local, ajustes y flujos de compilación.

## La experiencia de juego

- **30 niveles de campaña:** avanza por continentes, aprende sus reglas y enfréntate a un jefe cada cinco niveles.
- **Decisiones territoriales:** equilibra reclutamiento, movimiento y defensa; cada base capturada cambia la situación de la batalla.
- **Reglas regionales:** capitales, fábricas, fortalezas, movimiento más lento en la selva y rutas marítimas conectadas.
- **Progresión a largo plazo:** mejoras del ejército, rangos, elementos estéticos, medallas y un atlas de ciudades de campaña.
- **Modos rejugables:** desafíos diarios con reglas comparables y expediciones de conquista libre de cinco regiones.

## La ingeniería detrás del juego

**Combate y equilibrio.** Las tropas avanzan en grupos pequeños, las órdenes reservan unidades y el comportamiento enemigo se separa de las recompensas de progresión. Los comprobadores recorren toda la campaña con distintas estrategias de mejora; el ritmo y la retención todavía necesitan validarse con jugadores reales.

**Ciclo de vida móvil.** Al cambiar de aplicación se guarda el progreso, se suspende el audio y la batalla permanece en pausa hasta reanudarla. Los ajustes incluyen sonido, vibración, velocidad de simulación, idioma, apariencia y reducción de movimiento.

**Persistencia y recuperación.** Guardados locales versionados, copia de recuperación y exportación/restauración manual de copias JSON. Es persistencia local, no guardado en la nube.

**Compilación y verificación.** Comprobaciones headless de Godot para juego y persistencia, validación de exportaciones Android y generación de IPA para pruebas con SideStore. Compilar correctamente no sustituye probar controles, rendimiento y zonas seguras en un móvil real.

## Alcance actual

La versión pública incluye juego individual y progreso local. El guardado cloud y las clasificaciones online **no están integrados**. El workflow de iOS genera compilaciones de prueba para SideStore, no versiones para App Store o TestFlight.

**Stack:** Godot 4 · GDScript · Android · Compilaciones iOS de prueba · GitHub Actions
