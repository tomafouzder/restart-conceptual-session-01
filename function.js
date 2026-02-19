// function

// normal function
function getting() {
    console.log("Hello Word");
}
// getting();


// arrow function
const addNum = (a, b) => {
    const sum = a + b;
    // console.log(sum);
    return sum;

}
const value = addNum(5, 10)
// console.log(value)


// call back function

const missionRestart = (topics, callback) => {
    console.log("learning ...", topics);

    setTimeout(() => {
        callback();
    }, 3000);
}

const done = () => {
    console.log("Done in 3 days");
}

// missionRestart("JavaScript", done);



// array concept  : push, pop, shift, unshift

const friends = ['Sobuj', 'Sakib', 'Hafsa', 'Krishna'];

// friends.push('Biplob');
// friends.pop();
// friends.unshift('Biplob', 'Kumar' ,"jibon")
// friends.shift()
// console.log(friends);

// const data = friends.slice(0, 2);
// console.log(data);

// const data = friends.splice(2);
// console.log(data);



// map:
const arr1 = [1, 2, 3, 4];

const m1 = arr1.map((n) => n * 2);
// console.log(m1);

const m2 = arr1.filter((n) => n % 2 === 0);
// console.log(m2);

const m3 = arr1.find((n) => n % 2 === 0);
// console.log(m3);

const m4 = arr1.reduce((n, m) => n + m);
// console.log(m4);

const mergedArray = [...arr1, ...friends]
// console.log(mergedArray);    //spreed operator (...)



const student = {
    name: "Hero",
    age: 21,
    location: {
        city: 'Bandorbon',
        village: " with some Katabon",
    },
};

// for (let key in student) {
//     console.log(key);
// }


// for(let value of Object.values(student)){
//     console.log(value);
// }

for (let [key, value] of Object.entries(student)) {
    // console.log(key, value);
}


// Pro version:

// for (let [key, value] of Object.entries(student)) {
//     if (typeof value === "object" && value !== null) {
//         for (let [innerKey, innerValue] of Object.entries(value)) {
//             console.log(`${key}.${innerKey} : ${innerValue}`);
//         }
//     } else {
//         console.log(key, ':', value)
//     }
// }



// destructuring:

// const { name, location, age: lifeTime } = student
// console.log(name, location, lifeTime);


