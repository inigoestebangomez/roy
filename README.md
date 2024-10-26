# ROY
![roy](/images/header-roy.png)


## Info
Proyecto Frontend en Vue, Nuxt.js, CSS y TypeScript para la página web ROY.

Herramientas: Visual Studio Code, Figma, Chrome Desarollador, Git Fork.

Buenas prácticas: Atomic Design, Responsive Design, Mobile First, Pixel Perfect, HTML semántico, introducción a la Accesibilidad Web, Design System.

#### [Repo Client](https://github.com/inigoestebangomez/roy.git)


## Design
Implementación basada en un diseño Responsive de Figma. Los estilos de los componentes se han obtenido a través de la herramienta de inspección de Figma.

![web desktop grid 4](/images/desktop-4-screenshot.png)

![web desktop grid 2](/images/desktop-2-screenshot.png)

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
    │   ├── index.vue            # Archivo de desarrollo del HTML en templates, y lógica en script
    ├── server                   
    │   ├── api
    │        ├── yachts.ts       # Ubicación del evento de Nuxt que efectúa la llamada al servidor. Añade un CORS.
    │   └── middleware
    │        └── proxy.ts        # Middleware que apunta al dominio aportado para efectuar la llamada a la API.     
    ├── services                 
    │   ├── yachtService.ts      # Servicio que llama al proxy de Nuxt
    ├── static                   
    │   ├── fonts                # Fuentes suministradas. 
    ├── styles
    │   ├── styles.css           # Componente de estilos de CSS.
    ├── types
    │   ├── yacht.ts             # Define la interfaz.
    ├── vue.js                   # Archivo principal desde el que se renderiza la web.
    └── readme                   # Info del proyecto.

### Project

[Repository Link Client](https://github.com/inigoestebangomez/roy)


### Figma

[Link](https://www.figma.com/design/oeoEH26SF77BlVZKhjdqyY/design?node-id=0-1&t=L7LhxUBOEGxkab4m-1)

## Links

[LinkedIn](https://www.linkedin.com/in/inigo-esteban-gomez/)
[GitHub](https://github.com/inigoestebangomez)