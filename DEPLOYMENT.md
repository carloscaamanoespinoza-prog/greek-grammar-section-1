# Guía de Deployment en Netlify

Esta aplicación está completamente configurada para ser deployada en Netlify sin problemas.

## Requisitos Previos

1. Una cuenta en [Netlify](https://netlify.com)
2. Tu repositorio en GitHub, GitLab o Bitbucket
3. Node.js y pnpm instalados localmente (para testing)

## Pasos para Desplegar en Netlify

### Opción 1: Conectar Repositorio (Recomendado)

1. **Sube el proyecto a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Greek Grammar Study Application"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/greek-grammar-study.git
   git push -u origin main
   ```

2. **Conecta Netlify a tu repositorio**
   - Ve a [Netlify](https://app.netlify.com)
   - Haz clic en "Add new site" → "Import an existing project"
   - Selecciona tu proveedor de Git (GitHub, GitLab, Bitbucket)
   - Autoriza a Netlify y selecciona el repositorio

3. **Configura los parámetros de build**
   - **Build command**: `pnpm install && pnpm build`
   - **Publish directory**: `dist/public`
   - **Node version**: 22.x (o superior)

4. **Haz clic en "Deploy site"**

Netlify automáticamente:
- Detectará el archivo `netlify.toml`
- Instalará las dependencias
- Ejecutará el build
- Deployará los archivos estáticos
- Configurará el routing de cliente-lado

### Opción 2: Drag & Drop (Rápido)

1. **Haz un build local**
   ```bash
   pnpm install
   pnpm build
   ```

2. **Comprime la carpeta `dist/public`**
   ```bash
   zip -r dist-public.zip dist/public
   ```

3. **Ve a [Netlify Drop](https://app.netlify.com/drop)**
   - Arrastra y suelta el archivo `dist-public.zip`
   - Tu sitio estará en línea en segundos

## Configuración Automática

El archivo `netlify.toml` en la raíz del proyecto configura automáticamente:

- ✅ **Build command**: Instala dependencias y hace build
- ✅ **Publish directory**: `dist/public` (salida de Vite)
- ✅ **Routing de SPA**: Todas las rutas se redirigen a `index.html`
- ✅ **Cache headers**: Assets inmutables se cachean por 1 año
- ✅ **Security headers**: Headers de seguridad configurados

## Verificación Post-Deployment

Después de deployar, verifica que:

1. **La página carga correctamente**
   - Abre tu URL de Netlify
   - Deberías ver el header "Lección 1 - El Alfabeto Griego"

2. **El routing funciona**
   - Recarga la página (F5)
   - Navega entre "Teoría" y "Ejercicios"
   - Los ejercicios deben funcionar correctamente

3. **Los ejercicios funcionan**
   - Prueba cada tipo de ejercicio
   - Verifica que las flashcards, selección múltiple, etc. funcionan

## Troubleshooting

### "Build failed"
- Verifica que `pnpm install` funciona localmente
- Asegúrate de que `pnpm build` genera archivos en `dist/public`

### "Página en blanco"
- Verifica que el archivo `_redirects` está en `dist/public`
- Comprueba la consola del navegador (F12) para errores

### "Rutas no funcionan"
- El archivo `netlify.toml` debe estar en la raíz del proyecto
- El archivo `_redirects` debe estar en `client/public/`

## Variables de Entorno (Opcional)

Si necesitas variables de entorno en el futuro:

1. Ve a "Site settings" → "Build & deploy" → "Environment"
2. Agrega tus variables
3. Redeploy el sitio

## Dominio Personalizado

Para usar tu propio dominio:

1. Ve a "Site settings" → "Domain management"
2. Haz clic en "Add custom domain"
3. Sigue las instrucciones para configurar tu DNS

## Actualizaciones Futuras

Cada vez que hagas push a tu rama `main`:
- Netlify automáticamente detectará los cambios
- Ejecutará el build
- Deployará la nueva versión

¡Tu aplicación está lista para producción! 🚀
