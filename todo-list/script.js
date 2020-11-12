const form = {}
form.taskInp = document.querySelector("#taskInp");
form.addButton = document.querySelector("#addTask");

const tasks = document.querySelector("#tasks");

function addTask() {
    let todotask = form.taskInp.value;

    var task = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = ' ';
    td1.style.fontSize = '26px';
    task.appendChild(td1);

    var td2 = document.createElement("td");
    td2.innerHTML = todotask;
    td2.style.textAlign = 'left';
    td2.style.paddingLeft = '10px';
    addListenerStrike(td2);
    task.appendChild(td2);

    var td3 = document.createElement("td");
    var dustbin = document.createElement('i');
    dustbin.classList.add('fa');
    dustbin.classList.add('fa-trash-o');
    dustbin.classList.add('fa-lg');
    addListenerDustbin(dustbin);
    td3.append(dustbin);
    task.appendChild(td3);

    tasks.appendChild(task);

    form.taskInp.value = '';
}

form.addButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (form.taskInp.value == '') {
        alert('You must enter some task!');
    } else {
        addTask();
    }
})

function addListenerDustbin(dustbin) {
    dustbin.addEventListener('click', function(e) {
        e.stopPropagation();
        deleteTask(e);
    });
}

function deleteTask(e) {
    let currTask = e.target.parentNode.parentNode;
    currTask.parentNode.removeChild(currTask);
}

function addListenerStrike(trow) {
        trow.addEventListener('click', function(e) {
        strikeThrough(e);
    });
}

function strikeThrough(e) {
    let currRow = e.target.parentNode;
    if (currRow.getElementsByTagName('td')[0].innerHTML == ' ') {
        currRow.getElementsByTagName('td')[0].innerHTML = '&check;';
        currRow.getElementsByTagName('td')[1].style.textDecoration = 'line-through';
        currRow.style.backgroundColor = 'gray';
    } else {
        currRow.getElementsByTagName('td')[0].innerHTML = ' ';
        currRow.getElementsByTagName('td')[1].style.textDecoration = 'none';
        currRow.style.backgroundColor = '';
    }
}