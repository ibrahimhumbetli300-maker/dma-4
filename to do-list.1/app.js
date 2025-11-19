document.getElementById("addBtn").onclick = function () {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Boş mətn əlavə etmək olmaz!");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const p = document.createElement("p");
    p.textContent = text;

    const del = document.createElement("button");
    del.textContent = "X";
    del.style.backgroundColor = "red";
    del.className = "deleteBtn";

    del.onclick = function () {
        taskDiv.remove();
    };

    taskDiv.appendChild(p);
    taskDiv.appendChild(del);

    document.getElementById("taskList").appendChild(taskDiv);

    input.value = "";
};


document.getElementById("searchInput").addEventListener("keyup", function () {
    const searchText = this.value.toLowerCase();
    const tasks = document.querySelectorAll(".task");

    tasks.forEach(task => {
        const text = task.querySelector("p").textContent.toLowerCase();

        if (text.includes(searchText)) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    });
});