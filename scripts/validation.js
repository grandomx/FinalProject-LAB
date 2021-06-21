function vlName() {
    var name = document.getElementById("name").value;
    var list = new Array ("1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/", "!", "@",
                            "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "`",
                            "~", ";", "<", ">", ".", "?", "[", "]", "{", "}", ",");
    var lgth = list.length;

    for(a = 0; a < lgth; a++) {
        if(name.length == "") {
            alert("must be filled");
            return;
        }
        else if(name.indexOf(list[a]) != -1) {
            alert("must not contains any number or symbol");
            return;
        }
    }
}