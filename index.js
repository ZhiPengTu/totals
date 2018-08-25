/**
* Hello World
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
    _totals.prototype.constructor=totals;
    _totals.prototype.init=function(){ß
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
    
    let totals = function(options){
       this.totals = new _totals(options);
    }

export {layUI};
