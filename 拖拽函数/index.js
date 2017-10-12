var  box=document.querySelector(".box");
box.addEventListener("mousedown",down);
function down(ev){
	var boxX=ev.clientX - this.offsetLeft;
	var boxY=ev.clientY - this.offsetTop;
	document.addEventListener("mousemove",move);
	function move(ev){
		box.style.left=ev.clientX-boxX+"px";
		box.style.top=ev.clientY-boxY+"px";
		document.addEventListener("mouseup",up);
		function up(){
			document.removeEventListener("mousemove",move);
			document.removeEventListener("mouseup",up);
		}
	}
}
