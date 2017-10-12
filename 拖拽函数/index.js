document.addEventListener("mousemove",move);
function move(ev){
	box.style.left=ev.clientX-boxX+"px";
	box.style.top=ev.clientY-boxY+"px";
	
}
