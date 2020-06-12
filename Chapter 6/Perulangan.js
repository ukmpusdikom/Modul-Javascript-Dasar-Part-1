for (let i = 5; i >= 0; i--) {
  console.log(i);
}
// hasil:
// 5
// 4
// 3
// 2
// 1

//   while loop
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
// hasil:
// 0
// 1
// 2
// 3
// 4
// 5

let makul = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Svelte",
  "Node",
  "MongoDB",
  "Flutter",
  "Kotlin",
  "Ionic",
];
for (let belajar of makul) {
  console.log(belajar.toUpperCase());
}
// hasil:
// HTML
// CSS
// JAVASCRIPT
// REACT
// SVELTE
// NODE
// MONGODB
// FLUTTER
// KOTLIN
// IONIC
