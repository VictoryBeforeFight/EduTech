function completeTask() {
    console.log('completeTask 함수 시작');
}

function startTask(callbackFunction) {
    console.log('startTask 함수 시작');
    callbackFunction();
    console.log('startTask 함수 종료');
}

startTask(completeTask);

// completeTask가 callbackFunction으로 들어가 같아진다
// => completeTask == callbackFunction


// # 고차 함수(Higher-Order Function)
let obj = {
    x: 3,
    greeting() {
        console.log('안녕')
    }
}
obj.greeting()

const applyOperation = (func, number) => {
    return func(number);
}

const double = x => x * 2;

console.log(applyOperation(double, 5));