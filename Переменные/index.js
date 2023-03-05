/* Работа с переменными
важность: 2
Объявите две переменные: admin и name.
Запишите строку "Джон" в переменную name.
Скопируйте значение из переменной name в admin.
Выведите на экран значение admin, используя функцию alert (должна показать «Джон»). */

let admin, name;
name = 'Джон';
admin = name;
// alert(admin);
console.log(admin);

/* Придумайте правильные имена
важность: 3
Создайте переменную для названия нашей планеты. Как бы вы её назвали?
Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную? */

let ourPlanetName, currentUserName;

/* Какие буквы (заглавные или строчные) использовать для имён констант?
важность: 4
Рассмотрим следующий код:

* const birthday = '18.04.1982';

* const age = someCode(birthday);

У нас есть константа birthday, а также age, которая вычисляется при помощи некоторого кода, используя значение из birthday (в данном случае детали не имеют значения, поэтому код не рассматривается).

Можно ли использовать заглавные буквы для имени birthday? А для age? Или одновременно для обеих переменных?

const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?

const AGE = someCode(BIRTHDAY); // а здесь? */

const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);
