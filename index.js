/**
* Hello World
* @function layUI
**/ 
    // const $ =require('jquery');   
    const totals=function(options){
        this.timer=null;
        this.options={
            delay:3000,
            message:'hello layUI!'
        }
    //    $.extend(this.options, options);
        this.init();
    }
    totals.prototype.constructor=totals;
    totals.prototype.init=function(){
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
    
    layUI.totals=function(options){
        new totals(options);
    }

exports.layUI  = layUI;
