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

    function saveTodo() {
        
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