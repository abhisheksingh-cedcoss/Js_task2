function myConvert(){
    var val = document.getElementById("input_num").value;
    if (document.getElementById("htom").checked == true){
        document.getElementById("result").innerHTML = val + " hours "+ " = "+ val*60 + " minutes";
    }
else{
    document.getElementById("result").innerHTML = val + "h "+" = "+ val*3600 + " second";
}
}