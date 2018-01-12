function Frame(name,css){
    this._name = name;
    this._css = css;
    Object.freeze(this);
}

Frame.prototype.getName = function(){   
    return this.name;
}

Frame.prototype.getCss = function(){   
    return this._css;
}