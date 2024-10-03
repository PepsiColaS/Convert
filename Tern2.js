let a = Math.floor(Math.random() * 20) + 1;

function manyChecks() {
  console.log(`a = ${a}`);
  
  return (
    a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
}

//Проверочка---------
const first = manyChecks();
console.log(first)
console.log('')
//------------

function myFunc(){
  let temp
  console.log(`a = ${a}`);

  if (a > 10) { temp = 'a is bigger than 10'}
  else{
    temp = 'a is less than or equal to 10 '

    if (a === 5){ temp += 'an example of a special case'}
    else{ temp += '' }
  }
  
  if (a === 15){ temp += 'but a is not 15' }
  else{ temp += '' }

  switch(a > 5) {
    case true:
        temp += 'and a is greater than 5';
        break;
    default:
        temp += 'and a is less than or equal to 5 ';
        break;
    }
    
    if (a % 2){ temp += ' and a is odd' }
    else{ temp += ' and a is even ' }

  return(temp)
}

const second = myFunc()
console.log(second)
