const allUsers = [];
const url = "https://api-f22.herokuapp.com/";

// function getAllUsers() {
//     return axios.get(url + "users");
// }

// getAllUsers().then((res) => {
//     allUsers.push(...res.data);
//     document.body.innerHTML = JSON.stringify(allUsers);
// });
// function userPost() {
//     axios
//         .post(url + "/users", {
//             name: "John",
//         })
//         .then((response) => console.log(response.data))
//         .catch((error) => console.log(error));
// }
// userPost();

console.log(allUsers);
//а это метод Fetch можно и так и так  почитай разницу в нете Артур

function getAllUsers() {
    fetch(url + "users")
        .then((response) => response.json())
        .then((json) => allUsers.push(...json));
}
getAllUsers();

delete function deleteData(item, url) {
    return fetch(url + "/" + item, {
        method: "delete",
    }).then((response) => response.json());
};
function postUs() {
    fetch(url + "users", {
        method: "POST",
        body: JSON.stringify({
            name: "John",
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then((data) => data)
        .catch((error) => error);
}
// postUs();
// console.log(allUsers);
function getById(id) {
    fetch(url + "users" + "/" + id)
        .then((response) => response.json())
        .then((data) => console.log(data));
}
getById(7);
function deleteById(id) {
    fetch(url + "users" + "/" + id, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}
// deleteById();
