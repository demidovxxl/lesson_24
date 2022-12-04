"use strict"

// !Задача №1
function showName() {
	console.log('Вася');
}
setTimeout(showName, 0);
console.log('Коля');
// Коля -> Вася.
/* Метод setTimeout в любом случае (даже, если 0),
	имеет некую задержку и выполняется не мгновенно. */

// !Задача №2
showMessage();
function showMessage() {
	console.log('Сообщение');
}
// Верно.
/* Функцию можно вызывать, до её объявления */

// !Задача №3
showMessageTwo();
let showMessageTwo = function () {
	console.log('Message two');
}
// Ошибка.
/* Мы вызываем функциональное выражение, до его объявления. */

// !Задача №4
let showMessage3;
if (2 > 1) {
	showMessage3 = function () {
		console.log('Тест');
	}
}
showMessage3();
/* Объявляем переменную, при условии, 
	задаем ей функциональное выражение. */