//Fetch and display tasks
fetch("/tasks")
    .then(res => res.json())
    .then(data => {
        data.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task.title + (task.completed ? "✅":"")
            document.body.appendChild(li);
        });
    });

//Add new task via form submission
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("input").value;
    fetch("/tasks", {
        method: "POST",
        headers: {"content-Type":"application/json"},
        body: JSON.stringify({title: input})
    })
        .then(res => res.json())
        .then(newTask => {
            const li = document.createElement("li");
            li.textContent = newTask.title;
            document.body.appendChild(li);
        });
});