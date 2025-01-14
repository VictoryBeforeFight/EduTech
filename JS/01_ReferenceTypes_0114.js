// 배열 (Array)
// - 0개 이상의 값을 순차적으로 저장하며 값의 추가와 제거가 자유로운 자료형이다.
// - 내부에 저장된 값을 원소(요소)라고 부른다.
// - 자료형 구분없이 값을 저장할 수 있다.
let fruits = ['사과', '바나나', '딸기'];
console.log(fruits); // [ '사과', '바나나', '딸기' ]

let numbers = [1, 2, '3'];
console.log(numbers); // [ 1, 2, '3' ]
console.log(fruits[40]) // undefined

for (let i = 0; i < 5; i++) {
    console.log(i);
}
let a = [1, 2, 3]
for (let j of a) {
    console.log(j, typeof j)
}

let b = [17, 45, 23]
for(let i = 0; i<a.length; i++){
    console.log(i)
}
