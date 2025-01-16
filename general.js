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
   
    const bdy=document.querySelector("body");
    bdy.addEventListener('click', Desen_fundal );
    
    const bt=document.querySelector("#scroll_button");
    bt.addEventListener('click', scrollToEnd );
    
    
    //  document.querySelector(".Text_Informativ").style.backgroundColor = "pink";
}


