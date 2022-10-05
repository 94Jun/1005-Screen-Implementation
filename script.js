//변수 선언
let todoForm = document.querySelector("#todo_form");
let todoInput = document.querySelector("#todo_input");
let todoList = document.querySelector("#todo_list");
let completeCount = document.querySelector("#complete_count");
let count = 0;

// 카운트 체크 함수
function countCehcked() { 
  count = 0;
  for (let i = 0; i < todoList.children.length; i++) { 
    if (todoList.children[i].firstElementChild.checked == true)
        count++;
  }
  completeCount.innerHTML = count;
}

//할일 추가 이벤트
todoForm.addEventListener("submit", e => {
  e.preventDefault();
  if (todoInput.value) { 
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", `todo_item${todoList.children.length}`);
    let label = document.createElement("label");
    label.setAttribute("for", `todo_item${todoList.children.length}`)
    label.innerHTML = todoInput.value;
    let button = document.createElement("button");
    button.innerHTML = "X";
    todoList.append(li);
    li.append(input, label, button);
    todoInput.value = "";
  }
})

// 할일 체크 이벤트, 카운트 이벤트
todoList.addEventListener("click", e => { 
  if (e.target.tagName == 'INPUT') {
    if(e.target.checked == true) {
      e.target.parentElement.style = "color : lightgray;"
    } else { 
      e.target.parentElement.style = "color : black;"
    }
    countCehcked();
  }
})


// 할일 삭제 이벤트, 카운트 이벤트
todoList.addEventListener("click", e => { 
  if (e.target.tagName == 'BUTTON') { 
    e.target.parentElement.remove();

    countCehcked();
  }
})


