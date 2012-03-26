// FILE CHE RACCOGLIE LE STRUTTURE GRAFICHE JAVASCRIPT UTILI AL CORSO



//COSTRUTORI OGGETTI PUNTO, LINEA, TRIANGOLO, QUADRATO. METODI, PROTOTYPE E FUNZIONI ACCESORIE


//costruttore punto
var Point = function(x,y){
	this.x=x;
	this.y=y;
}

//metodo che trasla un punto
Point.prototype.trasla = function(dx,dy) {
	this.x += dx;
	this.y += dy;
	return this;
};

//funzione che ritorna un punto random compreso tra -100 e +100
function randomPoint(){
	x =(Math.random()*200)-100;
	y =(Math.random()*200)-100;

	return new Point(x,y);
}

//funzione che ritorna un array con n punti random
function riempi(n){
	var array = [];
 for (var a =0; a<n;a++){
	array.push(randomPoint());}
	return array;
}

// costruttore linee 1 (coefficienti equazione implicita retta)
var Line = function(a,b,c){
	this.a=a;
	this.b=b;
	this.c=c;
}


// costruttore linee 2 (a partire da due punti assegnati)
var Line = function (p1,p2){
	this.a = p1.y-p2.y;
	this.b = p2.x-p1.x;
	this.c = (p1.y*(p1.x-p2.x)) + (p2.x*(p2.y-p1.y));
}


//data una funzione generica (di una retta) filtra i punti a seconda del semipiano di appartenenza
Point.prototype.membership = function(Line) {
	
	if(this.y*Line.b+this.x*Line.a+Line.c>0) return 1;
	if(this.y*Line.b+this.x*Line.a+Line.c<0) return -1;
	if(this.y*Line.b+this.x*Line.a+Line.c==0) return 0;

};


//metodo che riorna la distanza tra il punto istanziato e una linea
Point.prototype.distPointLine = function(Line) {
	var dist = (Math.abs(Line.a*this.x+Line.b+this.y+Line.c)) / (Math.sqrt(Math.pow(Line.a,2)+Math.pow(Line.b,2)));
	return dist;
};

//metodo che riorna la distanza tra il punto istanziato e una istnza di linea o di punto
Point.prototype.getDistance = function(x) {
	if (x instanceof Point){
		return this.getDistance(x);
	}
	if (x instanceof Line){
		return this.distPointLine(x);
	}
	throw new Error("x nn è niente di ciò");

	try{p.getDistance();} catch(e){}

};


//metodo che riorna la distanza, positiva o negativa, tra il punto istanziato e una linea,
//a seconda che il punto sia sopra o sotto la linea
Point.prototype.distAndPosPointLine = function(Line) {
	var dist = (Line.a*this.x+Line.b+this.y+Line.c)/ (Math.sqrt(Math.pow(Line.a,2)+Math.pow(Line.b,2)));
	return dist;
};



//costruttore di triangolo
var Triangle = function(p1,p2,p3){
	this.points =[p1,p2,p3];
}


//stabilisco se il triangolo è sopra la linea
Triangle.prototype.above = function(Line) {
	/*return (this.p1.getDistance(Line))>0) &&
			(this.p2.getDistance(Line))>0) &&
			(this.p3.getDistance(Line))>0);         se il triangolo fosse costruito in altro modo*/
	return this.points.every(function(item){ return ((item.distAndPosPointLine(Line)) > 0); });		

};


//stabilisco se il triangolo è sotto la linea
Triangle.prototype.below = function(Line) {
	return this.points.every(function(item){ return ((item.distAndPosPointLine(Line)) < 0); });
};

//stabilisco se il triangolo interseca la linea
Triangle.prototype.intersect = function(Line) {
	return (!this.above(Line) && !this.below(Line));
};



//costruttore di qudrati
var Quad = function(p1,p2,p3,p4){
	this.points =[p1,p2,p3,p4];
}


//metodi della stessa natura di quelli del triangolo
Quad.prototype.above = Triangle.prototype.above;

Quad.prototype.below = Triangle.prototype.below;

Quad.prototype.intersect = Triangle.prototype.intersect;
