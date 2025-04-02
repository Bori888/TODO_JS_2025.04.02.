export default class TodoInput{
    
    constructor(inputElem){
        this.pElem =pElem
        this.inputElem=inputElem
        this.buttonElem= buttonElem

        this.addElem =addElem
        this.add()
    }
    add(){
        this.addElem.addEventListener("click", () => {
            console.log("add");
            const a = new CustomEvent("add", { detail: this.pElem });
            window.dispatchEvent(a);
          });

    }
}