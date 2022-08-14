function show_alert() {
    alert("Are you sure you want to proceed?");
    var h1=document.getElementById("poetry");
    var h2=document.getElementById("performance");
    var h3=document.getElementById("cp");
    var h4=document.getElementById("boxing");
    var h5=document.getElementById("reading");
    var h6=document.getElementById("blogging");
    document.getElementById("hobbies_form").style.display="none";
    if(h1.checked) {
        document.getElementById("h1").style.display="block";
    }
    if(h2.checked) {
        document.getElementById("h2").style.display="block";
    }
    if(h3.checked) {
        document.getElementById("h3").style.display="block";
    }
    if(h4.checked) {
        document.getElementById("h4").style.display="block";
    }
    if(h5.checked) {
        document.getElementById("h5").style.display="block";
    }
    if(h6.checked) {
        document.getElementById("h6").style.display="block";
    }

}