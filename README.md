# ROY

![roy](/images/header-roy.png)

## Project Info

- Frontend Project in Vue, Nuxt.js, TypeScript, and CSS for the **ROY** website.
  The main feature of the design is a product grid. This grid must be populated by making a fetch call to the following API endpoint.
  (https://royaloceanyachts.com/api/yachts?buy=true&page=1)

- Tools: Visual Studio Code, Figma, Chrome Developer Tools, Git Fork.

- Best Practices: Atomic Design, Responsive Design, Mobile First, Pixel Perfect, Semantic HTML, Introduction to Web Accessibility, Design System.

#### [Repo Client](https://github.com/inigoestebangomez/roy.git)

## Design

Implementation based on a responsive design from Figma. Component styles have been obtained through Figma's inspection tool.

**Desktop Grid 4 ítems**
![web desktop grid 4](/images/desktop-4-screenshot.png)

**Desktop Grid 2 ítems**
![web desktop grid 2](/images/desktop-2-screenshot.png)

**Mobile**
![mobile](/images/mobile-screenshot.png)

## HTML

**Semantic HTML** using **best practices** from **W3Schools**. Classes have been developed to facilitate componentization and achieve low specificity.

## CSS

CSS has been written using variables to facilitate maintenance, sustainability, and web growth.

The code employs CSS best practices:

- **Normalize**
- **Display Flex y Grid**
- **CSS variables**
- **Mixins y Functions**
- **Breakpoints Responsive Mobile First (min-width)**
- **Rems**
- **Low Specificity**

All this under a **scalable** and **readable architecture**.

## Client Info

- **Grid 4** - Default functionality that shows a 4-column grid for 1440px screens.
- **Grid 2** - Functionality that shows a 2-column grid for 1440px screens.
- **Transitions** - Added "ease-in-out" transition functionality between grid changes to smooth the transition.
- **MobileFirst** - Default functionality for 375px screens that displays elements in 1 column.
- **LoadMore** - Button to show the next page of products.

## Architecture

    .
    ├── images                   # Images and logos.
    ├── pages
    │   ├── index.vue            # HTML development file in <templates>, and logic in <script>.
    ├── server
    │   ├── api
    │        ├── yachts.ts       # Location of the Nuxt event that makes the call to the server. Adds a CORS.
    │   └── middleware
    │        └── proxy.ts        # Middleware that points to the provided domain to make the API call.
    ├── services
    │   ├── yachtService.ts      # Service that calls the Nuxt proxy.
    ├── static
    │   ├── fonts                # Supplied fonts.
    ├── styles
    │   ├── styles.css           # CSS styles component.
    ├── types
    │   ├── yacht.ts             # Defines the interface.
    ├── vue.js                   # Main file from which the web is rendered.
    └── readme                   # Project info.

### Figma

[Link](https://www.figma.com/design/oeoEH26SF77BlVZKhjdqyY/design?node-id=0-1&t=L7LhxUBOEGxkab4m-1)

## Links

[LinkedIn](https://www.linkedin.com/in/inigo-esteban-gomez/)

[GitHub](https://github.com/inigoestebangomez)



**-- [ ES ] --**



# ROY

![roy](/images/header-roy.png)

## Info

Proyecto Frontend en Vue, Nuxt.js, CSS y TypeScript para la página web ROY.

Herramientas: Visual Studio Code, Figma, Chrome Desarollador, Git Fork.

Buenas prácticas: Atomic Design, Responsive Design, Mobile First, Pixel Perfect, HTML semántico, introducción a la Accesibilidad Web, Design System.

#### [Repo Client](https://github.com/inigoestebangomez/roy.git)

## Design

Implementación basada en un diseño Responsive de Figma. Los estilos de los componentes se han obtenido a través de la herramienta de inspección de Figma.

**Desktop Grid 4 ítems**
![web desktop grid 4](/images/desktop-4-screenshot.png)

**Desktop Grid 2 ítems**
![web desktop grid 2](/images/desktop-2-screenshot.png)

**Mobile**
![mobile](/images/mobile-screenshot.png)

## HTML

**HTML** **semántico** usando las **buenas prácticas** de la **W3School**. Las clases se han desarrollado para facilizar la componetización y conseguir una baja especificidad.

## CSS

El CSS ha sido escrito mediante variables para facilitar el mantenimiento, que sea sostenible y el crecimiento de la web.

El código emplea las buenas prácticas de CSS:

- **Normalize**
- **Display Flex y Grid**
- **Variables de CSS**
- **Mixins y Functions**
- **Breakpoints Responsive Mobile First (min-width)**
- **Rems**
- **Baja Especificidad**

Todo esto bajo una **arquitectura** **escalable** y legible.

## Client Info

- **Grid 4** - Funcionalidad por defecto que muestra una grid de 4 columnas para pantallas de 1440px.
- **Grid 2** - Funcionalidad que muestra una grid de 2 columnas para pantallas de 1440px.
- **Transitions** - Añadida funcionalidad de transiciones ease-in-out entre cambios de grid para amabilizar la transición.
- **MobileFirst** - Funcionalidad por defecto para pantallas de 375px que muestra los elementos en 1 columna.
- **LoadMore** - Botón que permite mostrar la siguiente página de productos.

## Architecture

    .
    ├── images                   # Imágenes y logos
    ├── pages
    │   └── index.vue            # Archivo de desarrollo del HTML en templates, y lógica en script
    ├── server
    │   ├── api
    │        └── yachts.ts       # Ubicación del evento de Nuxt que efectúa la llamada al servidor. Añade un CORS.
    │   └── middleware
    │        └── proxy.ts        # Middleware que apunta al dominio aportado para efectuar la llamada a la API.
    ├── services
    │   └── yachtService.ts      # Servicio que llama al proxy de Nuxt
    ├── static
    │   └── fonts                # Fuentes suministradas.
    ├── styles
    │   └── styles.css           # Componente de estilos de CSS.
    ├── types
    │   └── yacht.ts             # Define la interfaz.
    ├── vue.js                   # Archivo principal desde el que se renderiza la web.
    └── readme                   # Info del proyecto.

### Project

[Repository Link Client](https://github.com/inigoestebangomez/roy)

### Figma

[Link](https://www.figma.com/design/oeoEH26SF77BlVZKhjdqyY/design?node-id=0-1&t=L7LhxUBOEGxkab4m-1)

## Links

[LinkedIn](https://www.linkedin.com/in/inigo-esteban-gomez/)
[GitHub](https://github.com/inigoestebangomez)
