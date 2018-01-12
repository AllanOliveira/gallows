function Sprite(selector){
    this._container = $(selector);
    this._container.removeClass().addClass('sprite');
    this._listaDeFrames = new ListaDeFrames();
    
}

Sprite.prototype.nextFrame = function(){
    this.moveFrame(this._listaDeFrames.getFrameSelecionado(),
                   this._listaDeFrames.nextFrame());
}

Sprite.prototype.moveFrame = function(deFrame,paraFrame){
    this._container.removeClass(deFrame.getCss())
                   .addClass(paraFrame.getCss());
}

Sprite.prototype.reset = function(){
    console.log(this._listaDeFrames.getFrameSelecionado());
    console.log(this._listaDeFrames.selecionaPorPosicao(0));
    this.moveFrame(this._listaDeFrames.getFrameSelecionado(),
                   this._listaDeFrames.selecionaPorPosicao(0));
}

Sprite.prototype.isFinished = function(){
    return this._listaDeFrames.isLastFrame();
}

Sprite.prototype.ehUltimoFrame = function(){
    return this._listaDeFrames.isLastFrame();
}