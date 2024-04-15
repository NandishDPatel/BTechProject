var inputs = document.getElementsByClassName('inp');
var spanTags = document.getElementsByClassName('hidden');

console.log(inputs);
console.log(spanTags);

var nmPattern = /^[a-zA-Z ]{2,30}$/ ;
var emPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
var mbPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ ;

function chkNm(){
    if(!nmPattern.test(inputs[0].value)){
        spanTags[0].innerHTML = "*Invalid Name";
        return false;
    }
    else{
        spanTags[0].innerHTML = "";
    }
}
function chkEm(){
    if(!emPattern.test(inputs[1].value)){
        spanTags[1].innerHTML = "*Invalid Email"
        return false;
    }
    else{
        spanTags[1].innerHTML = "";
    }
}
function chkMb(){
    if(!mbPattern.test(inputs[2].value)){
        spanTags[2].innerHTML = "*Invalid Number";
    }
    else{
        spanTags[2].innerHTML = "";
    }
}

function checkFields(){
    
    for(i=0;i<3;i++){
        if(inputs[i].value == ""){
            spanTags[i].innerHTML = "*Required";
        }
    }   
    count = 0;
    for(j=0;j<spanTags.length;j++){
        
        if(spanTags[j].innerHTML == ""){
            count += 1;
        }
    }
    if(count==4){
        alert("Form Successfully Submitted :)\n You will be given reply within 2 business days");
        for(i=0;i<4;i++){
            inputs[i].value = "";
        }
    }
}