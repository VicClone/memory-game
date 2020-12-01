# memory-game
<h1>Пара 4 - Игра «Мемори»</h1>

**Задача:** написать игру «мемори»

**Требования:**
- Игра мемори должна играться на минимум 20 карточках. Которые рандомно помещаются на поле. 
- Клик по карте переворачивает ее
- Если на поле открыты две карты, то надо проверить, являются ли они одинаковыми. Если карты не совпали, то нужно перевернуть их обратно. Если совпали, то убрать со стола или оставить открытыми. 
- Нужно вести счет, который должен увеличиваться от совпадения пары и уменьшаться от несовпадения. Также счет должен учитывать скорость игры: если игрок пару выбрал долго, то баллов получает меньше. 
- * Лидерборд: должна быть возможность ввести свое имя и увидеть свое положение в общем рейтинге
- * Динамически генерируемые карты: вместо 10 захардкоженных картинок картинки, которые генерируются каждый раз разными. Например, это могут быть какие-то паттерны градиентами и разные цвета для них, который выбираются в начале игры, или какие-то символы, которые красятся в разные цвета. В общем, так, чтобы в разных играх изображения отличались и это не было просто большой коллекцией картинок.
- * Разные уровни сложности с разным количеством карт


**Дополнения**
-Стратегия пока следующая:
- Уровень меняется после двух прохождений - следующий уровень => больше карт
- На первой игре каждого уровня фон однотонный
- На второй игре каждого уровня фон = градиент
- Уровни: 
  * 1 = 20 карт, 
  * 2 = 24, 
  * 3 = 30, 
  * 4 = 36, 
  * 5 = 40, 
  * 6 = 42, 
  * 7 = 48, 
  * 8 = 56, 
  * ... - 56 // цифры взяты для ровного поля
- максимальное количество карт = 56 (пока так - возможно надо будет меньше сделать = можно глаза сломать)
