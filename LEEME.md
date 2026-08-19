---
title: "Notas de actualización"
---

# Cómo publicar esta versión

## Lo corto

1. Copia **todo** el contenido de esta carpeta encima de tu repo `enino84.github.io`.
2. `git add -A && git commit -m "Nuevo diseño" && git push`
3. En 1–2 minutos GitHub Pages reconstruye el sitio. Listo.

No hace falta instalar nada. GitHub Pages corre Jekyll por ti.

## Qué cambió

**Archivos nuevos**

- `_layouts/default.html`: el esqueleto HTML de todas las páginas.
- `_layouts/page.html`: envoltorio para las páginas de contenido (`.md`).
- `_layouts/home.html`: portada con el hero y el atractor de Lorenz.
- `_includes/head.html`, `masthead.html`, `footer.html`: cabeza, menú y pie.
- `assets/css/main.css`: todo el diseño en un solo archivo.
- `assets/js/ensemble.js`: la animación del ensamble Lorenz-63.
- `assets/js/nav.js`: menú móvil y desplegables.
- `index.html`: reemplaza al viejo `index.md`.

**Archivos modificados**

- `_config.yml`: se quitó `remote_theme: minima`; ahora el diseño es propio.
- `_data/navigation.yml`: menú reorganizado, se agregaron Talks y el curso.
- `journal_publications.md`: se agregaron 2024, 2025 y 2026 y se arregló un
  enlace roto de 2023.
- Todas las páginas `.md`: se les puso `title` en el front matter y se
  corrigieron los enlaces internos que apuntaban a archivos `.md` (esos
  daban 404 en el sitio publicado).

**Archivos eliminados**

- `index.md` (reemplazado por `index.html`).
- `carousel.css` y `carousel.js` (ya no se usan; la galería ahora es CSS grid).

## Cosas que querrás editar

- **Métricas de la portada** (`index.html`, sección `<dl class="metrics">`):
  works, citations, h-index, i10-index y reviews están escritos a mano.
  Actualízalos cuando revises Scholar.
- **Noticias** (`index.html`, sección `#news`): agrega una `<li>` arriba.
  El primer punto de la línea de tiempo se pinta ámbar automáticamente.
- **Colores**: están todos arriba de `assets/css/main.css` en `:root`.
  Cambia `--accent` y `--amber` y cambia el sitio entero.
- **Foto del hero**: `profile.png`. Si tienes una con más resolución, mejor.

## Para probar en tu máquina antes de subir (opcional)

```bash
gem install bundler jekyll
jekyll serve
# abre http://localhost:4000
```

Si no quieres instalar Ruby, sube a una rama aparte y usa una GitHub Pages
de prueba, o simplemente sube: el diseño ya está verificado.
