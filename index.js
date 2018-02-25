const inf = require('./package.json');

console.log(`Package: ${inf.name}(${inf.version})`);

let operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}

let stack = [];
let l_num, r_num;

function pol(input) {
    input = input.split(' ');

    for(let i in input){
        let char = input[i];
        
        if(!isNaN(char)){
            stack.push(Number(char));
        }
        else if(char in operators){
            r_num = stack.pop();
            l_num = stack.pop();
            if(isUndefined(l_num, r_num)) { 
                return new Error('Wrong expression') 
            }

            stack.push(operators[char](l_num, r_num));
        }
        else { return new Error('Wrong expression') }
    }

    return stack.pop();
}

function isUndefined(...args) {
    for(let i in args){
        if(typeof args[i] === 'undefined') return true;
    }
    return false;
}

module.exports = pol;