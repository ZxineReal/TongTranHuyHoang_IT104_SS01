const a = 5;
const arr = [1, 2, 3];

a = 1;
arr.push(4);

console.log(a);
console.log(arr);

// a = 1 lỗi vì const không thể gán lại giá trị
// arr không lỗi vì không thay đổi mảng, chỉ thay đổi phần tử bên trong mảng