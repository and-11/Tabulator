function F_login()
{
    // alert('32')
    const user = document.querySelector("#user_box").value;
    const password = document.querySelector("#password_box").value;
    const show_error = document.querySelector("#error_box");

    // console.log( user );
    // console.log( password );

    show_error.textContent="";
    
    const corect_password = localStorage.getItem(user);
    if( corect_password == null )
    {
        show_error.textContent="User "+user+" does not exist!";
    }   
    else 
    {
        if( corect_password != password )
            show_error.textContent="Incorect password!";
        else 
        {
            // alert('you are in');
            localStorage.setItem("user",user);
            const login_elements = document.querySelector(".Search_Bar");
            login_elements.style.backgroundColor='pink';
        }
    }
}

function F_signin()
{
    // alert('signinnnn')
    const user = document.querySelector("#user_box").value;
    const password = document.querySelector("#password_box").value;
    const show_error = document.querySelector("#error_box");

    if( localStorage.getItem(user) != null )
    {
        show_error.textContent="User "+user+" is already taken!";
    }   
    else 
    {
        localStorage.setItem(user,password);
    }
}

window.onload = function()
{
    localStorage.setItem("user","Guest");

    const login_button=document.querySelector("#login");
    login_button.addEventListener('click', F_login );
    
    const signin_button=document.querySelector("#signin");
    signin_button.addEventListener('click', F_signin  );
    
    
    //  document.querySelector(".Text_Informativ").style.backgroundColor = "pink";
}


