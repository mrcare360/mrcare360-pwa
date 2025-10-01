
MR Care 360+ — PWA (versión inicial) — 2025-10-01T15:13:47.965722

Qué es:
- App web progresiva (PWA) bilingüe ES/EN
- Catálogo de servicios (cócteles IV, shots, manejo de peso)
- Formulario de citas que envía por WhatsApp (sin backend)
- Instalación en móvil (Add to Home Screen), modo offline básico

Cómo usar (rápido):
1) Sube la carpeta completa al hosting de tu dominio (p. ej. public_html en cPanel/FTP) o
2) Publica gratis en GitHub Pages:
   - Crea un repo nuevo, sube los archivos.
   - En Settings > Pages > Source: "Deploy from a branch", main, /root.
   - Abre la URL que te dan. (Luego puedes apuntar tu dominio mrcare360.org allí).

Personalización:
- Reemplaza assets/img/logo-clinica.png por tu logo.
- Colores y estilos en styles.css
- Texto en app.js (objeto i18n y listas de servicios)

Soporte offline:
- sw.js (service worker) cachea archivos básicos.

Contacto en la app:
- WhatsApp: +1 (689) 318-2197
- Teléfono: +1 (863) 616-3769
- Email: mycare@mrcare360.org

— Hecho con cariño para MR Care 360+.
