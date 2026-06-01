let booksList = [
    {
        id: 1,
        name: "many times many lifes 1",
        author: "Nguyen Phong",
        pub: 2020,
    },
    {
        id: 2,
        name: "many times many lifes 2",
        author: "Nguyen Phong",
        pub: 2021,
    },
    {
        id: 3,
        name: "many times many lifes 3",
        author: "Nguyen Phong",
        pub: 2023,
    }
]

while (true) {
    let userInput = prompt("Please input C/R/S/D/E to manage your phone list");
    if (userInput === "C") {
        let id = +prompt("Please input new id");
        let name = prompt("Please input new book name");
        let author = prompt("Please input new author name");
        let pub = +prompt("Please input year of publication");

        let newBook = {
            id: id,
            name: name,
            author: author,
            pub: pub,
        }
        booksList.push(newBook);
        displayBooksList();
    } else if (userInput === "R") {
        displayBooksList();
    } else if (userInput === "S") {
        let name = prompt("Please input books name that you want to search")
        let index = booksList.findIndex(function (el, i) {
            return el.name === name;
        });
        if (index === -1) {
            console.log("Not found !!!")
        } else {
            console.log("Book found: ")
            console.log("id: ", booksList[index].id);
            console.log("name: ", booksList[index].name);
            console.log("author: ", booksList[index].author);
            console.log("pub: ", booksList[index].pub);
            console.log("---------------")
        }
    } else if (userInput === "D") {
        let id = +prompt("Please input books id, that you want to delete")
        let index = booksList.findIndex(function (el, i) {
            return el.id === id;
        }); if (index === -1) {
            console.log("Not found !!!")
        } else {
            booksList.splice(index, 1);
        }
        displayBooksList();
    } else if (userInput === "E") {
        console.log("Thanks for using the app")
        break;
    } else {
        console.log("Invalid command");
    }
}

function displayBooksList() {
    console.log("Your books list:");
    for (let index in booksList) {
        console.log("id: ", booksList[index].id);
        console.log("name: ", booksList[index].name);
        console.log("author: ", booksList[index].author);
        console.log("pub: ", booksList[index].pub);
        console.log("---------------")
    }
}