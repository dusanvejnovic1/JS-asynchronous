/* Assignment: Student Exam Results Processing
You manage a digital system for exam results at a school.
Create two functions using JavaScript Promises:

1. submitResult(studentName, examScore)
Adds a student's result to a global results array.
Each result is an object: { name: studentName, score: examScore }
If both studentName and examScore are provided, resolve the Promise with a message:
"Result submitted for {studentName}."
If either is missing, reject the Promise with an error message.
2. showTopScorer()
Returns a Promise.
After a 2-second delay (use setTimeout), resolves with a message showing the student with the highest score, e.g.:
"Top scorer: Alice with 98 points."
If there are no results, resolve with "No results available."
Starting Data
JavaScript
const results = [
    { name: 'Alice', score: 98 },
    { name: 'Bob', score: 85 }
];
Example Usage
JavaScript
submitResult('Charlie', 90)
  .then(() => showTopScorer())
  .then(message => console.log(message))
  .catch(error => console.log(error));
Your task:

Implement both functions as described.
Test with the example usage. */

const results = [
    { name: 'Alice', score: 98 },
    { name: 'Bob', score: 85 }
];

function submitResult(studentName, examScore) {
    return new Promise((resolve, reject) => {
        if (studentName && examScore) {
            results.push({ name: studentName, score: examScore })
            resolve(`Result submited for ${studentName}`)
        }
        else {
            reject('ERROR')
        }
    })
}

function showTopScorer() {
    return new Promise((resolve, reject) => {
        if (results) {
            results.sort(results.score)
            results.reverse(results.score)
            resolve(`Top scorer ${results[0].name} with ${results[0].score}`)
        }
        else {
            reject('No results available')
        }
    })
}

submitResult(13).then((sub) => console.log(sub)).catch((err) => console.log(err));
submitResult('Jovan', 13).then((sub) => console.log(sub)).catch((err) => console.log(err));
submitResult().then((sub) => console.log(sub)).catch((err) => console.log(err));

showTopScorer().then((res) => console.log(res)).catch((err) => console.log(err));



