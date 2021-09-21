[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=ArielAyala&repo=blog_platzi_react_redux)](https://github.com/ArielAyala/blog_platzi_react_redux)

## Proyecto de Blog para práctica del curso de [Redux por bedu](https://platzi.com) de [Platzi](https://platzi.com/cursos/redux/)


`npm install`
Para instalar las dependencias del proyecto

`npm start`
Para iniciar el proyecto en modo desarrollo en el puerto 3000

Visitar la versión deploy https://ariel-ayala-blog-en-redux.now.sh/

___

### **Anotaciones del curso**

- [Ciclo de vida de componentes en React](#ciclo-de-vida-de-componentes-en-react)
- [Manejo de promesas](#manejo-de-promesas)
- [¿Qúe es Redux, cuándo usarlo y porqué?](#q%C3%BAe-es-redux-cu%C3%A1ndo-usarlo-y-porqu%C3%A9)
- [Fases de Redux](#las-fases-de-redux)
- [Store](#store)
- [Reducers](#reducers)
- [Redux Thunk](#redux-thunk)
- [Ciclo completo de redux](#ciclo-completo-de-redux)
___


#### Ciclo de vida de componentes en React

**Tenemos 4 fases por los que un componente pasa:**
- *Initialization:* Declaramos nuestro estado o propiedades
- *Mounting:* Todo componente debe tener render. Es obligatorio.
- *Updation*
- *Unmounting:* Solo hay una función en caso de que queramos hacer algo cuando se destruya un componente

![Ciclo de vida de componentes en React](https://github.com/ArielAyala/blog_platzi_react_redux/blob/master/src/imagenes_resumen/ciclo%20de%20vida%20de%20componentes%20react.png?raw=true)

#### Manejo de promesas
Una **Promesa** es un proxy para un valor no necesariamente conocido en el momento que es creada la promesa.
Las promesas tienen tres estados:
- pending
- fullfilled
- rejected

Las promesas se invocan de la siguiente forma:

```js
new  Promise( ( resolve, reject ) => {
// --- llamado asíncrono 
        if( todoOK ) { 
        // -- se ejecutó el llamado exitosamente resolve() }
        else { 
        // -- hubo un error en el llamado reject() 
        } 
} )
```

#### ¿Qúe es Redux, cuándo usarlo y porqué?
Es una herramienta de uso libre que nos permite manejar **todo el estado de nuestra aplicación** en un solo lugar.<br>

Principios<br>
- Almacenamiento
- Inmutable
- Centralizado

Redux es nuestra única fuente de la verdad.

#### Las fases de Redux
- Store: El principal de redux, almacena toda la información y los estados.
- Redurecs: Son (dependiendo de los componentes) la información que vamos a tener.
- Action creators: Las funciones que debemos ejecutar para pedir informaciòn (normalmente son promesas).
- Componente (JSX): Los componentes de React que estamos viendo en la interfaz.

![Funcionamiento de Redux](https://github.com/ArielAyala/blog_platzi_react_redux/blob/master/src/imagenes_resumen/funcionamiento_redux.png?raw=true)

#### Store
> El *store* tien las siguientes posibilidades:
 - Contiene el estado de la aplicación
 - Permite el acceso al estado vía `getsate()`
 - Permite que el estado sea actualizado vía `dispatch (action)`
 - Registra los *listeners* vía `suscribe(listener)`
 - Maneja la anulación del registro de los *listeners* vía el retorno de la función de `subscribe(listener)` 
 
#### Reducers
Las *Action creators* describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. <br>
**Esto es trabajo de los reducers**<br>
El *Provider* es el componente de Redux en el cual encerraremos nuestra aplicación para que puedan comunicarse los componentes entre ellos.

#### Redux Thunk
Redux Thunk permite a las *actions creators* invertir el control despachando funciones. <br>
Van a recibir dispatch como argumento y capaz llamarlo asíncronamente. Estas funciones son llamadas *thunks*.

#### Ciclo completo de redux
![Ciclo completo de redux](https://github.com/ArielAyala/blog_platzi_react_redux/blob/master/src/imagenes_resumen/ciclo%20completo%20de%20redux.png?raw=true)





