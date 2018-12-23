var pastToDos = [
  {
    day: "2018-12-01",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: true, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Family"},
      {name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "Family"}
    ]
  },
  {
    day: "2018-12-02",
    toDos: [
      {name: 'foo', level: 1, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "OKCoders"},
      {name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: true, priorityTag: "Family"}
    ]
  },
  {
    day: "2018-12-03",
    toDos: [
      {name: 'foo', level: 1, done: false, highlight: false, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "OKCoders"},
      {name: 'baz', level: 3, done: false, highlight: true, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: false, highlight: false, priorityTag: "OKCoders"}
    ]
  },
  {
    day: "2018-12-04",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Health"},
      {name: 'bar', level: 2, done: true, highlight: true, priorityTag: "Family"},
      {name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "Family"}
    ]
  },
  {
    day: "2018-12-05",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Health"},
      {name: 'baz', level: 3, done: false, highlight: true, priorityTag: "Health"},
      {name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "OKCoders"}
    ]
  },
  {
    day: "2018-12-06",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Family"},
      {name: 'baz', level: 3, done: true, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: true, priorityTag: "Family"}
    ]
  }
]

function toDosHtml() {
  return pastToDos
    .map(toDo => toDoHtml(toDo))
    .join("")
}

function toDoHtml(toDo) {
  var checked0 = toDo.toDos[0].done ? 'checked': ''
  var checked1 = toDo.toDos[1].done ? 'checked': ''
  var checked2 = toDo.toDos[2].done ? 'checked': ''
  var checked3 = toDo.toDos[3].done ? 'checked': ''
  return `
    <div class="card">
      <span class="card-body">
        ${toDo.day}
        <button type="button" class="btn btn-outline-info align-right" onclick="return showPastToDos('${toDo.day}')" data-toggle="button" aria-pressed="false" autocomplete="off">
        Show ToDos
        </button>
      </span>
      <span id="${toDo.day}" class="card-body hide-toDos">
        <ol>
          <li>
          <span>
          ${toDo.toDos[0].name}
          </span>
          <div class="form-check form-check-inline">
          <input 
            value="${toDo.toDos[0].done}" 
            type="checkbox" 
            class="form-check-input position-static" 
            id="exampleCheck" 
            ${checked0}>
          </div>
          </li>
          <li>
          <span>
          ${toDo.toDos[1].name}
          </span>
          <div class="form-check form-check-inline">
          <input 
            value="${toDo.toDos[1].done}" 
            type="checkbox" 
            class="form-check-input position-static" 
            id="exampleCheck" 
            ${checked1}>
          </div>
          </li>
          <li>
          <span>
          ${toDo.toDos[2].name}
          </span>
          <div class="form-check form-check-inline">
          <input 
            value="${toDo.toDos[2].done}" 
            type="checkbox" 
            class="form-check-input position-static" 
            id="exampleCheck" 
            ${checked2}>
          </div>
          </li>
          <li>
          <span>
          ${toDo.toDos[3].name}
          </span>
          <div class="form-check form-check-inline">
          <input 
            value="${toDo.toDos[3].done}" 
            type="checkbox" 
            class="form-check-input position-static" 
            id="exampleCheck" 
            ${checked3}>
          </div>
          </li>
        </ol>
      </span>
    </div>
    `
}

function showPastToDos(day) {
  var clickedOnDay = pastToDos.find(x => x.day === day);
  var element = document.getElementById(clickedOnDay.day)
  var classList = element.classList
      if (clickedOnDay) {
        classList.toggle("hide-toDos")
      } else {
        return false
      }
}

function render() {
  var element = document.getElementById("past-to-dos")
  element.innerHTML = toDosHtml()
}

render()

// console.log(pastToDos.flatMap(toDo => toDo.toDos))
// console.log(pastToDos.flatMap(toDo => toDo.toDos.map(x => x.done)))
