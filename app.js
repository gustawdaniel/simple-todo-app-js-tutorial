document.addEventListener('DOMContentLoaded',function () {

    const dbUrl = 'http://localhost:3000/todo';
    let form = document.querySelector('form.todo');
    let list = document.querySelector('ul');

    function getAllTodos() {
        return new Promise(resolve => {
            fetch(new Request(dbUrl))
                .then(res => { return res.json(); })
                .then(data => { resolve(data); });
        });
    }

    function saveTodo(text) {
        let req = new Request(dbUrl,{ method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({text: text})
        });

        fetch(req).then(function(res) {
            console.log(res);
        });
    }

    function appendTextToList(text) {
        list.innerHTML += `<li>${text}<span>x</span></li>`;
    }

    getAllTodos().then(function (todos) {
        todos.forEach(function (todo) {
            appendTextToList(todo.text);
        });
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        saveTodo(form.task.value);
        appendTextToList(form.task.value);
        form.reset();
    });

});