export default class Todo {
  #text; /*Ezek a privált adattagok*/
  #index;
  constructor(text, pElem, index) {
    this.#index = index;
    this.#text = text;
    this.pElem = pElem;
    this.view();
    this.textElem = document.querySelector(".text:last-child");
    this.OKElem = this.textElem.querySelector(".ready");
    console.log(this.OKElem);

    this.deleteElem = this.textElem.querySelector(".delete:last-child");
    this.OKeventListener();
    this.remEventListener();
  }
  view() {
    let html = `<p class="text">${this.#text}
      <button class="ready">pipa</button>
      <button class="delete">X</button>
    </p>`;
    this.pElem.insertAdjacentHTML("beforeend", html);
  }
  OKeventListener() {
    this.OKElem.addEventListener("click", () => {
      console.log("ok");
      this.textElem.style.color = "green";
    });
  }
  remEventListener() {
    this.deleteElem.addEventListener("click", () => {
      console.log("delete");
      const e = new CustomEvent("remove", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
}
