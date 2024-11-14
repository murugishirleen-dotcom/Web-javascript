let marks = [];

marks.push(50);
marks.push(80);
marks.push(70);
marks.push(85);
marks.push(90);

let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
let average = sum / marks.length;
console.log(Average Marks:{average});

let highest = Math.max(...marks);
let lowest = Math.min(...marks);
console.log(Highest Marks:{highest});
console.log(Lowest Marks:{lowest});

let sortedMarks = [...marks].sort((a, b) => a - b);
console.log(Sorted Marks:{sortedMarks});

console.log(Modified Marks Array:{marks});