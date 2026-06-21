document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio đã tải thành công!");

    const form = document.getElementById("contactForm");

    if(form){
        form.addEventListener("submit", function(e){

            e.preventDefault();

            alert("Cảm ơn bạn đã liên hệ!");

            form.reset();
        });
    }
});
const btn = document.getElementById("darkModeBtn");

if(btn){
    btn.addEventListener("click",()=>{
        document.body.classList.toggle("dark");
    });
}