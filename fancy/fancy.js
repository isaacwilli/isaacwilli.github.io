// bigger text function
const masGrande = () => { document.getElementById("fancify").style.fontSize="24px"; };
// moo text function
const moo = () => { document.getElementById("fancify").value = document.getElementById("fancify").value.replace(".", "-MOO."); }

// radio button toggle function
const toggle = () => {
    if(document.getElementById("fancy").checked){
        document.getElementById("fancify").style.fontWeight = "bold";
        document.getElementById("fancify").style.color = "blue";
        document.getElementById("fancify").style.textDecoration = "underline";
    }
    else {
        document.getElementById("fancify").style.fontWeight = "normal"
        document.getElementById("fancify").style.color = "black"
        document.getElementById("fancify").style.textDecoration = "none";
    }
}
