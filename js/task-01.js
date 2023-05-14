// task 1.1

const list = document.querySelector("#categories");

const listElements = list.querySelectorAll(".item");

console.log(`Number of categories: ${listElements.length}`);

// task 1.2

listElements.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}\nElements: ${categoryElements}`);
});
