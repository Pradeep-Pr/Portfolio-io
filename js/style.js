//////////////////Active manu///////////////

// let menuli = document.querySelectorAll ("header ul li a");
// let section = document .querySelectorAll ("section");

// function activeMenu(){
//     let len = section.length;
//     while(--len && window.scrollY + 97 < section[len].offsetTop){}
//     menuli.forEach(sec => sec.classList.remove("active"));
//     menuli[len].classList.add("activie");
// }
// activeMenu();
// window.addEventListener("scroll",activeMenu)



//////////////////tiggle icon navbar////////


const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");


if(bar) {
    bar.addEventListener("click",() =>{
        nav.classList.add("active");
    })
}
if(close) {
    close.addEventListener("click",() =>{
        nav.classList.remove("active");
    })
}
 


//////////////////progress Bar////////


const services = document.getElementById('services');


const observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
        const spans = document.querySelectorAll('.progress-bar span');

        spans.forEach((span) => {
            span.style.width = span.dataset.width;
            span.innerHTML = span.dataset.width;
        });
        observer.unobserve(entries[0].target)
    }
},{threshold:.5})


observer.observe(services)



////////////////////////form////////////
const form = document.querySelector ('form'); 
const fullName = document.getElementById ("name");
const email = document.getElementById ("email");
const Subject = document.getElementById ("Subject");
const number = document.getElementById ("number");
const massage = document.getElementById ("massage");


// var bodyMessage  = "Name:" + fullName + " <br/> Email :"  + email+ "<br /> Message :"+ massage+"<br /> Phone Number : "+ number ;

//  var bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br>phone Number: ${number.value}<be> message : ${massage.value}`;


function sendEmail(){ 

    var  bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br>phone Number: ${number.value}<be> message : ${massage.value}`;

    // var bodyMessage = "Name:" + fullName + " <br/>  Email :" + email+ "<br /> Message :"+ massage+"<br /> Phone Number : "+ number ;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pradeepkumarshial11@gmail.com",
        Password : "8208190DD83AE9F6F348E4AE0E8A87845BD2",
        To : 'pradeepkumarshial11@gmail.com',
        From : "pradeepkumarshial11@gmail.com",
        Subject :  Subject.value,
        Body :  bodyMessage 
    }).then(
      message =>   {
        if (message =="ok"){
            Swal.fire({
                title: "Success!",
                text: "Massage send successfully!",
                icon: "success"
            });
        }
      }
    );
}

function checkInputs () {
    const items = document .querySelectorAll (".item");

    for ( const item of items){
        if (item .value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error")
        }         
    }

}

form .addEventListener( "submit", (e) =>{
    e.preventDefault();
    // sendEmail();
})



