import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  const Button1 = document.getElementById("hello");
  const Button2 = document.getElementById("add-data");
  const Button3 = document.getElementById("add-data2");

  // Assingment 2 and 3
  Button1.addEventListener("click", function () {
    console.log("hello world");
    document.getElementById("header1").innerHTML = "My notebook";
  });

  // Assingment 4
  Button2.addEventListener("click", function () {
    const list1 = document.getElementById("list1");
    let li = document.createElement("li");
    li.innerText = "arbitrary text";
    list1.appendChild(li);
  });

  // Assingment 5
  Button3.addEventListener("click", function () {
    const list1 = document.getElementById("list1");
    let li = document.createElement("li");
    li.innerText = document.getElementById("textArea").value;
    list1.appendChild(li);
  });
}
