class Musica {
    value: string;
    siguiente: Musica | null = null;
    anterior: Musica | null = null;

    constructor(value: string) {
        this.value = value;
    }
}

export class ListaMusica {
    head: Musica | null = null;

    agregarMusica(value: string) {
        const nuevaMusica = new Musica(value);
        if (!this.head){ 
            this.head = nuevaMusica; 
    } else {
        let temp = this.head;
        while (temp.siguiente) {
            temp = temp.siguiente;
        }
        temp.siguiente = nuevaMusica;
        nuevaMusica.anterior = temp;
        }
    }
}

class Navegacion {
    value: string;
    siguiente: Navegacion | null = null;
    anterior: Navegacion | null = null;
    
    constructor(value: string) {
        this.value = value;
    }
}

export class ListaNavegacion {
    head: Navegacion | null = null;

    agregarNavegacion(url: string) {
        const nuevaNavegacion = new Navegacion(url);
        if (!this.head) {this.head = nuevaNavegacion; }
        else {
            let temp = this.head;
            while (temp.siguiente) {
                temp = temp.siguiente;
            }
            temp.siguiente = nuevaNavegacion;
            nuevaNavegacion.anterior = temp;
        }
    }
}