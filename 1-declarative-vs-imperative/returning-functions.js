const createPrinter = () => () => console.log("hello");
const double = x => x * 2;
const tripple = x => x * 3;
const quadruple = x => x * 4;

const createMultipler = y => x => x * y;
const double1 = createMultiplier(2);
const tripple1 = createMultiplier(3);
const quadruple1 = createMultiplier(4);

double1(3);
