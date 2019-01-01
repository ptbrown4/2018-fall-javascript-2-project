var pastToDos = [
  {
    day: "12-01-2018",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: true, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Family"},
      {name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "Family"}
    ]
  },
  {
    day: "12-02-2018",
    toDos: [
      {name: 'foo', level: 1, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "OKCoders"},
      {name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: true, priorityTag: "Family"}
    ]
  },
  {
    day: "12-03-2018",
    toDos: [
      {name: 'foo', level: 1, done: false, highlight: false, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "OKCoders"},
      {name: 'baz', level: 3, done: false, highlight: true, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: false, highlight: false, priorityTag: "OKCoders"}
    ]
  },
  {
    day: "12-04-2018",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Health"},
      {name: 'bar', level: 2, done: true, highlight: true, priorityTag: "Family"},
      {name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "Family"}
    ]
  },
  {
    day: "12-05-2018",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Health"},
      {name: 'baz', level: 3, done: false, highlight: true, priorityTag: "Health"},
      {name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "OKCoders"}
    ]
  },
  {
    day: "12-06-2018",
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

function toDosItem() {
  return pastToDos
    .map(toDo => toDoItems(toDo.toDos))
    .join("")
}

function findDuplicateInArray(arra1) {
  var object = {};
  var result = [];
  arra1.forEach(function (item) {
    if(!object[item.priorityTag])
        object[item.priorityTag] = 0;
      object[item.priorityTag] += 1;
  })
  for (var prop in object) {
     if(object[prop] >= 2) {
         result.push(prop);
     }
  }
  return result;
}

function globalProgressBar() {
  var globalDone = pastToDos.flatMap(toDo => toDo.toDos.map(x => x.done))
  var globalProgress = (globalDone.filter(g => g).length / globalDone.length) * 100;
  return `<div id="progress" class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: ${globalProgress}%" aria-valuenow="${globalProgress}" aria-valuemin="0" aria-valuemax="100"></div>`
}

function toDoHtml(toDo) {
  var topPriority = findDuplicateInArray(toDo.toDos);
  var progressPercent = (toDo.toDos.filter(t => t.done).length / toDo.toDos.length) * 100;
  $("#past-to-dos").append(`
    <div class="card">
      <span class="card-body">
        ${toDo.day} 
        <span class="badge badge-success">Top Priority: ${topPriority}</span>
        <button type="button" class="btn btn-outline-info align-right" onclick="return showPastToDos('${toDo.day}')" data-toggle="button" aria-pressed="false" autocomplete="off">
        Show Past ToDos
        </button>
        </span>
        <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${progressPercent}%" aria-valuenow="${progressPercent}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    <div id="${toDo.day}" class="card hide-toDos">
    </div>
    `);
    
    var dayId = toDo.day
    var toDo = toDo.toDos
    
    for (var i = 0; i < toDo.length; i++) {
      var checked = toDo[i].done ? 'checked': ''
      var priority = toDo[i].priorityTag
      var highlight = toDo[i].highlight ? 'priority-highlight': ''
    $(`#${dayId}`).append(`
    <span class="card-body">
          <span>
          ${toDo[i].level}
          </span>
          <span>
          ${toDo[i].name}
          </span>
          <div class="form-check form-check-inline">
          <input 
            value="${toDo[i].done}" 
            type="checkbox" 
            class="form-check-input position-static" 
            id="exampleCheck" 
            ${checked}>
          </div>
          <button type="button" class="btn btn-outline-dark btn-sm align-right ${highlight}" data-toggle="button" aria-pressed="false" autocomplete="off">
        ${priority}
        </button>
          </li>
          </ol>
          </span>
          `)
  }}

function showPastToDos(day) {
  var clickedOnDay = pastToDos.find(x => x.day === day);
  var element = document.getElementById(clickedOnDay.day)
  var classList = element.classList
  
  if (clickedOnDay.day) {
    classList.toggle("hide-toDos");
  } else {
    return false
  }
}

function renderProgressBar() {
  var elementTwo = document.getElementById("progressBar")
  elementTwo.innerHTML = globalProgressBar()
}

function render() {
  toDosHtml()
  renderProgressBar()
}


render()


// console.log(pastToDos.flatMap(toDo => toDo.toDos))
// console.log(pastToDos.flatMap(toDo => toDo.toDos.map(x => x.done)))





