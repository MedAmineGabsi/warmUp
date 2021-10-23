// 1-Create a third variable called z, assign x + y to it, and display it.
x = 3;
y = 8;
z = x + y;
console.log(z);
// 2-calculate the area of a square using variables.
length = 3;
area = length * length;
console.log(area);
// 3-using + operator combine your partner first and last name .
firstName = "Ben Tamarout";
lastName = "Mehdi";
fullName = firstName + " " + lastName;
console.log(fullName);
// 4-find if the number 13 is a multiple of 3 or not.
if (13 % 3 === 0) {
  console.log("Yes, it is a multiple");
} else {
  console.log("No, it isn't a multiple");
}
// 5-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function averageList(list) {
    total = 0;
    for (let i = 0; (i < list.length ); i++) {
      const age = list[i];
      total += age;
    }
    average = total / list.length;
    return average;
  }
  averageList([13, 14, 13, 15, 16, 17, 19, 13, 16, 15]);
// 6-calculate your age in seconds.
function ageInSeconds(age) {
  ageSeconds = age * 365 * 24 * 3600;
  return ageSeconds;
}
ageInSeconds(15);
// 7-calculate the area of a square using varaiables.
// /Area of square is length * Width
length = 3;
width = 3;
area = length * width;
console.log(area);