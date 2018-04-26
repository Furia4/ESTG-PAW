class User{
    constructor(numero, nome, genero){
        this._numero = numero;
        this._nome = nome;
        this._genero = genero;
    }

    get numero(){
        return this._numero;
    }
    get nome(){
        return this._nome;
    }
    get genero(){
        return this._genero;
    }
}

module.exports = {
    User : User
}