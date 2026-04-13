# Guía de Deployment en Netlify - Gramática Griega del NT

## 3 Secciones Disponibles

### Sección 1: Temas 1-11 (Introducción a Fonética y Morfología)
### Sección 2: Temas 12-22 (Sustantivos, Adjetivos y Pronombres)
### Sección 3: Temas 23-33 (Verbos y Apéndices)

---

## Opción 1: Deployment Automático desde GitHub (Recomendado)

### Paso 1: Preparar el repositorio en tu computadora

```bash
# Extrae el archivo descargado
tar -xzf greek_grammar_section1.tar.gz

# Entra al directorio
cd greek_grammar_section1

# Inicializa git
git init
git add .
git commit -m "Initial commit: Greek Grammar Section 1"
```

### Paso 2: Crear repositorio en GitHub

1. Ve a [GitHub.com](https://github.com)
2. Haz clic en "New repository"
3. Nombre: `greek-grammar-section1` (o similar)
4. Descripción: "Gramática Griega del NT - Sección 1: Temas 1-11"
5. Haz clic en "Create repository"

### Paso 3: Subir a GitHub

```bash
git remote add origin https://github.com/tu-usuario/greek-grammar-section1.git
git branch -M main
git push -u origin main
```

### Paso 4: Conectar a Netlify

1. Ve a [Netlify.com](https://app.netlify.com)
2. Haz clic en "New site from Git"
3. Selecciona GitHub
4. Busca tu repositorio `greek-grammar-section1`
5. Haz clic en "Deploy site"

**Netlify detectará automáticamente:**
- Build command: `pnpm install && pnpm build`
- Publish directory: `dist`

¡Tu sitio estará disponible en 2-5 minutos!

---

## Opción 2: Deployment Manual (Sin Git)

### Paso 1: Construir localmente

```bash
# Extrae el archivo
tar -xzf greek_grammar_section1.tar.gz
cd greek_grammar_section1

# Instala dependencias
pnpm install

# Construye el proyecto
pnpm build
```

### Paso 2: Subir a Netlify

1. Ve a [Netlify.com](https://app.netlify.com)
2. Haz clic en "Add new site" → "Deploy manually"
3. Arrastra la carpeta `dist` a la zona de upload
4. ¡Listo! Tu sitio estará disponible inmediatamente

---

## Verificación Post-Deployment

Una vez deployado, verifica:

1. **Accede al sitio** en la URL proporcionada por Netlify
2. **Navega entre temas** usando los botones de navegación
3. **Completa un ejercicio** para verificar que todo funciona
4. **Abre la consola** (F12) y verifica que no hay errores

---

## Configurar Dominio Personalizado

1. En Netlify, ve a **Site settings**
2. Haz clic en **Domain management**
3. Haz clic en **Add custom domain**
4. Ingresa tu dominio (ej: `griego1.tudominio.com`)
5. Sigue las instrucciones para configurar los DNS

---

## Troubleshooting

### El sitio muestra "Cannot GET /"
- Verifica que el `publish directory` sea `dist`
- Verifica que `netlify.toml` esté en la raíz del proyecto
- Revisa los logs de build en Netlify

### Los temas no se cargan
- Abre la consola del navegador (F12)
- Busca errores en la pestaña "Console"
- Verifica que el build se completó sin errores

### El sitio es muy lento
- Espera 30 segundos en el primer acceso
- Recarga la página
- Si persiste, contacta al soporte de Netlify

---

## Información Técnica

- **Framework**: React 19 + Vite
- **Tamaño del bundle**: ~1.2MB (comprimido: ~300KB)
- **Tiempo de build**: 3-5 minutos
- **Tiempo de deploy**: 1-2 minutos
- **Datos**: Todo está en el cliente (sin base de datos)

---

## Repetir para Secciones 2 y 3

Repite el mismo proceso para:
- `greek_grammar_section2.tar.gz`
- `greek_grammar_section3.tar.gz`

Cada sección es independiente y puede tener su propio dominio.

---

## Soporte

Si tienes problemas durante el deployment:

1. Verifica que tienes Node.js 18+ instalado
2. Verifica que tienes pnpm instalado (`npm install -g pnpm`)
3. Intenta el build local primero: `pnpm build`
4. Si el build local funciona, el deployment en Netlify también funcionará

¡Listo para desplegar! 🚀
