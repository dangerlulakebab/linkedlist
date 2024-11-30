import LinkedList from './linkedList.js'

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
// console.log(list.size());
// console.log(list.getHead());
// console.log(list.getTail());
// console.log(list.at(2))
// list.pop()
// console.log(list.toString());
// console.log(list.contains("sssss"))
// console.log(list.find("parrot"))
// list.insertAt("god", 0)
list.removeAt(0)
console.log(list.toString());