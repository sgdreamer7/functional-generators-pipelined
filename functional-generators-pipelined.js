import { sequenceInfinite, sequence, filter, map, toList, reduce, take } from "./sequence";
import { todos, shoppingList } from "./data";

function isPriorityTodo(task) {
  return task.type === "RE" && !task.completed;
}

function toTodoView(task) {
  return Object.freeze({ id: task.id, desc: task.desc });
}

function addPrice(totalPrice, line){
  return totalPrice + (line.units * line.price);
}

function areFruits(line){
  return line.type === "FRT";
}

function isEven(n) {
  return n % 2 === 0;
}

function fibonacciSequence() {
  let a = 0;
  let b = 1;
  return function() {
    const aResult = a;
    a = b;
    b = aResult + b;
    return aResult;
  };
}

const filteredTodos =
  sequence(todos) 
  |> filter(isPriorityTodo) 
  |> map(toTodoView) 
  |> toList;

console.log({filteredTodos});


const fruitsPrice = sequence(shoppingList) 
  |> filter(areFruits) 
  |> reduce(addPrice, 0);

console.log({fruitsPrice});

const first3EvenNumbers = sequenceInfinite()  
  |> filter(isEven) 
  |> take(3) 
  |> toList;

console.log({first3EvenNumbers});

const firstNumbers = fibonacciSequence()  
  |> take(10) 
  |> toList;

console.log({firstNumbers});