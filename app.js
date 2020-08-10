// if (typeof (Storage) !== "undefined") {
//     // Code for localStorage/sessionStorage.
//     
// } else {
//     // Sorry! No Web Storage support..
// }

if (sessionStorage.getItem('dataStored') != "admin") {

    window.location.replace("http://127.0.0.1:5500/");
}

console.log(sessionStorage.getItem('dataStored'));
const cafelist = document.querySelector('#cafe-list');
const userslist = document.querySelector('#user-list');
const carslist = document.querySelector('#car-list');
const translist = document.querySelector('#trans-list');
const transSum = document.querySelector("#trans-sum");
const transTotal = document.querySelector("#trans-total");
const usersTotal = document.querySelector("#users-total");
const carsTotal = document.querySelector("#cars-total");





//render cafe
function renderCafe(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().noplate;
    email.textContent = doc.data().status;

    li.appendChild(name);
    li.appendChild(email);

    cafelist.appendChild(li);

}

function renderUsers(doc) {
    // var showList = document.getElementById('showList');
    // var html = '<table class="darkTable"><thead><tr>';

    // html += '<th>List of Available Shows</th>';
    // /* add further columns into here, alike the one above. */

    // html += '</tr></thead><tbody>';

    // html += '<tr>';

    // html += '<td>' + doc.data().name + '</td>';
    // /* add further columns into here, alike the one above. */

    // html += '</tr>';

    // html += '</tbody></table>';
    // userslist.append(html);

    let li = document.createElement('tr');
    let name = document.createElement('td');
    let email = document.createElement('td');
    let contact = document.createElement('td');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    email.textContent = doc.data().email;
    contact.textContent = doc.data().contact;
    userslist.append(li);
    li.append(name);
    li.append(email);

    li.append(contact);

    //userslist.append(li);

}

function renderCars(doc) {
    // var showList = document.getElementById('showList');
    // var html = '<table class="darkTable"><thead><tr>';

    // html += '<th>List of Available Shows</th>';
    // /* add further columns into here, alike the one above. */

    // html += '</tr></thead><tbody>';

    // html += '<tr>';

    // html += '<td>' + doc.data().name + '</td>';
    // /* add further columns into here, alike the one above. */

    // html += '</tr>';

    // html += '</tbody></table>';
    // userslist.append(html);

    let li = document.createElement('tr');
    let name = document.createElement('td');
    let email = document.createElement('td');
    let release = document.createElement('button');
    let block = document.createElement('button');

    li.setAttribute('data-id', doc.id);
    release.setAttribute('class', "btn btn-sm btn-warning");
    block.setAttribute('class', "btn btn-sm btn-danger");
    release.innerHTML = "Release";
    block.innerHTML = "Block";
    name.textContent = doc.data().noplate;
    email.textContent = doc.data().status;
    carslist.append(li);
    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(release);
    li.appendChild(block);


    release.addEventListener('click', (e) => {

        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        //console.log(id);
        releaseCar(id).then(function () { location.reload() });
        //window.location.replace("http://127.0.0.1:5500/cars.html");
    })
    async function releaseCar(id) {
        await db.collection('cars').doc(id).update({
            status: 'Paid'
        });
        // "done!"
    }


    block.addEventListener('click', (e) => {

        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        //console.log(id);
        blockCar(id).then(function () { location.reload() });
        //location.reload();
        //window.location.replace("http://127.0.0.1:5500/cars.html");
    })

    async function blockCar(id) {
        await db.collection('cars').doc(id).update({
            status: 'Block'
        });
        // "done!"
    }

    //userslist.append(li);

}

// function unixTime(unixtime) {

//     var u = new Date(unixtime * 1000);

//     return u.getUTCFullYear() +
//         '-' + ('0' + u.getUTCMonth()).slice(-2) +
//         '-' + ('0' + u.getUTCDate()).slice(-2) +
//         ' ' + ('0' + u.getUTCHours()).slice(-2) +
//         ':' + ('0' + u.getUTCMinutes()).slice(-2) +
//         ':' + ('0' + u.getUTCSeconds()).slice(-2) +
//         '.' + (u.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5)
// };

// console.log(unixTime(1370001284))

function renderTransactions(doc) {


    let li = document.createElement('tr');
    let noplate = document.createElement('td');
    let userid = document.createElement('td');
    let date = document.createElement('td');
    let release = document.createElement('button');


    li.setAttribute('data-id', doc.data().carID);
    release.setAttribute('class', "btn btn-sm btn-warning");
    noplate.textContent = doc.data().noplate;
    release.innerHTML = "Release";
    userid.textContent = doc.data().stripe;
    date.textContent = doc.data().time.toDate();

    translist.appendChild(li);
    li.appendChild(userid);
    li.appendChild(noplate);
    li.appendChild(date);
    li.appendChild(release);
    // li.appendChild(date);
    // li.appendChild(noplate);

    // translist.appendChild(li);

    release.addEventListener('click', (e) => {

        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        //console.log(id);
        releaseCar(id).then(function () { location.reload() });
        //window.location.replace("http://127.0.0.1:5500/cars.html");
    })
    async function releaseCar(id) {
        await db.collection('cars').doc(id).update({
            status: 'Paid'
        });
        // "done!"
    }


    //carslist.append(email);

    //userslist.append(li);

}

function renderTotalUsers(doc) {
    usersTotal.innerHTML += 'Total users : ' + doc;

}

function renderTotalTransactions(doc) {
    // let li = document.createElement('tr');

    var total = doc;
    var total_sum = total * 10;
    // let para = document.createElement('p');
    // para.innerHTML = total;
    // transSum.append(para);
    //para.appendChild(node);

    //console.log(total_sum);


    transTotal.innerHTML += 'Total sales : RM' + total_sum + '<br>';
    transSum.innerHTML += 'Total transactions : ' + total;
}

function renderTotalCars(doc) {
    carsTotal.innerHTML += 'Total cars : ' + doc;
}

var cars = db.collection('cars').get().then((snapshot) => {
    //console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        renderCars(doc);
    });
})


function getUser(uid) {
    // var docRef = db.collection("users").doc(uid);

    // docRef.get().then(function (doc) {
    //     if (doc.exists) {
    //         console.log(doc.data().name);
    //         // this.doc.data().name;
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch(function (error) {
    //     console.log("Error getting document:", error);
    // });
    db.collection("users").doc(uid)
        .onSnapshot(doc => {
            // console.log(doc.data().name);
            return doc.data().name;
        });

}

var totalUsers = db.collection('users').get().then((snapshot) => {
    // snapshot.docs.forEach(doc => {
    //     console.log(doc.data());
    //     renderUsers(doc);
    //     //renderCafe(doc);
    // });
    renderTotalUsers(snapshot.docs.length);
})

var totalTransactions = db.collection('transactions').get().then((snapshot) => {
    // snapshot.docs.forEach(doc => {
    //     console.log(doc.data());
    //     renderUsers(doc);
    //     //renderCafe(doc);
    // });
    renderTotalTransactions(snapshot.docs.length);
})

var totalVehicle = db.collection('cars').get().then((snapshot) => {
    // snapshot.docs.forEach(doc => {
    //     console.log(doc.data());
    //     renderUsers(doc);
    //     //renderCafe(doc);
    // });
    renderTotalCars(snapshot.docs.length);
})

var users = db.collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        renderUsers(doc);
        //renderCafe(doc);
    });
})

var transaction = db.collection('transactions').where("time", "<", new Date()).orderBy("time").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        renderTransactions(doc);
        //renderCafe(doc);
    });
})