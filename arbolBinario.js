// T A R E A :
/*
Crear un analizador de expresiones aritméticas considerando lo siguiente
Las expresiones pueden ser con las operaciones suma, resta, multiplicación y división, no se usarán paréntesis.
Los números serán de 1 solo dígito.
El desarrollo debe incluir las siguientes tres funcionalidades
NOP 1.- Tomar la expresión y generar el árbol binario, imprimiendo la notación preorder y postorder
YA 2.- Tomar una expresión preorder y generar el resultado
YA 3.- Tomar una expresión postorder y generar el resultado
*/

class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.hizq = null;
        this.hder = null;
        this.sig = null;
        this.ant = null;
    }
}


class arbolBinario {
    constructor() {
        this.raiz = null;
        this.primero = null;
        this.sig = null;
    }

    /*
    buscar() {

    }
*/
    operacion(signo, number1, number2){
        if(signo === '/'){
            return (number1)/(number2);
        }else if(signo === '*'){
            return (number1)*(number2);
        }else if(signo === '+'){
            return (number1)+(number2);
        }
        return (number1)-(number2);
    } 

    CalcularPreorden(datos){
        let temp, res = [], expresion = [];

        for (let i = 0; i <= datos.length - 1; i++) {
            expresion[i] = !isNaN(datos[i]) ? parseInt(datos[i]) : datos[i];
        }
        while (expresion.length - 1 >= 0) {
            if (!isNaN(expresion[expresion.length - 1])) {
                res.push(expresion.pop());
            }else {
                temp = expresion.pop();
                expresion.push(this.operacion(temp, res.pop(), res.pop()))
            }
        }
        return res[0];
    }

    CalcularPostorden(datos){
        let temp, number, res = [], expresion = [];

        for (let i = 0; i <= datos.length - 1; i++){
            expresion[i] = !isNaN(datos[i]) ? parseInt(datos[i]) : datos[i];
        }
        while (expresion.length > 0) {
            if (!isNaN(expresion[0])) {
                res.push(expresion.shift());
            }else {
                temp = expresion.shift();
                number =res.pop();
                res.push(this.operacion(temp, res.pop(), number))
            }
        }
        return res[0];
    } 
    
    
}

//let num = new Nodo(4);
let arbol = new arbolBinario();
console.log(arbol.CalcularPreorden('--+*284/*296//*3422'));
console.log(arbol.CalcularPostorden('28*4+29*6/-34*2/2/-'));
/*arbol.agregar(num);

num = new Nodo(3);
arbol.agregar(num);

num = new Nodo(2);
arbol.agregar(num);

num = new Nodo(1);
arbol.agregar(num);

console.log(arbol.inOrder());
*/
//let array = Array.from(example);


