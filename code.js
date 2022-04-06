var project= document.querySelector('.project');
project.onclick=function(){
	document.body.classList.toggle("swap-display");
}
		
const toggle= document.querySelector('.toggle');
const banner= document.querySelector('.banner');
toggle.onclick=function(){
	toggle.classList.toggle('active');
	banner.classList.toggle('active');
}

const swap= document.querySelector('.swap');
swap.onclick=function(){
	if(swap.innerText==='SEE MORE')
	{
		swap.innerText='SEE LESS';
	}
	else{
		swap.innerText='SEE MORE';
	}
	document.body.classList.toggle("about-swap");
}
