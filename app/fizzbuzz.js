class fizzbuzz {

    constructor(valor) {
        this.valor = valor;
        this.result = this.valor;
        this.resultfizz = '';
        this.resultbuzz = '';
    }

    codifyfizzbuzz(){
        this.codifyfizz();
        this.codifybuzz();
        this.result = this.resultfizz + this.resultbuzz;
        return this.result || this.valor;
    }
    codifyfizz(){
        if (this.valor % 3 === 0){
            return this.resultfizz = 'fizz';
        }
    }
    codifybuzz(){
        if (this.valor % 5 === 0){
            return this.resultbuzz = 'buzz';
        }
    }
}

module.exports = fizzbuzz;
