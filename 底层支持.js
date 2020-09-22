function getleft(j){
	return 20+120*j;
}

function gettop(i){
	return 20+120*i;
}

function getcolor(x){
	var ans;
	switch(x){
		case 2: ans="#eee4da"; break;
		case 4: ans="#ede0c8"; break;
		case 8: ans="#f2b179"; break;
		case 16: ans="#f59563"; break;
		case 32: ans="#f67c5f"; break;
		case 64: ans="#f65e3b"; break;
		case 128: ans="#edcf72"; break;
		case 256: ans="#edcc61"; break;
		case 512: ans="#9c0"; break;
		case 1024: ans="#33b5c5"; break;
		case 2048: ans="#09c"; break;
		default:ans="black";
	}
	return ans;
}

function canmoveleft(board){
	var i,j;
	for(i=0;i<4;i++){
		for(j=1;j<4;j++){
			if(board[i][j]!=0&&(board[i][j-1]==0||board[i][j-1]==board[i][j])){
				return true;
			}
		}
	}
	return false;
}

function canmoveup(board){
	var i,j;
	for(j=0;j<4;j++){
		for(i=1;i<4;i++){
			if(board[i][j]!=0&&(board[i-1][j]==0||board[i-1][j]==board[i][j])){
				return true;
			}
		}
	}
	return false;
}

function canmoveright(board){
	var i,j;
	for(i=0;i<4;i++){
		for(j=2;j>=0;j--){
			if(board[i][j]!=0&&(board[i][j+1]==0||board[i][j+1]==board[i][j])){
				return true;
			}
		}
	}
	return false;
}

function canmovedown(board){
	var i,j;
	for(j=0;j<4;j++){
		for(i=2;i>=0;i--){
			if(board[i][j]!=0&&(board[i+1][j]==0||board[i+1][j]==board[i][j])){
				return true;
			}
		}
	}
	return false;
}

