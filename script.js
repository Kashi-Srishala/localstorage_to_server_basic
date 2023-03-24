var form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone_no = document.getElementById('phone_no').value;

    axios.post('https://crudcrud.com/api/f68e283fd33f4434827d077bd7a73352/users', {
        name: name,
        email: email,
        phone_no: phone_no
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
});

var deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', function(event) {
    // Implement code to delete data from CRUD API here
});

var editBtn = document.getElementById('edit');
editBtn.addEventListener('click', function(event) {
    // Implement code to edit data from CRUD API here
});