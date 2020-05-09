import React, { Component } from 'react'

const Hello = () => {

   return <h1>Esto es otro título</h1>
}

class NiceToMeet extends Component {
    render() {
        return (
            <h2>Este es el component con Class: <Hello /></h2>
        )
    }
}

class HelloWorld extends Component {

    state = {
        show: true
    }

    toogle = () => {
        this.setState(state =>{
            if (state.show) {
                return {show:false}
            }else{
                return {show:true}
            }
        })
    }



    render() {
        if (this.state.show) {
            return (
                <button onClick={this.toogle}>Hola, {this.props.name} {this.props.surname}</button>
            )

        }else{
            return (
                <button onClick={this.toogle}>Chao, {this.props.name} {this.props.surname}</button>
            )
        }
            
    }
}

// const PropsMeet = (props) => {
//     return (
    
//         <div>

//             <h2>Hola, {props.subtitle}</h2> 
//             <h3> {props.text}</h3>

//         </div>

//     )
// }

const Dummy = (props) => {
    
    const Meet = () => <p>Encantado de conocerte {props.name}</p>
  
    return (
        <div>
            <h1 text= 'Esto es el h1'>Hello, { props.name } { props.surname } </h1>
            <Hello /><Meet />
            <NiceToMeet />
            {/* <PropsMeet text='Esto es el texto en la etiqueta' subtitle= "Esto es el subtitulo"/> */}
            <HelloWorld name= 'Daniel' surname='Vazquez'/>
        </div>
    )
}

export default Dummy;
