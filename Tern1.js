let a = Math.floor(Math.random() * 100);

//Проверочка----------
const check = (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);
console.log(check)
//-------------

let result;
if (a > 10) { result = a } else { result = a * 2 }

if (result > 5) { result = (2 * a) + 1 } 
else {
    if (a < 3) { result = 1 } 
    else { result = 2 * (a - 2) }

    switch(result > 4) {
        case true:
            result = 5;
            break;
        default:
            switch(a % 2 == 0) {
                case true:
                    result = 6;
                    break;
                default:
                    result = 7;
            }
    }
}

console.log(result)