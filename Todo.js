export default class Todo {
    #pElem
    #textElem
    #OKElem
    #delteElem
    #text
    #index
    constructor(text,pElem,index) {
        this.#pElem =pElem
        this.#textElem=textElem
        this.#OKElem =OKElem
        this.#delteElem =delteElem
        this.#text= text
        this.#index =index
        
    }
    
}