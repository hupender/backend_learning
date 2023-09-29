var target_btn=document.querySelector("#work_list");
const collection=target_btn.children;

// console.log(collection.children.children.length);
// console.log(collection.length);

let text = "";
for (let i = 0; i < collection.length; i++) {
  // text += collection[i].tagName + "<br>";
  text+=collection[i].getAttribute("class");
  console.log(text);
}
// console.log(text);