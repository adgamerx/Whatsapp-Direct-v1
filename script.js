function send() 
{
    var dialcode = 91;
    var phone = dialcode + document.messageForm.phone.value;
    var msg = encodeURI(document.messageForm.message.value);
    // check if no. is 10 or not rahne dete hai

    window.location = "whatsapp://send?phone=" + phone + "&text=" + msg;
    
    //pta nahi dial code maybe

    /*else {
        window.location = "https://web.whatsapp.com/send?phone=" + phone + "&phone=" + msg;
        open whatsapp web to send message for desktop
    }*/

}