"use strict"

// !Задача №1
let arr = ['Ваня', 'Іштван', 'Оля',];
let newArr = arr;
newArr.push('Петро');
console.log(arr.length);
/* Получим 4. Метод push добавит 1 элемент в конец массива */

// !Задача №2
let users = ['Ваня', 'Іштван'];
users.push('Оля');
let i;
users.forEach((users, index) => {
	if (users === 'Іштван') { i = index; }
});
users[i] = 'Петя';
let firstElement = users.splice(0, 1);
console.log(firstElement);
users.unshift('Маша', 'Паша');
console.log(users);

// !Задача №3
let array = ['Ваня', 'Іштван', 'Оля'];
let j;
array.forEach((array, index) => {
	if (array === 'Іштван') {
		j = index;
	}
});
let ishtvan = array.splice(j, 1);
console.log(array); console.log(ishtvan);

// !Задача №4
let str = 'Ваня,Иштван,Оля';
let arrayStr = str.split(',');
console.log(arrayStr);

// !Задача №5
let arrMain = [9, 2, 8];
let reduceValue = arrMain.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});
/* Ответ: 9. previousValue будет равен 0-му элементу в массиве (9), 
	при условии, что мы починим код */
