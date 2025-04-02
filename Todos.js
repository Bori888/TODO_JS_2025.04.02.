import Todo from "./Todo.js";

export default class Todos{
    #lista =[]
    constructor(lista ,pElem,iPElem){
        this.#lista =lista
        this.pElem =pElem
        this.iPElem =iPElem
        this.viewTodos()

    }
    viewTodos(){
        for (let index = 0; index < this.#lista.length; index++) {
            const element = this.#lista[index];
            new Todo(element,this.pElem,index);
            
        }
    }

    
}