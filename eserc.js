//esercizio1


var calcola = function(array){
	
	var filterResult = array.filter(function(item, index, array){
 return (item > 0);
});

	var somma = filterResult.reduce(function(prev, cur){
 return prev + cur;
});

	return somma;
}


//esercizio2

var Point = function(x,y){
	this.x=x;
	this.y=y;
}
Point.prototype.trasla = function(dx,dy) {
	this.x += dx;
	this.y += dy;
	return this;
};


//esercizio3
var random = Math.random;

var randomp = function randomPoint(){
	x =(random*200)-100;
	y =(random*200)-100;

	return new Point(x,y);
}


//esercizio4
function riempi(i){
	var array = [];
 for (var a =0; a<n;a++){
	array.push(randomPoint());}
	return array;
}

//data la bisettrice y-x=0 filtrare i punti che giacciono nel semipiano positivo
function filtraPuntiPos(arrayPunti){
	
	var filterResult = arrayPunti.filter(function(item, index, array){
 return (item.y>item.x);
});
	return filterResult;

}
