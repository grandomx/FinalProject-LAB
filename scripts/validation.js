

function validate() {

   
    event.preventDefault();
    vlFullname();
    vlUsername();
    vlEmail();
    vlPassword();
    vlCountry();
    vlPayment();
    vlCardNumber();
    vlExp();
}

// Fullname
function vlFullname() {
    var name = document.getElementById("fullname").value;
    var vfullname = document.getElementById("vfullname");

    var list = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/", "!", "@",
                        "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "`",
                        "~", ";", "<", ">", ".", "?", "[", "]", "{", "}", ",");
    var lgth = list.length;

    for(var a = 0; a < lgth; a++) 
    {
        if(name.length == 0) 
        {
            vfullname.textContent = "Must be filled!";
            vfullname.style.background = "red";
            vfullname.style.display = "block";
            vfullname.style.padding = "10px";
            vfullname.style.fontSize = "15px";
            vfullname.style.borderRadius = "10px";
            vfullname.style.marginBottom = "20px";
            vfullname.style.color = "white";
            return;
        }
        else if(name.indexOf(list[a]) != -1) 
        {
            vfullname.textContent = "Must be letter only!";
            vfullname.style.background = "red";
            vfullname.style.display = "block";
            vfullname.style.padding = "10px";
            vfullname.style.fontSize = "15px";
            vfullname.style.borderRadius = "10px";
            vfullname.style.marginBottom = "20px";
            vfullname.style.color = "white";
            return;
        } else{
            vfullname.style.display = "none";
            return;
        }
    }
}

// Username
function vlUsername() {
   
    var username = document.getElementById("username").value;
    var vluname = document.getElementById("vusername");


    if (username.length == 0) 
    {
        vluname.textContent = "Must be filled!";
        vluname.style.background = "red";
        vluname.style.display = "block";
        vluname.style.padding = "10px";
        vluname.style.fontSize = "15px";
        vluname.style.borderRadius = "10px";
        vluname.style.marginBottom = "20px";
        vluname.style.color = "white";
        return;
    } 
    else if (username.length >= 10) 
    {
        vluname.textContent = "Length must be <= 10";
        vluname.style.background = "red";
        vluname.style.display = "block";
        vluname.style.padding = "10px";
        vluname.style.fontSize = "15px";
        vluname.style.borderRadius = "10px";
        vluname.style.marginBottom = "20px";
        vluname.style.color = "white";
        return;
    } 
    else 
    {
        vluname.style.display = "none";
        return;
    }
}

// Email
function vlEmail() {
    var email = document.getElementById("email").value;
    var vemail = document.getElementById("vemail");

    if (email.length == 0) {
        vemail.textContent = "Must be filled!";
        vemail.style.background = "red";
        vemail.style.display = "block";
        vemail.style.padding = "10px";
        vemail.style.fontSize = "15px";
        vemail.style.borderRadius = "10px";
        vemail.style.marginBottom = "20px";
        vemail.style.color = "white";
        return;
    } else if(!(email.indexOf("@") != -1)) {
        vemail.textContent = "Must contain @";
        vemail.style.background = "red";
        vemail.style.display = "block";
        vemail.style.padding = "10px";
        vemail.style.fontSize = "15px";
        vemail.style.borderRadius = "10px";
        vemail.style.marginBottom = "20px";
        vemail.style.color = "white";
        return;
    } else if(!(email.endsWith(".com"))) {
        vemail.textContent = "Must contain .com";
        vemail.style.background = "red";
        vemail.style.display = "block";
        vemail.style.padding = "10px";
        vemail.style.fontSize = "15px";
        vemail.style.borderRadius = "10px";
        vemail.style.marginBottom = "20px";
        vemail.style.color = "white";
        return;
    } else{
        vemail.style.display = "none";
        return;
    }

}

// Password
function isStrPwd(password) {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var upCheck = pwdContains(password, upperCase);
    var numCheck = pwdContains(password, numbers);

    if(upCheck && numCheck) {
        return true;
    } else
        return false;
}

function pwdContains(password, contains) {
    for(var a = 0; a < password.length; a++) {
        var char = password.charAt(a);
        if(contains.indexOf(char) >= 0) {
            return true;
        }
    }
}

function vlPassword() {
    var password = document.getElementById("password").value;
    var vlpassword = document.getElementById("vpassword");

    if (password.length == 0) {
        vlpassword.textContent = "Must be filled!";
        vlpassword.style.background = "red";
        vlpassword.style.display = "block";
        vlpassword.style.padding = "10px";
        vlpassword.style.fontSize = "15px";
        vlpassword.style.borderRadius = "10px";
        vlpassword.style.marginBottom = "20px";
        vlpassword.style.color = "white";
        return;
    } else if(!isStrPwd(password)) {
        vlpassword.textContent = "Must contains uppercase and number!";
        vlpassword.style.background = "red";
        vlpassword.style.display = "block";
        vlpassword.style.padding = "10px";
        vlpassword.style.fontSize = "15px";
        vlpassword.style.borderRadius = "10px";
        vlpassword.style.marginBottom = "20px";
        vlpassword.style.color = "white";
        return;
    } else {
        vlpassword.style.display = "none";
    }
}

// Country
function vlCountry() {
    var optioncountry = document.getElementById("pleaseselect").selected;
    var vlcountry = document.getElementById("vcountry");

    if (optioncountry == true) 
    {
        vlcountry.textContent = "Must be selected!";
        vlcountry.style.background = "red";
        vlcountry.style.display = "block";
        vlcountry.style.padding = "10px";
        vlcountry.style.fontSize = "15px";
        vlcountry.style.borderRadius = "10px";
        vlcountry.style.marginBottom = "20px";
        vlcountry.style.color = "white";
    } 
    else
    {
        vlcountry.style.display = "none";
    }
}

// Payment Method

function vlPayment() {
    var debit= document.getElementById("debit").checked;
    var credit = document.getElementById("credit").checked;
    var vlpaymentmethod = document.getElementById("vpaymentmethod");

    if ((debit == false) && (credit == false))
    {
        vlpaymentmethod.textContent = "Payment Method must be selected!";
        vlpaymentmethod.style.background = "red";
        vlpaymentmethod.style.display = "block";
        vlpaymentmethod.style.padding = "10px";
        vlpaymentmethod.style.fontSize = "15px";
        vlpaymentmethod.style.borderRadius = "10px";
        vlpaymentmethod.style.marginBottom = "20px";
        vlpaymentmethod.style.color = "white";
    } 
    else 
    {
        vlpaymentmethod.style.display = "none";
    }
 
}


// Debit/Credit Number
function vlCardNumber() {
    var cardnumber = document.getElementById("cardnumber").value;
    var vccnumber = document.getElementById("vccnumber");

    if (cardnumber.length == 0) {
        vccnumber.textContent = "Card number must be filled!";
        vccnumber.style.background = "red";
        vccnumber.style.display = "block";
        vccnumber.style.padding = "10px";
        vccnumber.style.fontSize = "15px";
        vccnumber.style.borderRadius = "10px";
        vccnumber.style.marginBottom = "20px";
        vccnumber.style.color = "white";
        return;
    }

    for(var a = 0; a < cardnumber.length; a++) {
        var charCode = cardnumber.charCodeAt(a);

         if(!(charCode >= 48 && charCode <= 57)) {
            vccnumber.textContent = "Card number must contain number only!";
            vccnumber.style.background = "red";
            vccnumber.style.display = "block";
            vccnumber.style.padding = "10px";
            vccnumber.style.fontSize = "15px";
            vccnumber.style.borderRadius = "10px";
            vccnumber.style.marginBottom = "20px";
            vccnumber.style.color = "white";
            return;
        } else if (cardnumber.length != 16) {
            vccnumber.textContent = "Card number length must be 16!";
            vccnumber.style.background = "red";
            vccnumber.style.display = "block";
            vccnumber.style.padding = "10px";
            vccnumber.style.fontSize = "15px";
            vccnumber.style.borderRadius = "10px";
            vccnumber.style.marginBottom = "20px";
            vccnumber.style.color = "white";
            return;
        } else {
            vccnumber.style.display = "none";
            return;
        }
    }

}

// Exp
function vlExp() {
    var exp = document.getElementById("exp").value;
    var vexp = document.getElementById("vexp");
    
    if (exp.length == 0) {
        vexp.textContent = "Expiry date must be filled!";
        vexp.style.background = "red";
        vexp.style.display = "block";
        vexp.style.padding = "10px";
        vexp.style.fontSize = "15px";
        vexp.style.borderRadius = "10px";
        vexp.style.marginBottom = "20px";
        vexp.style.color = "white";
        return;
    }
    
    for(var a = 0; a < exp.length; a++) {
        var charCode = exp.charCodeAt(a);
        if(!(charCode >= 48 && charCode <= 57)) {
            vexp.textContent = "Expiry date must match with the format: MM/YY!";
            vexp.style.background = "red";
            vexp.style.display = "block";
            vexp.style.padding = "10px";
            vexp.style.fontSize = "15px";
            vexp.style.borderRadius = "10px";
            vexp.style.marginBottom = "20px";
            vexp.style.color = "white";
            return;
        } else if(exp[2] != "/" || exp.split("/").length == 1) {
            vexp.textContent = "Expiry date must match with the format: MM/YY!";
            vexp.style.background = "red";
            vexp.style.display = "block";
            vexp.style.padding = "10px";
            vexp.style.fontSize = "15px";
            vexp.style.borderRadius = "10px";
            vexp.style.marginBottom = "20px";
            vexp.style.color = "white";
            return;
        } else if(exp.length != 5) {
            vexp.textContent = "Expiry date must match with the format: MM/YY!";
            vexp.style.background = "red";
            vexp.style.display = "block";
            vexp.style.padding = "10px";
            vexp.style.fontSize = "15px";
            vexp.style.borderRadius = "10px";
            vexp.style.marginBottom = "20px";
            vexp.style.color = "white";
            return;
        } else {
            vexp.style.display = "none";
            return;
        }
    }
}