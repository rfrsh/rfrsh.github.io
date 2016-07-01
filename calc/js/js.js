var flag1=true;
var flag2=0;
var flag3;
var flag4;
var flag5=true;
var flag6;
var flag7=true;
var flag8=false;

var getNumber0,getNumber1;
var display1=document.querySelector('#display');
var left1=document.querySelector('#bottom-left');
left1.addEventListener('click', function(e) {
    //e.stopPropagation();
    getNumber1=e.target.innerHTML;
    //alert(e.target.innerHTML); alert(e.currentTarget.innerHTML);
    if(e.target.innerHTML==e.currentTarget.innerHTML)return;
    if(e.target.innerHTML=='.'){
        console.log('55',display1.innerHTML);

        if(display1.innerHTML=='0'){
            display1.innerHTML='0.';
            flag1=false;
        }

        if(flag8==true){
            console.log('111',display1.innerHTML);
            display1.innerHTML='0.';
            flag8=false;
            flag1=false;
        }
        if(display1.innerHTML.split('.').length - 1>=1)return;

    }
    getNumber0=document.querySelector('#display').innerHTML;
    if(!flag5){
        firstNumber = undefined;
        secondNumber = undefined;
    }
    if(flag1||display1.innerHTML=='0'){
        display1.innerHTML=getNumber1;
        flag1=false;
        flag4=true;


    }
    else {
        display1.innerHTML=getNumber0+getNumber1;
        flag4=true;

    }
    flag6=true;
});


var firstNumber,secondNumber;

var minus1=document.querySelector('#minus');
minus1.addEventListener( "click" , function() {
    flag6=false;
    flag5=true;
    calc();
    flag3='minus';
    flag8=true;
});

var plus1=document.querySelector('#plus');
plus1.addEventListener( "click" , function() {
    flag6=false;
    flag5=true;
    calc();
    flag3='plus';
    flag8=true;
});
var multi1=document.querySelector('#multi');
multi1.addEventListener( "click" , function() {
    flag6=false;
    flag5=true;
    calc();
    flag3='multi';
    flag8=true;
});
var devi1=document.querySelector('#devi');
devi1.addEventListener( "click" , function() {
    flag6=false;
    flag5=true;
    calc();
    flag3='devi';
    flag8=true;
});
var eq1=document.querySelector('#eq');
flag4=true;
eq1.addEventListener( "click" , function() {
    calc();
    flag5=false;
});

var back1=document.querySelector('#back');
back1.addEventListener( "click" , function() {
    console.log(display1.innerHTML);
    if(display1.innerHTML=='0'||display1.innerHTML.length==1){
        display1.innerHTML='0';
        return;
    }
    if(firstNumber) {
        if (flag4) {
            secondNumber = document.querySelector('#display').innerHTML.slice(0,-1);
            if (secondNumber.length=0)secondNumber='0';
            display1.innerHTML=secondNumber;
        }
    }
    else {
        firstNumber=document.querySelector('#display').innerHTML.slice(0,-1);
        if (firstNumber.length=0)firstNumber='0';
        display1.innerHTML=firstNumber;
    }

});
var ce1=document.querySelector('#ce');
ce1.addEventListener( "click" , function() {
    secondNumber = undefined;
    display1.innerHTML='0';
    flag1=true;
});

var c1=document.querySelector('#c');
c1.addEventListener( "click" , function() {
    firstNumber = undefined;
    secondNumber = undefined;
    display1.innerHTML='0';
    flag1=true;
});

var pmNumber;
var pm1=document.querySelector('#plus-minus');
pm1.addEventListener( "click" , function() {
    console.log('f1',firstNumber)
    console.log('s1',secondNumber)
    pmNumber=0-(parseFloat(display1.innerHTML));
    if(firstNumber==undefined) {
        firstNumber= ''+pmNumber;
        display1.innerHTML = firstNumber;
    }
    if(secondNumber==undefined) {
        secondNumber= ''+pmNumber;
        display1.innerHTML = secondNumber;
    }

    console.log('f',firstNumber)
    console.log('s',secondNumber)
});


var root1=document.querySelector('#root');
root1.addEventListener( "click" , function() {
    if(parseFloat(display1.innerHTML)<0)pmNumber=-Math.sqrt(0-parseFloat(display1.innerHTML));
    else pmNumber=Math.sqrt(parseFloat(display1.innerHTML));
    if(secondNumber) {
        firstNumber= ''+pmNumber;
        display1.innerHTML = firstNumber;
    }
    else{
        secondNumber= ''+pmNumber;
        display1.innerHTML = secondNumber;
    }
    firstNumber = display1.innerHTML;
    secondNumber = undefined;
    flag4=false;
    flag2=0;
    flag1=true;
});

var devx1=document.querySelector('#devx');
devx1.addEventListener( "click" , function() {
    pmNumber=1/(parseFloat(display1.innerHTML));
    if(secondNumber) {
        firstNumber= ''+pmNumber;
        display1.innerHTML = firstNumber;
    }
    else{
        secondNumber= ''+pmNumber;
        display1.innerHTML = secondNumber;
    }
    firstNumber = display1.innerHTML;
    secondNumber = undefined;
    flag4=false;
    flag2=0;
    flag1=true;
});

var percent1=document.querySelector('#percent');
percent1.addEventListener( "click" , function() {
    // pmNumber=1/(parseFloat(display1.innerHTML));
    if(flag7) {

        firstNumber= ''+0;
        display1.innerHTML = firstNumber;

    }
    else{
        secondNumber= ''+parseFloat(firstNumber)*parseFloat(display1.innerHTML)/100;
        console.log(secondNumber)
        display1.innerHTML = secondNumber;
    }
});



function calc(){
    flag1=true;
    flag7=false;
    if(firstNumber) {
        if (flag4) {
            secondNumber = document.querySelector('#display').innerHTML;
            //flag3='plus';
            flag2++;
        }
    }
    else firstNumber=document.querySelector('#display').innerHTML;
    if(flag2>=1) {
        if(flag3=='plus') {display1.innerHTML = parseFloat(firstNumber) + parseFloat(secondNumber);}
        if(flag3=='minus') {display1.innerHTML = parseFloat(firstNumber) - parseFloat(+secondNumber);}
        if(flag3=='multi') {display1.innerHTML = parseFloat(firstNumber)*parseFloat(secondNumber);}
        if(flag3=='devi') {display1.innerHTML = parseFloat(firstNumber)/parseFloat(secondNumber);}
        firstNumber = display1.innerHTML;
        secondNumber = undefined;
        flag4=false;
        flag2=0;
    }
}
