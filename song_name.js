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

async function get_song() {
    const url = "https://cors-anywhere.herokuapp.com/http://api.genius.com/songs/";
    const nr = Math.floor( Math.random()*95+5 );
    const resp = await fetch( `${url}${nr}`,{
        headers:{
            Authorization:"Bearer CXyFeSBw2lAdG41xkuU3LS6a_nwyxwwCz2dCkUohw-rw0C49x2HqP__6_4is5RPx",
        }
    } );
    const sg = await resp.json()

    const sn = document.querySelector("#Song_names");
    sn.textContent = sg.response.song.full_title; 

    const im = document.querySelector("#Song_img");
    im.setAttribute("src",sg.response.song.header_image_url); 
    im.style.height= "20vw";
    im.style.weight= "20vw";

    // = sg.header_image_thumbnail_url

    console.log(sg.response);
}


window.onload = function()
{
    const bdy=document.querySelector("body");
    bdy.addEventListener('click', Desen_fundal );                       
    bdy.addEventListener('click', get_song );                       ///         CHANGE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    const bt=document.querySelector("#scroll_button");
    bt.addEventListener('click', scrollToEnd );
    
    

}


