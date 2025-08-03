// Khai bao lop student

class Student {
    constructor (id, name, age, score){
        this.id = id;
        this.name = name;
        this.age = age;
        this.score = score
    }
}

// Khoi tao 5 doi tuong Student

const student1 = new Student (1, "Nguyen Van A", 20, [7,8,9]);
const student2 = new Student (2, "Nguyen Van B", 20, [8,6,7]);
const student3 = new Student (3, "Nguyen Van C", 20, [5,8,6]);
const student4 = new Student (4, "Nguyen Van D", 20, [2,1,3]);
const student5 = new Student (5, "Nguyen Van E", 20, [6,6,6]);

// Tao mang gom 5 sinh vien vua khoi tao

const studentList = [student1,student2,student3,student4,student5];

// Ham tim kiem sinh vien theo id
const getStudentByID = (studentList, id) => {
    const findStudent = studentList.find((student) => student.id === id);
    return findStudent;
}

const result = getStudentByID(studentList, 1);
if(!result) {
    console.log("Khong tim thay sinh vien!");
} else {
    console.log("Tim thay sinh vien: ", result);
}