function animation1(i,j,x){
	var elem=document.getElementById(i+"-"+j);
	elem.innerHTML=x;
	elem.style.backgroundColor=getcolor(board[i][j]);
	var length=0,posl=getleft(j)+50,post=gettop(i)+50;
	var id=setInterval(frame,5);
	function frame(){
		if(length==100){
			clearInterval(id);
		}else{
			length+=10;
			posl-=5;
			post-=5;
			elem.style.width=length+"px";
			elem.style.height=length+"px";
			elem.style.left=posl+"px";
			elem.style.top=post+"px";
		}
	}	
}

function animation2(i,j,toi,toj){
	$("#"+i+"-"+j).animate({
		top:gettop(toi),
		left:getleft(toj)
	},200);
}