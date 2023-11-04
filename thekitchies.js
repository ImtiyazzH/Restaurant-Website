button.addEventListener("click", (e)=>{
    e.preventDefault();
    let people = document.getElementById("people").value;
    let time = document.getElementById("people1").value;

    let confirmed = confirm("Kindly Confirm The details.\nNumber of People : "  + people + "\n"+ "Time : "+ time+"PM")
    if(confirmed){
        alert("Your table have been reserved")
    }
    else{
        alert("404 Error! Not Found")
    }
})