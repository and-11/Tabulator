window.onload = function()
{
    const hello_usr=document.querySelector("#helloer");
    user = localStorage.getItem("user");
    hello_usr.textContent="Hello "+user+"!";
    
}