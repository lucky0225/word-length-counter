var print = function(msg) {
    document.getElementById("output").innerHTML = "The length is " + msg;
}

document.getElementById("btn").onclick = function(event) {
    print(document.getElementById('str').value.length);
}