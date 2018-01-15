function Jogo(containerSprite){
    this._sprite = new Sprite(containerSprite);
    this._palavraSecreta = "";
    this._lacunas =[];
    this._etapa = 1;
}

Jogo.prototype.setPalavraSecreta = function(palavraSecreta){
    if(palavraSecreta){
        this._palavraSecreta = palavraSecreta;
        this._lacunas = Array(palavraSecreta.length).fill('');
        this._etapa = 2;
    }
}

Jogo.prototype.getLacunas = function(){
    return this._lacunas;
}

Jogo.prototype.getEtapa = function(){
    return this._etapa;
}

Jogo.prototype.processaChute = function(letra){

    var acertou = false;
    var exp = new RegExp(letra,'gi');
    var regResult;

    while(regResult = exp.exec(this._palavraSecreta)){
        this.preencheLacuna(regResult.index);
        acertou = true;
    }

    if(!acertou){
        this._sprite.nextFrame();
    }
}

Jogo.prototype.preencheLacuna = function(posicao){
    this._lacunas[posicao] = this._palavraSecreta[posicao];
}

Jogo.prototype.isGanhou = function(){
    return this._lacunas.length ? !this._lacunas.some((lacuna)=> lacuna == '') : false;
}

Jogo.prototype.isPerdeu = function(){
    return this._sprite.ehUltimoFrame();
}

Jogo.prototype.isPerdeuOuGanhou = function(){
    return (this.isPerdeu() || this.isGanhou());
}

Jogo.prototype.reset = function(){
    this._sprite.reset();
    this._palavraSecreta = "";
    this._lacunas =[];
    this._etapa = 1;
}