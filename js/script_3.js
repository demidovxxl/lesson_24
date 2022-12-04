"use strict"

// !Задача №1
const dataElement = document.querySelector('[data-say-hi]');
const dataAtribute = dataElement.getAttribute('data-say-hi');
console.log(dataAtribute);

// !Задача №2
// Получаем массив со всеми li в HTML
const arrayList = document.querySelectorAll('li');
let i;
let yonchi;
// Ищем индекс элемента с "Йончи"
arrayList.forEach((arrayList, index) => {
	if (arrayList.textContent === 'Йончи') {
		i = index;
	}
}
);
yonchi = arrayList[i];
console.log(yonchi);

// !Задача №3
const elemLike = document.querySelectorAll('.like');
console.log(elemLike);

// !Задача №4
const list = document.querySelector('ul');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);
// Отправится в сразу перед закрытием тега "ul"
// Т.е. он станет последним тегом "li" в списке.

