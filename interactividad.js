var fun = function (){

	 var tc = parseFloat(document.getElementById('tc').value);

	 var tl = parseFloat(document.getElementById('tl').value);

	 var ti = parseFloat(document.getElementById('ti').value);

	 var ic = parseFloat(document.getElementById('ic').value);

	 var f = parseFloat(document.getElementById('f').value);

	     for (var i = ic; i<= f; i++) {
	      var resu = (tc*(i**2) + (tl*i) + ti);
	      document.write("El valor de   <i> f(x) </i> para el número " + i + " dentro del intervalo es : " +  resu + "</br>");
	     }
     }

var hmax = function(v,a){

	 var v = parseFloat(document.getElementById('v').value);

	 var g = parseFloat(document.getElementById('g').value);

	 var res = (v**2)/(2*g);

	 var lectura2 = document.getElementById('lectura2');

	 return lectura2.innerHTML = "<mark>" + res.toFixed(3) + " m" + "</mark>" ;
}
