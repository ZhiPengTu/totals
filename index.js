/**
*  _totals
* @function _totals
**/ 
const $ =require('jquery');   
const _totals=function(options){
    this.timer=null;
    this.options={
        delay:3000,
        message:'hello layUI!'
    }
   $.extend(this.options, options);
    this.init();
}
_totals.prototype.constructor=_totals;
_totals.prototype.init=function(){
    var _this = this;
    var totalswrap=document.createElement('div');
    totalswrap.className='layui-totals';
    var totalsSpan=document.createElement('span');
    totalsSpan.innerText=_this.options.message;
    totalswrap.appendChild(totalsSpan);
    var body=document.getElementsByTagName('body')[0];
    body.appendChild(totalswrap);
    setTimeout(function(){
        body.removeChild(totalswrap);
    },_this.options.delay);
};

const totals = function(options){
   return new _totals(options);
}

module.exports = {  
    totals: totals
}

