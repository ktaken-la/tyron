
function getparagraph1() {
    var inputs=[];   
     for(var i=1;i<=6;i++) {
         inputs.push(document.getElementById("para_input_box_" +i).value);
     }
     document.getElementById("display_name").innerHTML=inputs.join(". ");
}


function getparagraph2() {
    var inputs=[];   
     for(var i=1;i<=6;i++) {
         inputs.push(document.getElementById("para2_input_box_" +i).value);
     }
     document.getElementById("show1").innerHTML=inputs.join(". ");
}
