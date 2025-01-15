// babyMovies를 출력 할건데 
// babyMovies는 movies에 filter를 걸어서 볼건데
// aaa.isAdult가 true 인것만이다.
// 그래서 출력은 { title: 'B', isAdult: true }
const movies = [
    {title : "A", isAdult : false},
    {title : "B", isAdult : true},
    {title : "C", isAdult : false},
]

let babyMovies = movies.filter(function (aaa){
    return aaa.isAdult
})

console.log(babyMovies)

// reduce

let baby = movies.reduce(function (acc, movie){
    if (!movie.isAdult) {acc.push(movie.title)}
    return acc
},[]) // -> ,[]이 두번째 인자값(초기값)을 지정하지 않을 경우 배열의 첫번째 값이 들어간다.
console.log(baby)


const numbers = [1, 2, 3, 4];