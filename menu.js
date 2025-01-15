function Func() {
    alert('Hello, kitty! Inline event handlers are bad practice. Do not use them!');
}


function Desen_fundal()
{
    alert('1')
    const nota_fundal = document.createElement('img');
    nota_fundal.src = './favicon.ico';
    nota_fundal.alt = 'nota..';
    
    nota_fundal.width = 300; // Set the width in pixels
    nota_fundal.height = 200;
    
    const randomX = Math.random() * (window.innerWidth - img.width);
    const randomY = Math.random() * (window.innerHeight - img.height);

    // nota_fundal.z-index: 10;

    nota_fundal.style.position = 'absolute';
    nota_fundal.style.left = `${randomX}px`;
    nota_fundal.style.top = `${randomY}px`;

    document.body.appendChild(nota_fundal);
}



window.onload = function()
{

    const bdy=document.querySelector("body");
    bdy.addEventListener('click', Desen_fundal );
    
    
    
     document.querySelector(".Text_Informativ").style.backgroundColor = "pink";
}


