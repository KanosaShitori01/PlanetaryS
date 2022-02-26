let title = document.querySelector("#title");
let fullname = document.querySelector("#fullname");
let gmail = document.querySelector("#email");
let poster = document.querySelector("#poster");
let oral = document.querySelector("#oral");
let titleOAbs = document.querySelector("#titleOAbs");
let AbsText = document.querySelector("#AbsText");
let confAbs = document.querySelector("#confAbs");
let sendgmail = document.querySelector("#sendgmail");

sendgmail.addEventListener("click", ()=>{
    SendEmailTo();
});
function SendEmailTo(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vanvanthanhqq1@gmail.com",
        Password : "1AA17BF17BD250AEA0B5744D79EED788CC3D",
        To : 'tranchauqn9@gmail.com',
        From : "vanvanthanhqq1@gmail.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
        message => alert(message)
    );
}