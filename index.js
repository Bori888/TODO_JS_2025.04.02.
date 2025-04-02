import Todo from "./Todo.js";
import Todos from "./Todos.js";



/*Létrehozni Szülöelemeket
pédányositani a Todos osztályt */
const pElem = document.querySelector(".todos")
const iPElem = document.querySelector(".todoinput")

new Todo("valami",pElem,0)
new Todo("valami2",pElem,1)