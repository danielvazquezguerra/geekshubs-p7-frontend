# GH-Proyecto1-Netflix-Frontend 🎞

FrontEnd del primer proyecto del Bootcamp FullStack de GeeksHubs de una web de alquiler de peliculas.

## Table of Content

- [Built With](##-Built-With)
- [Knowledge](##-Knowledge)
- [Getting Started](##-Getting-Started)
- [Partes](##-Partes)
- [Documentation](##-Documentation)
- [Author](##-Author)

## Built With 🛠️


## Knowledge 🧠 

* React
* Typescript

## Getting Started 🚀 


### Clonando repositorio

```js
git clone https://github.com/danielvazquezguerra/geekshubs-frontend-p7.git
```


### Instalación dependencias

REACT
ANT DESIGN
BOOTSTRAP
NODE

### Comenzando proyecto con Redux


### Configuración react-redux

npm install -g @angular/cli
ng new app
cd app
ng serve

### Arrancar el servidor

Para arrancar el servidor tienes que introducir el comando:

```
npm start
```
### Components
HOME
LOGIN
REGISTER
PRODUCTS
SHOPPING CART

#### Actions for Redux

    export  const  getProducts  = () => {
    return  axios.get(API_URL  +  '/skateboards/all')
    .then(res  =>  store.dispatch({
    type:'GET_ALL_PRODUCTS',
    payload: res.data
    }))
    }
    export  const  getProductById  = (_id) => {
    return  axios.get(API_URL  +  '/skateboards/'  +  _id)
    .then(res  =>  store.dispatch({
    type:'GET_BY_ID',
    payload: res.data
    }))

    }



## Documentation 📚 

- [React Documentation][https://es.reactjs.org/](https://es.reactjs.org/)
- [Redux]([https://es.redux.js.org/](https://es.redux.js.org/)
- [Ant Design](https://ng.ant.design/docs/introduce/en)
- [Bootstrap](https://ng-bootstrap.github.io/#/getting-started)


## Author 👨🏼‍💻 

* **Daniel Vazquez Guerra** - [danielvazquezguerra](https://github.com/danielvazquezguerra)



## Images

### Home

![HOME](https://github.com/danielvazquezguerra/geekshubs-p7-frontend/blob/feature/bonesPage/ecom/public/images/screenshot-01.jpg?raw=true)


### Movies
![PRODUCTS](https://github.com/danielvazquezguerra/geekshubs-p7-frontend/blob/feature/bonesPage/ecom/public/images/screenshot-02.jpg?raw=true)

### Details
![LOGIN](https://github.com/danielvazquezguerra/geekshubs-p7-frontend/blob/feature/bonesPage/ecom/public/images/screenshot-03.jpg?raw=true)


