const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

add(2, 3);
subtract(9, 3);

const combine2and3 = func =>
    func(2, 3);

combine2and3(add);
combine2and3(subtract);

combine2and3(Math.max);


combine2and3((x, y) => x + y);

