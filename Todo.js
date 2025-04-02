export default class Todo {
    
    #text/*Ezek a privált adattagok*/
    #index
    constructor(text,pElem,index) {
        this.#index =index
        this.#text= text
        this.pElem =pElem
        this.view()
        this.textElem=document.querySelector(".text:last-child")
        this.OKElem =document.querySelector(".ready")
        console.log(this.OKElem);
        
        this.delteElem =this.textElem.querySelector(".delte:last-child")
        this.OKeventListener()
        this.remEventListener()
    }
    view(){
        let html =`<p class="text">${this.#text}
      <button class="ready">pipa</button>
      <button class="delte">X</button>
    </p>`
    this.pElem.insertAdjacentHTML("beforeend",html);
    }
    OKeventListener(){
        this.OKElem.addEventListener("click",()=>{
            console.log("ok");
            this.textElem.style.color ="green"
            
        })
    }
    remEventListener(){
        this.delteElem.addEventListener("click",()=>{
            console.log("delte");
            const e = new CustomEvent("remove", {detail: this.#index})
            window.dispatchEvent(e)
            
            
        })
    }

}