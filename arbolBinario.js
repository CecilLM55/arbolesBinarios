// T A R E A :
/*
Crear un analizador de expresiones aritméticas considerando lo siguiente
Las expresiones pueden ser con las operaciones suma, resta, multiplicación y división, no se usarán paréntesis.
Los números serán de 1 solo dígito.
El desarrollo debe incluir las siguientes tres funcionalidades
1.- Tomar la expresión y generar el árbol binario, imprimiendo la notación preorder y postorder
2.- Tomar una expresión preorder y generar el resultado
3.-
Tomar una expresión postorder y generar el resultado
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
        this.primero = null;
        this.sig = null;
    }


}