import Todo from "./Todo.js";
import TodoInput from "./TudoInput.js";


export default class Todos{
    #lista =[]
    constructor(lista ,pElem,iPElem){
        this.#lista =lista
        this.pElem =pElem
        this.iPElem =iPElem
        this.viewTodos()
        this.viewInput()
        this.removeEvent()
        this.addEvent()

    }
    removeEvent(){
        window.addEventListener("remove",(event)=>{
            console.log(event.detail);
            this.viewTodos()
            
        })

    }
    addEvent(){
        window.addEventListener("add",(event)=>{
            console.log(event.detail);
            this.viewTodos()
            
        })

    }
    viewInput(){
        new TodoInput(this.iPElem)
    }

    viewTodos(){
        for (let index = 0; index < this.#lista.length; index++) {
            const element = this.#lista[index];
            new Todo(element,this.pElem,index);
            
        }
    }

    
}