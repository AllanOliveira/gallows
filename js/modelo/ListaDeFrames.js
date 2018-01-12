function ListaDeFrames(){
    
    this._frames = [new Frame('forca','frame1'),
                    new Frame('cabeca','frame2'),
                    new Frame('orelha-d','frame3'),
                    new Frame('orelha-e','frame4'),
                    new Frame('corpo','frame5'),
                    new Frame('braco-d','frame6'),
                    new Frame('braco-e','frame7'),
                    new Frame('perna-d','frame8'),
                    new Frame('perna-e','frame9')];

    this._posicao = 0;
}

ListaDeFrames.prototype.selecionaPorPosicao = function(posicao){
    this._posicao = posicao;
    return this.getFrameSelecionado();
}

ListaDeFrames.prototype.nextFrame = function(){

    if(this.possuiProximo())
        this._posicao++;
    
    return this.selecionaPorPosicao(this._posicao);
}

ListaDeFrames.prototype.getFrameSelecionado = function(){   
   return this._frames[this._posicao];
}

ListaDeFrames.prototype.possuiProximo = function(){
    var proximaPosicao = this._posicao+1;
    return proximaPosicao < this._frames.length;
}

ListaDeFrames.prototype.isLastFrame = function(){
    return this._posicao == this._frames.length-1;
}