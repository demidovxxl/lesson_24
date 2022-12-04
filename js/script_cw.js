// Строгий режим 
"use strict"

// ===========================================  Массивы
/*
let someArray = [10, 20, 5];
console.log(typeof someArray);
console.log(someArray);
console.log(someArray.length);
*/

/*
let usersNames = ["Вася", "Игнат", "Петя"];
console.log(usersNames);
*/

/*
let usersNames = ["Вася", "Игнат", "Петя"];
console.log(usersNames);
console.log(usersNames[0]);

for (let i = 0; i < usersNames.length; ++i) {
	console.log(usersNames[i]);
}
*/

// Метод перебора массива
/*
usersNames.forEach((userName, index) => {
	console.log(userName);
	console.log(index);
});
*/

// Добавления элементов в массив
// push - добавляет элемент в конец массива
/*
let usersNames = ["Вася", "Игнат", "Петя"];
console.log(usersNames);
usersNames.push("Славон");
console.log(usersNames);
*/

// поиск в массиве
/*
let usersNames = ["Вася", "Игнат", "Петя"];
console.log(usersNames.includes('Вася'));
*/

// Есть ли в массиве 10? Если нет, то добавляем и работаем
/*
if (!usersNames.includes(10)) {
	usersNames.push(10);
	console.log(usersNames);
}
*/

// Проверка на массив. Array.isArray(тут переменная);
/*
let usersNames = ["Вася", "Игнат", "Петя"];
console.log(Array.isArray(usersNames));
*/

// Сортировка чисел.
/*
let arrTwo = [8, 22, 1];
console.log(arrTwo.sort());

function compareNumeric(a, b) {
	console.log(`Сравнение ${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;
	return a - b;
}
console.log(arrTwo.sort(compareNumeric));
*/

// 3 массива в ряд
/*
let usersNames = ["Вася", "Игнат", "Петя"];
let usersNamesStr = usersNames.join(' ');
console.log(usersNamesStr);
*/




// ======================================== Функция
/*
Используется для запуска повторяющегося кода.
Основной принцип функционального программирования
*/
// Объявление функции и синтаксис

/*
function имя (параметры){
	тело функции (код функции)
}
*/

/*
Например, функции начинают с
"show..."
"get..."
"calc..."
"create..."
"check..."
*/

/*
примеры имен
showMessage
getOptions
calcSum
*/

// Объявление функции
/*
function showMessage() {
	console.log("Уведомление");
}
*/

// Вызов функции
/*
showMessage();
*/


const numOne = 10;
const numTwo = 20;

// Функция суммы a + b
/*
function calcSum(a, b) {
	showSum(a + b);
}
function showSum(sum) {
	console.log(sum);
}

calcSum(numOne, numTwo);
*/

// Возврат результата

/*
function calcSum(a, b) {
	return a + b;
}
function showSum(sum) {
	console.log(sum);
}

const calcSumResult = calcSum(numOne, numTwo);
showSum(calcSumResult);
*/

// Область видимости
// Присвоение функции переменной

/*
let someVar;
let someElseFunc;

function someFunc() {
	someVar = 10;
	// Функциональное выражение
	someElseFunc = function () {
		console.log('Some Text');
	}
}
someFunc();
someElseFunc();
console.log(someVar);
*/

// Стрелочные функции
// Функция в одну строку

/*
let showText = function (text) { console.log(text); }
let showText2 = (text) => console.log(text);
showText('Привет');

let showText3 = (text) => {
	console.log(text);
	console.log(text);
	console.log(text);
}
*/

// Можно указать значение по умолчанию.
// Если мы ничего не пераем в функцию, то отобразится по умолчанию
/*
function someFunc(text = "Славон") {
	console.log(text);
}
someFunc('Привет!');
*/


// ============================= DOM ================================
// Document Object Model

// полученная ширина окна браузера (вьюпорта)
/*
let windowWidth = window.innerWidth;
console.log(windowWidth);
*/

// полученная высота окна браузера (вьюпорта)
/*
let windowHeight = window.innerHeight;
console.log(windowHeight);
*/

// BOM
// Navigator
// Данные про браузер
/*
console.log(navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
	console.log("Браузер Хром");
} else if (navigator.userAgent.includes("Firefox")) {
	console.log("Браузер Firefox");
}
*/

// lacation
/*
console.log(location.href);
*/

// Перенаправление пользователя
/*
Location.href = "https://google.com";
*/

// Alert
/*
alert('Уведомления');
*/

// Confirm
/*
let confirmAnswer = confirm("Запрос");
console.log(confirmAnswer);
confirm("Вопрос");
*/

// Prompt
/*
let promptAnswer = prompt("Запрос");
console.log(promptAnswer);
*/

/*
// К тегу html
const htmlElement = document.documentElement;
// К тегу head
const headElement = document.head;
// К тегу body
const bodyElement = document.body;
console.log(bodyElement);
*/

// Первый и последний дочерний элемент
/*
const bodyElement = document.body;

const firstChild = bodyElement.firstChild;
const lastChild = bodyElement.lastChild;
console.log(firstChild);
console.log(lastChild);
*/

// Все дочерние элементы
/*
const bodyElement = document.body;

const childNodes = bodyElement.shildren;
console.log(childNodes);
*/

// перебор коллекции
/*
for (let i = 0; i < childNodes.length; ++i) {
	console.log(childNodes[i]);
}

for (let childNode of childNodes) {
	console.log(childNode);
}
*/

// Навигация к родительским и соседним элементам
/*
const bodyElement = document.body;
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentSibling = bodyElement.parentElementSibling;

console.log(previousSibling);
console.log(nextSibling);
console.log(parentSibling);
*/

// !Часто используется
// Поиск и получение нужного элемента
/*
const someObject = document.querySelector('.page__test');
console.log(someObject);
*/

// Получение всех объектов класса
/*
const someObject = document.querySelectorAll('.page__item');
console.log(someObject);
someObject.forEach(someObject => {
	someObject.style.color = 'red';
	console.log(someObject);
})
*/

/*
const list = document.querySelector('.page');
const listItems = page.querySelectorAll('.page__item');
*/

// Closest
// поиск родительского объекта
// Проверка наличия родительского объекта
// !Ищет не только родительский объект
// но и проверяет указанный селектор у самого объекта

/*
const list = document.querySelector('.list');
const isPageParent = list.closest('.black');

if (isPageParent) {
	console.log('Нашел')
} else {
	console.log('Ничего нет')
}
*/

// Изменение документа

const listItems = document.querySelectorAll('.list__item');

// innerHTML - получает содержимое объекта, включая теги.
// textContent - получает текст объекта.
/*
listItems.forEach(listItems => {
	console.log(listItems.innerHTML);
});

listItems.forEach((listItem, index) => {
	listItem.innerHTML = `Индекс: ${index}`;
});
*/

/*
let newObject = document.createElement('div');

newObject.innerHTML = `<span class="big">Привет!</span>`;
console.log(newObject);

const page = document.querySelector('.page');
page.before(newObject);
page.after(newObject);
page.prepend(newObject);
*/

// Вставка HTML кода
const page = document.querySelector('.page');

page.insertAdjacentHTML("beforeend", `
	<div class="block">
		<div class="block__items">
			Текст
		</div>
	</div>
`);

// Вставка элемента
const listItem = document.querySelector('.list__item');
page.insertAdjacentElement("beforeend", listItem);