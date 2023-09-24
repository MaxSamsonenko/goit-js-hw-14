const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];
const list = document.querySelector("#ingredients");

ingredients.forEach((item) => {
	const liElem = document.createElement("li");
	liElem.innerText = item;
	liElem.classList = "item";
	list.append(liElem);
});
