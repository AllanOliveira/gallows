function JogoController(){
    this._jogo = new Jogo('.sprite');
    this._campoDeEntrada = $('#entrada');
    this._lacunasContainer = $('.lacunas');
}

JogoController.prototype.iniciaJogoOuProcessaChute = function(event){
    if(event.which == 13){
        if(this._jogo.getEtapa() == 1)
            this._iniciaJogo();
        else
            this._processaChute();
    }
}

JogoController.prototype._iniciaJogo = function(){
    this._jogo.setPalavraSecreta(this._campoDeEntrada.val());

    this._campoDeEntrada.val('');
    this._atualizaLacunas(this._jogo.getLacunas());
    this._campoDeEntrada.attr("placeholder", "De o seu palpite");
}

JogoController.prototype._processaChute = function(){
    this._jogo.processaChute(this._campoDeEntrada.val().trim().substr(0,1));

    this._campoDeEntrada.val('');
    this._atualizaLacunas(this._jogo.getLacunas());

    setTimeout(()=>{
        if(this._jogo.isGanhou())
            alert("Parabéns!! Você identificou a palavra secreta!!");

        if(this._jogo.isPerdeu())
            alert("Aaah infelizmente você foi inforcado!! Tente na proxima vez ;)");

        if(this._jogo.isPerdeuOuGanhou())
            this._reset();
        
    },200);
    
}

JogoController.prototype._atualizaLacunas = function(lacunas){
    this._lacunasContainer.html(
        lacunas.map((item) => $('<li>')
                              .addClass('lacuna')
                              .text(item))
    );
}

JogoController.prototype._reset = function(){
    this._jogo.reset();
    this._campoDeEntrada.val('').attr("placeholder","Palavra secreta");
    this._lacunasContainer.html('');
}

