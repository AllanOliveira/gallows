function Jogo(containerSprite){
    this._sprite = new Sprite(containerSprite);
    this._palavraSecreta = "";
    this._lacunas =[];
}

Jogo.prototype.setPalavraSecreta = function(palavraSecreta){
    this._palavraSecreta = palavraSecreta;
    this._lacunas = Array(palavraSecreta.length).fill('');
}

Jogo.prototype.getLacunas = function(){
    return this._lacunas;
}

Jogo.prototype.processaChute = function(letra){

    var acertou = false;
    var exp = new RegExp(letra,'gi');
    var regResult;

    while(regResult = exp.exec(this._palavraSecreta)){
        this.preencheLacuna(regResult.index);
        acertou = true;
    }

    if(!acertou)
        this._sprite.nextFrame();  
}

Jogo.prototype.preencheLacuna = function(posicao){
    this._lacunas[posicao] = this._palavraSecreta[posicao];
    this.validaVitoria();
}

Jogo.prototype.validaVitoria = function(){
    
    this._lacunas.forEach((lacuna) => {
        if(!lacuna)
            return false;
    });

    return true;
}

Jogo.prototype.validaDerrota = function(){
    return this._sprite.ehUltimoFrame();
}