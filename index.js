(function($){
    "use strict"

    if($('.typed-text-output').length==1){
        var typed_strings=$('.typed-text').text();
        var typed = new Typed('.typed-text-output',{
            strings:typed_strings.split(', '),
            typeSpeed:100,
            backSpeed:20,
            smartBackspace:false,
            loop:true

        });
    }
})(jQuery);


// // send mails
// function sendEmail() {
// 	Email.send({
// 	Host: "smtp.gmail.com",
// 	Username : "yellankishashidhar@gmail.com",
// 	Password : "9849959523",
// 	To : '<yellenkishashidhar@gmail.com',
// 	From : `${}`,
// 	Subject : "<email subject>",
// 	Body : "<email body>",
// 	}).then(
// 		message => alert("mail sent successfully")
// 	);
// }