let users = []; //вот как сделал студент
let allFilms = [];
const url = `https://api-f22.herokuapp.com/`;

// function postUser() {
//     axios.post(url + "users/", {
//         name: "kostya",
//     });
// }
// postUser();

function getAllUsers() {
    return axios.get(url + "users");
}
getAllUsers().then((res) => {
    users.push(...res.data);
    document.body.innerHTML = JSON.stringify(users);
});
console.log(users);

// function getUserById() {
//     return axios.get(url + "users/" + 3);
// }
// getUserById().then((res) => {
//     console.log(res.data);
// });

// function patchUser() {
//     axios.patch({
//         name: "John",
//         id: 1,
//     });
// }
// patchUser();

// function addFilm() {
//     axios.post(url + "users/" + "addFilm", {
//         userId: 2,
//         filmId: 1,
//     });
// }
// addFilm();

// function createFilm() {
//     axios.post(url + "films", {
//         title: "Rocky",
//         author: "S.Stallone",
//     });
// }
// createFilm();

function delUsers() {
    axios.delete(url + "users/:userId" + { id: 32 });
}
delUsers();

// function getAllFilms() {
//     return axios.get(url + "films");
// }
// getAllFilms().then((res) => {
//     allFilms.push(...res.data);
// });
// console.log(allFilms);

// function getFilmById() {
//     return axios.get(url + "films/" + 3);
// }
// getFilmById().then((res) => {
//     console.log(res.data);
// });
