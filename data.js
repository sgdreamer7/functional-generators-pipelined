const todos = [
  { 
    id : 1,
    type : "NC",
    desc : "task1",
    userId : 101,
    completed : false
  },
  { 
    id : 2,
    type : "RE",
    desc : "task2",
    userId : 102,
    completed : false
  },
  { 
    id : 3,
    type : "RE",
    desc : "task3",
    userId : 103,
    completed : false
  }
];

const shoppingList = [
  { name : "orange", units : 2, price : 10, type : "FRT"},
  { name : "lemon", units : 1, price : 15, type : "FRT"},
  { name : "fish", units : 0.5, price : 30, type : "MET"}
];

module.exports={
  todos,
  shoppingList
};