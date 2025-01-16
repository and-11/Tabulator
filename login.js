
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
            const login_elements = document.querySelectorAll(".lgoin_el");

            login_elements.forEach(element => {
                element.style.display = 'none';
            });
            show_error.textContent="Hello "+user+"!";
            localStorage.setItem("hidd",1);
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
        let digits = user.match(/\d/g);
        if( digits.length >= 2 )
        {    
            localStorage.setItem(user,password);
            show_error.textContent="New account created!";
        }
        else 
        {
            show_error.textContent="Not enough digits :(";
        }
    }
}

function F_logout()
{
    // alert('louty')
    if( localStorage.getItem("user")!="Guest" )
    {
        const show_error = document.querySelector("#error_box");
        show_error.textContent="Logged out...";
        localStorage.setItem("user","Guest");
        const login_elements = document.querySelectorAll(".lgoin_el");
        login_elements.forEach(element => {
            element.style.display = 'flex';
        });
        localStorage.removeItem("hidd");
    }   
}

window.onload = function()
{
    // localStorage.setItem("user","Guest");
    if( localStorage.getItem( "hidd" )!=null )
    {
        const login_elements = document.querySelectorAll(".lgoin_el");
        const show_error = document.querySelector("#error_box");
        const usr = localStorage.getItem( "user" );

        login_elements.forEach(element => {
            element.style.display = 'none';
        });
        show_error.textContent="Hello "+usr+"!";
    }


    const login_button=document.querySelector("#login");
    login_button.addEventListener('click', F_login );
    
    const signin_button=document.querySelector("#signin");
    signin_button.addEventListener('click', F_signin  );
    
    const logout_button=document.querySelector("#logout");
    logout_button.addEventListener('click', F_logout  );
    
    //  document.querySelector(".Text_Informativ").style.backgroundColor = "pink";
}


