import React, { Component } from 'react'; //componente de classe

class MeuComponente extends Component {

    constructor (props){
        super(props)

        this.state = { numero: 5 } //inicializando o state --> this.state = objeto
        console.log('construtor............')

        this.adicionaNumero = this.adicionaNumero.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
        //console.log(props);
        //console.log(state);

        //return { numero : 6 }; //retorna novo estado
        return null; //não modifica o estado
    }

    componentDidMount() {  //// aqui que devem ser feitas as requisições ajax
        console.log('componentDidMount.....');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate........');
        console.log('estado atual', this.state);
        console.log('próximo estado', nextState);

        return true;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate.....');
    }

    adicionaNumero = () => {
        console.log('set state........')
        let incremento = this.state.numero;
        incremento++;
        this.setState({ numero: incremento });
    }

    render(){
        console.log('render.............');
        return <div>
            <p>Olá eu sou um componente</p>
            <p>{this.state.numero}</p>

            <button onClick={this.adicionaNumero}>
                Adicionar numero
            </button>
        </div>
    }
}

export default MeuComponente;