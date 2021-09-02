document.getElementById("button1").addEventListener("click",convert );
function convert(){
    var cgpa=document.getElementById("input1").value;
    var Percentage=((cgpa-0.75)*10).toFixed(2);
    document.getElementById("input2").value=Percentage;
    navigator.clipboard.writeText(Percentage);
    document.getElementById("warn").innerHTML=Percentage+" copied to clipboard!";
}