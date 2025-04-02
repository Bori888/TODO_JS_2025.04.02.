import {TODOLIST} from "./todoLista.js";
import Todos from "./Todos.js";

/*Létrehozni Szülöelemeket
pédányositani a Todos osztályt */
const pElem = document.querySelector(".todos")
const iPElem = document.querySelector(".todoinput")

new Todos(TODOLIST,pElem,iPElem)
