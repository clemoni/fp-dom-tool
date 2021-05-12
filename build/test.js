console.log("hello");

const el = _getElement(".")("container");
console.log(el);

const title = _createElement("div")(["id", "test"], ["class", "other element"]);
// title.style.color = "red";
// title.style.fontSize = "5rem";
_appendElement(el)(title);
console.log(title);
