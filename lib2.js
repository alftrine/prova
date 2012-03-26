

//accetta un array con 2 elementi: il primo è una funzione, 
//il secondo è un argomento da passare alla stessa funzione
function apply(array){
	return array[0](array[1]);
}

//prende come argomento una funzione e la applica ad un array
function aa(fun){
	return function (array){
		return array.map(fun);
	}
}

//prende come argomento un array di 2 funzioni e ritorna una funzione composta
function comp2(array){
	return function (x){
		return array[0](array[1](x));
	}
}

//prende come argomento un array di n funzioni e ritorna una funzione composta
function comp(array){
	return array.reduce( 
		function (funA, funB) { 
				return (function (val) { return funA(funB(val)); });
				}   
	);
}

//prende come argomento un array di n funzioni e ritorna una funzione che restituisce
//array con i risultati delle funzioni applicate ad un valore x
function cons(array){
	return function (x){
		var res = [];
			for(var i=0;i<array.length;i++){
				res.push(array[i](x));
			}
		return res;
	}
}



//prende come argomento un array di n funzioni e ritorna un 
//array  di array con i risultati della distribuzione
function distl(array){	
		var res = [];
			for(var i=0;i<array.length;i++){
				var coppia = [];
				coppia.push(array[0],array[1][i]);
				res.push(coppia);
			}
		return res;	
}


//prende come argomento un array di array (matrice) e ritorna la trasposizione (matrice trasposta)
function trans(matrix){	
		var result = [];

		matrix.forEach(function(row,i) {
			row.forEach(function(value, j) {
				(result[j] = result[j] || [])[i] = value;
			})
		});

	return result;
}
