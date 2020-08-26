function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const applesRes = apples.map (num=> num + a).filter (num => num >= s && num <= t)
.length;
const orangesRes = oranges.map(num=> num +b).filter(num=> num>= s&& num <=t)
.length;
console.log(applesRes);
console.log(orangesRes);
}