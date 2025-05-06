// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMsg");
  
    if (!name || !email || !message) {
      msg.style.color = "red";
      msg.textContent = "All fields are required.";
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      msg.style.color = "red";
      msg.textContent = "Invalid email address.";
      return;
    }
  
    msg.style.color = "green";
    msg.textContent = "Form submitted successfully!";
    this.reset();
  });
  
  // To-Do List Functionality
  function addTask() {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();
    const list = document.getElementById("todoList");
  
    if (task === "") return;
  
    const li = document.createElement("li");
    li.textContent = task;
  
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = function () {
      list.removeChild(li);
    };
  
    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = "";
  }
  