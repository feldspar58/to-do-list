document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML +=
            `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            `;

        document.querySelector('#newtask input').value = "";

        document.querySelector('#tasks').addEventListener('click', function (event) {
            if (event.target.classList.contains('delete')) {
                event.target.parentNode.remove();
            }
        });
    }

    document.querySelector("#tasks").addEventListener('click', function (event) {
        if (event.target.classList.contains('task')) {
            event.target.classList.toggle('completed');
        }
    });
};
