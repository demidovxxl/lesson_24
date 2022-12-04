"use strict"

// !Задача №1
const documentWidth = document.documentElement.clientWidth;
const entireWidth = window.innerWidth;
console.log(`Ширина полосы прокрутки: ${entireWidth - documentWidth}px`);
// Ширина полосы прокрутки - 17px

// !Задача №2
function scrollUp() {
	window.scrollBy({
		top: -100,
		behavior: "smooth"
	});
}
setTimeout(scrollUp, 1000);

// !Задача №3

const itemOne = document.querySelector('.like');
const itemOneXY = itemOne.getBoundingClientRect();
console.log(itemOne);
console.log(itemOneXY);

const itemTwo = document.querySelector('.page__text');
console.log(itemTwo.offsetParent);
console.log(itemTwo.offsetTop);
console.log(itemTwo.offsetLeft);

const itemThree = document.querySelector('[data-say-hi]');
const itemThreeXY = itemThree.getBoundingClientRect();
console.log(itemThree);
console.log(itemThreeXY);
