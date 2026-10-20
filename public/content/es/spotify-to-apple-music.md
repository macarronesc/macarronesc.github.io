# Spotify to Apple Music — Lleva tus listas contigo

**Mi papel:** Desarrollador de integración y automatización · **Estado:** Proyecto público de uso personal

[Explorar el repositorio](https://github.com/macarronesc/Spotify_to_AppleMusic)

Este flujo en Python transfiere listas **de Spotify a Apple Music**. Conecta extracción de canciones, búsqueda en catálogo, actualización de listas de destino y notificaciones por Telegram, con un workflow de GitHub Actions para repetir el proceso.

La base de transferencia parte de [therealmarius/Spotify-2-AppleMusic](https://github.com/therealmarius/Spotify-2-AppleMusic), acreditado en el repositorio. Mi trabajo integra servicios y automatización, sin atribuirme toda la implementación original.

## Cómo funciona

1. Obtener una lista mediante la API de Spotify y exportar las canciones a CSV.
2. Buscar en el catálogo Apple/iTunes combinando título, artista y álbum.
3. Crear o localizar la lista de Apple Music, comprobar las canciones existentes y añadir coincidencias.
4. Registrar canciones no encontradas para revisarlas manualmente y comunicar el resultado por Telegram.

## Enfoque de ingeniería

- Coordinar servicios y credenciales distintos en un flujo repetible.
- Permitir configurar la región del catálogo de Apple Music.
- Evitar añadir canciones ya detectadas en la lista de destino.
- Ejecutar con GitHub Actions y secretos del repositorio, sin incluir credenciales en el código.

## Alcance y limitaciones

La transferencia es **unidireccional**, no una sincronización en ambos sentidos. La búsqueda es heurística y puede omitir canciones o elegir versiones incorrectas; los resultados necesitan revisión. La autenticación de Apple Music depende de credenciales del reproductor web aportadas por el usuario, que pueden caducar y requieren cuidado.

El workflow actual de Actions se ejecuta **manualmente**; la programación semanal está comentada. Es un proyecto de uso personal y educativo, no afiliado a Spotify ni Apple.

**Stack:** Python · API Spotify · Catálogo Apple Music/iTunes · GitHub Actions · Telegram
