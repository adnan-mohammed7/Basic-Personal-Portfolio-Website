var contact = document.querySelector("#btn-contact");
var form = document.querySelector("#form-contact");

contact.onclick = function(){
    form.scrollIntoView();
};

var radio = document.querySelector("#about-input");

var rateLabel = document.querySelector("#contact-rate-label");
var rateInput = document.querySelector("#form-rate");

var about = Array.from(form.about);

function onTap(){
    about.forEach(function(option){
        if(option.checked && option.value == "hiring")
        {
            rateLabel.removeAttribute("hidden");
            rateInput.removeAttribute("hidden");
            rateInput.setAttribute("required", true);
        }
        else{
            rateLabel.setAttribute("hidden", true);
            rateInput.setAttribute("hidden", true);
            rateInput.removeAttribute("required");
            rateInput.value = "";
        }
        });
}

radio.onclick = function(){
    onTap();
}