var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '...';
document.body.appendChild(btn);

// schijf hier tussen je code

btn.onclick = function() {aanzetten()}
function aanzetten() {
    if (btn.innerHTML == "Turn lights off") {
        btn.innerHTML = "Turn lights on"
        document.body.style.backgroundColor = "black";
        console.log("Lights off")
    } else {
        btn.innerHTML = "Turn lights off";
        document.body.style.backgroundColor = "yellow"
        console.log("Lights on")
    }
}

// schijf hier tussen je code