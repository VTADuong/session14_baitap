let studentsList = [
    {
        name: "Alex",
        age: 18,
        id: 1,
    },
    {
        name: "John",
        age: 19,
        id: 2,
    },
    {
        name: "Clover",
        age: 18,
        id: 3,
    },
]
while (true) {
    let userInput = prompt("Please input C(createNew)/R(readAll)/D(deleteIndex)/E(exit) to manage your students list");
    if (userInput === "C") {
        let name = prompt("Please input students's name");
        let age = +prompt("Please input students's age");
        let id = +prompt("Please input students's id");

        let newStudent = {
            name: name,
            age: age,
            id: id,
        }
        studentsList.push(newStudent);
        displayStudentsList();
    } else if (userInput === "R") {
        displayStudentsList();
    } else if (userInput === "D") {
        let delId = +prompt("Please input students's id you want to delete");
        let index = studentsList.findIndex(function (el, i) {
            return el.id === delId;
        }); if (index === -1) {
            console.log("Not found");
        } else {
            studentsList.splice(index, 1)
            //xóa 1 hs tại index mới tìm
        }
        displayStudentsList();
    } else if (userInput === "E") {
        console.log("Thanks for using the app")
        break;
    } else {
        console.log("Invalid command");
    }
}

function displayStudentsList() {
    console.log("Students List: ");
    for (let index in studentsList) {
        console.log("name: ", studentsList[index].name);
        console.log("age: ", studentsList[index].age);
        console.log("id: ", studentsList[index].id);
        console.log("---------------")
    }
}