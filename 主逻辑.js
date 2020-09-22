var board=new Array(),score=0;

$(document).ready(function (){
	newgame();
});

function newgame(){
	init();
	random();
	random();
}

function init(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			document.getElementById(i+" "+j).style.left=getleft(j)+"px";
			document.getElementById(i+" "+j).style.top=gettop(i)+"px";
		}
	}
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			board[i]=new Array();
			board[i][j]=0;
		}
	}
	score=0;
	change();	
}

function change(){
	$(".grid-number").remove();
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var x=document.createElement("div"),y=document.getElementById("grid");
			x.id=i+"-"+j;
			x.className="grid-number";
			y.appendChild(x);
			if(!board[i][j]){
				x.style.width=0;
				x.style.height=0;
				x.style.left=getleft(j)+50+"px";
				x.style.top=gettop(i)+50+"px";
			}else{
				x.style.backgroundColor=getcolor(board[i][j]);
				x.style.left=getleft(j)+"px";
				x.style.top=gettop(i)+"px";
				x.innerHTML=board[i][j];
				if(board[i][j]>100){
					x.style.fontSize=40+"px";
				}
			}
		}
	}
	document.getElementById("score").innerHTML=score;
}

function random(){
	var cnt=0,i,j,x,y;
	for(i=0;i<4;i++){
		for(j=0;j<4;j++){
			if(board[i][j]==0){
				cnt++;
			}
		}
	}
	var p=Math.floor(cnt*Math.random());
	cnt=0;
	for(i=0;i<4;i++){
		for(j=0;j<4;j++){
			if(board[i][j]==0){
				if(cnt==p){
					x=i;
					y=j;
					break;
				}
				cnt++;
			}
		}
	}
	board[x][y]=Math.random()<0.5 ? 2 : 4;
	animation1(x,y,board[x][y]);
}

function isgameover(){
	if(!canmoveleft(board)&&!canmoveright(board)&&!canmoveup(board)&&!canmovedown(board)){
		alert("Game Over");
	}
}

$(document).keydown(function(event){
	switch(event.keyCode){
		case 37: 
		if(moveleft()){
			setTimeout("random()",210);
			setTimeout("isgameover()",300);
		}
		break;
		case 38: 
		if(moveup()){
			setTimeout("random()",210);
			setTimeout("isgameover()",300);
		}
		break;
		case 39: 
		if(moveright()){
			setTimeout("random()",210);
			setTimeout("isgameover()",300);
		}
		break;
		case 40: 
		if(movedown()){
			setTimeout("random()",210);
			setTimeout("isgameover()",300);
		}
		break;
		default: break;
	}
});

function g(i,j,toi,toj,value){
	board[toi][toj]=value;
	board[i][j]=0;
	animation2(i,j,toi,toj);
}

function moveleft(){
	if(!canmoveleft(board)){
		return false;
	}
	var i,j;
	for(i=0;i<4;i++){
		var last,value;
		if(board[i][0]){
			last=0;
			value=board[i][0];
		}else{
			last=-1;
		}
		for(j=1;j<4;j++){
			if(board[i][j]){
				if(last<0||(last>=0&&value!=board[i][j])){
					if(last<0||board[i][last]) last++;
					value=board[i][j];
					if(last<j){
						g(i,j,i,last,value);
					}
				}else{
					if(last<j){
						value=2*board[i][j];
						g(i,j,i,last,value);
						score+=value;
						last++;
						value=board[i][last];
					}
				}
			}
		}
	}
	setTimeout("change()",200);
	return true;
}

function moveup(){
	if(!canmoveup(board)){
		return false;
	}
	var i,j;
	for(j=0;j<4;j++){
		var last,value;
		if(board[0][j]){
			last=0;
			value=board[0][j];
		}else{
			last=-1;
		}
		for(i=1;i<4;i++){
			if(board[i][j]){
				if(last<0||(last>=0&&value!=board[i][j])){
					if(last<0||board[last][j]) last++;
					value=board[i][j];
					if(last<i){
						g(i,j,last,j,value);
					}
				}else{
					if(last<i){
						value=2*board[i][j];
						g(i,j,last,j,value);
						score+=value;
						last++;
						value=board[last][j];
					}
				}
			}
		}
	}
	setTimeout("change()",200);
	return true;
}

function moveright(){
	if(!canmoveright(board)){
		return false;
	}
	var i,j;
	for(i=0;i<4;i++){
		var last,value;
		if(board[i][3]){
			last=3;
			value=board[i][3];
		}else{
			last=4;
		}
		for(j=2;j>=0;j--){
			if(board[i][j]){
				if(last>3||(last<=3&&value!=board[i][j])){
					if(last>3||board[i][last]) last--;
					value=board[i][j];
					if(last>j){
						g(i,j,i,last,value);
					}
				}else{
					if(last>j){
						value=2*board[i][j];
						g(i,j,i,last,value);
						score+=value;
						last--;
						value=board[i][last];
					}
				}
			}
		}
	}
	setTimeout("change()",200);
	return true;
}

function movedown(){
	if(!canmovedown(board)){
		return false;
	}
	var i,j;
	for(j=0;j<4;j++){
		var last,value;
		if(board[3][j]){
			last=3;
			value=board[3][j];
		}else{
			last=4;
		}
		for(i=2;i>=0;i--){
			if(board[i][j]){
				if(last>3||(last<=3&&value!=board[i][j])){
					if(last>3||board[last][j]) last--;
					value=board[i][j];
					if(last>i){
						g(i,j,last,j,value);
					}
				}else{
					if(last>i){
						value=2*board[i][j];
						g(i,j,last,j,value);
						score+=value;
						last--;
						value=board[last][j];
					}
				}
			}
		}
	}
	setTimeout("change()",200);
	return true;
}
