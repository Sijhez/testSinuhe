# Examen de prueba Sinuhe Jardínez

Creando tienda online consumiendo API : [fake store api](https://fakestoreapi.com/).

## Conexión hacia API:
* Generé un nuevo proyecto en la carpeta `client` React con  
  ```bash
  npx create-react-app
  ```
* Instalé la dependencia Axios Client para generar la conexión al API:
* Generé carpeta config para determinar la conexión usando una variable global en un archivo .env
* Para este proyecto usé las siguientes dependencias:

### `axios`
- Conexión usando variable global .env
### `react-router-dom`
- Para uso de router y generación de rutas hacia components usando Outlet
### `react-simple-star-rating`
- Para generar el rating de estrellas 

```bash
  npm i axios react-router-dom react-simple-star-rating
```

## Configuración de RouterJS:
Generé las rutas usando los tres componentes del react-router-dom:

``` js
  import {BrowserRouter, Routes, Route} from 'react-router-dom'
```

Una vez con los componentes importados, comencé a generar componentes en la carpeta `components` de la siguiente manera:
- `/layout/...`: Aquí generé un index para usar Outlet y poder tener componentes header y footer durante toda la pagina.
- `/Store/...`: Generé el componente `Clothes.js` para recibir toda la info de los productos consultados, 
- `/Store/Single`: Incluí el componente `index.js` exportado como UnProducto, para mostrar un producto seleccionado

El proyecto utiliza el hooks context, por lo que generé tres archivos para construir y alterar contexto:
- `./context/Store/StoreContext`: Construye contexto global
- `./context/Store/StoreReducer`: Altera estado global mediante los dispatch
- `./context/Store/StoreState`: Genera estado global y funciones para alterarlo




