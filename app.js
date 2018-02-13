var config = {
    dbPort: 3000
};

document.addEventListener('DOMContentLoaded',function () {
    console.log("ok");

    var form = document.querySelector('form.todo');
    var list = document.querySelector('ul');

    function getAllTodos() {
        return [];
    }

    function saveTodo(text) {

        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        var myInit = { method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({text: text})
        };

        var myRequest = new Request('http://localhost:3000/todo',myInit);

        fetch(myRequest).then(function(response) {
            console.log(response);
        });
    }

    function appendTextToList(text) {
        list.innerHTML += "<li>"+text+"</li>";
    }

    getAllTodos().forEach(function (text) {
        appendTextToList(text);
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        saveTodo(form.task.value);
        appendTextToList(form.task.value);
        form.reset();
    });
});