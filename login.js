
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
        if( digits!=null )
        {

            if( digits.length >= 2 )
                {    
                    if( password!="" )
                    {

                        localStorage.setItem(user,password);
                        show_error.textContent="New account created!";
                    }
                    else 
                    {
                        show_error.textContent="Enter a password....";
                    }
                }
        }
        else 
        {
            alert("asd");
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

function Func() {
    alert('Hello, kitty! Inline event handlers are bad practice. Do not use them!');
}

function rmPX( x )
{
    return Number( x.slice(0,-2) )  ;
}

function Desen_fundal()
{
    // alert('1')
    const nota_fundal = document.createElement('img');
    nota_fundal.src = './cheiafa.png';
    nota_fundal.alt = 'nota..';
    
    nota_fundal.style.width = '20px'; // Set the width in pixels
    nota_fundal.style.height = '30px';
    
    const nav_bar= document.querySelector(".Navigation_Bar");
    
    const nav_bar_computedStyle = window.getComputedStyle(nav_bar)
    
    
    
    const randomX = Math.random() * ( rmPX( nav_bar_computedStyle.width) - rmPX(nota_fundal.style.width) );
    const randomY = Math.random() * ( rmPX(nav_bar_computedStyle.height) - rmPX(nota_fundal.style.height) );
    
    
    nota_fundal.style.zIndex= '2';
    nota_fundal.style.position = 'absolute';
    nota_fundal.style.left = `${randomX}px`;
    nota_fundal.style.top = `${randomY}px`;
    
    document.body.appendChild(nota_fundal);
    
    setTimeout(()=>{
        nota_fundal.style.opacity = '0';
        nota_fundal.addEventListener('transitionend', () => {
            nota_fundal.remove();
        });
    }, 1000);
}

function scrollToEnd() {
    
    const totalHeight = document.body.scrollHeight; 
    const duration = 20000;
    const interval = 10; 
    const step = totalHeight / (duration / interval);
    
    let currentScroll = window.scrollY; 
    const cs = currentScroll;

    const scrollInterval = setInterval(() => {
        if (currentScroll < totalHeight - window.innerHeight) {
            currentScroll += step;
            window.scrollTo(0, currentScroll);
        } else {
            clearInterval(scrollInterval); 
        }
    }, interval);
  
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
        

    // alert(2);
    const bdy=document.querySelector("body");
    bdy.addEventListener('click', Desen_fundal );
    
    const bt=document.querySelector("#scroll_button");
    bt.addEventListener('click', scrollToEnd );
    
    




    
    //  document.querySelector(".Text_Informativ").style.backgroundColor = "pink";
}


