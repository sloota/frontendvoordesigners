/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var meerInfo1 = document.getElementById("toon1");
var infoBlock1 = document.getElementById("info1");
var infoText1 = document.querySelector("#info1 article p");
var zichtbaar = "1";

var meerInfo2 = document.getElementById("toon2");
var infoBlock2 = document.getElementById("info2");
var infoText2 = document.querySelector("#info2 article p");

var meerInfo3 = document.getElementById("toon3");
var infoBlock3 = document.getElementById("info3");
var infoText3 = document.querySelector("#info3 article p");

var meerInfo4 = document.getElementById("toon4");
var infoBlock4 = document.getElementById("info4");
var infoText4 = document.querySelector("#info4 article p");


/////////////////////////////////////////////////////////////////////////////

window.onload = function () {
    infoText1.style.opacity = "0";
    infoBlock1.style.marginTop = "-123px";
    
    infoText2.style.opacity = "0";
    infoBlock2.style.marginTop = "-123px";
    
    infoText3.style.opacity = "0";
    infoBlock3.style.marginTop = "-123px";
    
    infoText4.style.opacity = "0";
    infoBlock4.style.marginTop = "-123px";
}

/////////////////////////////////////////////////////////////////////////////
    
meerInfo1.addEventListener("click", function () {
    if (infoText1.style.opacity === zichtbaar){
        infoText1.style.opacity = "0";
        infoBlock1.style.marginTop = "-123px";
        console.log("test1")
    } else {
        infoText1.style.opacity = "1";
        infoBlock1.style.marginTop = "-7.5px";
        console.log("test2")
    }
});

/////////////////////////////////////////////////////////////////////////////
    
meerInfo2.addEventListener("click", function () {
    if (infoText2.style.opacity === zichtbaar){
        infoText2.style.opacity = "0";
        infoBlock2.style.marginTop = "-123px";
    } else {
        infoText2.style.opacity = "1";
        infoBlock2.style.marginTop = "-7.5px";
    }
});

/////////////////////////////////////////////////////////////////////////////
    
meerInfo3.addEventListener("click", function () {
    if (infoText3.style.opacity === zichtbaar){
        infoText3.style.opacity = "0";
        infoBlock3.style.marginTop = "-123px";
    } else {
        infoText3.style.opacity = "1";
        infoBlock3.style.marginTop = "-7.5px";
    }
});

/////////////////////////////////////////////////////////////////////////////
    
meerInfo4.addEventListener("click", function () {
    if (infoText4.style.opacity === zichtbaar){
        infoText4.style.opacity = "0";
        infoBlock4.style.marginTop = "-123px";
    } else {
        infoText4.style.opacity = "1";
        infoBlock4.style.marginTop = "-7.5px";
    }
});
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var inschrijven1 = document.getElementById("huis1");
var schuif1 = document.getElementById("schuif1");
var opgeschoven = "49%";

var inschrijven2 = document.getElementById("huis2");
var schuif2 = document.getElementById("schuif2");

var inschrijven3 = document.getElementById("huis3");
var schuif3 = document.getElementById("schuif3");

var inschrijven4 = document.getElementById("huis4");
var schuif4 = document.getElementById("schuif4");

/////////////////////////////////////////////////////////////////////////////

window.onload = function () {
    inschrijven1.style.right = "0";
    schuif1.style.left = "0";
    meerInfo1.style.left = "0";
    
    inschrijven2.style.right = "0";
    schuif2.style.left = "0";
    meerInfo2.style.left = "0";
    
    inschrijven3.style.right = "0";
    schuif3.style.left = "0";
    meerInfo3.style.left = "0";
    
    inschrijven4.style.right = "0";
    schuif4.style.left = "0";
    meerInfo4.style.left = "0";
}

/////////////////////////////////////////////////////////////////////////////

schuif1.addEventListener("click", function () {
    if (inschrijven1.style.right === opgeschoven){ 
        inschrijven1.style.right = "0";
        schuif1.style.left = "0";
        meerInfo1.style.left = "0";
    } else {
        inschrijven1.style.right = "49%";
        schuif1.style.left = "60%";
        meerInfo1.style.left = "60%";
        
    }
});

/////////////////////////////////////////////////////////////////////////////

schuif2.addEventListener("click", function () {
    if (inschrijven2.style.right === opgeschoven){
        inschrijven2.style.right = "0";
        schuif2.style.left = "0";
        meerInfo2.style.left = "0";
    } else {
        inschrijven2.style.right = "49%";
        schuif2.style.left = "60%";
        meerInfo2.style.left = "60%";
        
    }
});

/////////////////////////////////////////////////////////////////////////////

schuif3.addEventListener("click", function () {
    console.log('clicked!');
    if (inschrijven3.style.right === opgeschoven){
        inschrijven3.style.right = "0";
        schuif3.style.left = "0";
        meerInfo3.style.left = "0";
    } else {
        inschrijven3.style.right = "49%";
        schuif3.style.left = "60%";
        meerInfo3.style.left = "60%";
    }
});

/////////////////////////////////////////////////////////////////////////////

schuif4.addEventListener("click", function () {
    if (inschrijven4.style.right === opgeschoven){
        inschrijven4.style.right = "0";
        schuif4.style.left = "0";
        meerInfo4.style.left = "0";
    } else {
        inschrijven4.style.right = "49%";
        schuif4.style.left = "60%";
        meerInfo4.style.left = "60%";
        
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////