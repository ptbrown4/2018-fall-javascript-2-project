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

function find_duplicate_in_array(arra1) {
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




function toDoHtml(toDo) {
  var checked0 = toDo.toDos[0].done ? 'checked': ''
  var checked1 = toDo.toDos[1].done ? 'checked': ''
  var checked2 = toDo.toDos[2].done ? 'checked': ''
  var checked3 = toDo.toDos[3].done ? 'checked': ''
  var priority0 = toDo.toDos[0].priorityTag
  var priority1 = toDo.toDos[1].priorityTag
  var priority2 = toDo.toDos[2].priorityTag
  var priority3 = toDo.toDos[3].priorityTag
  var highlight0 = toDo.toDos[0].highlight ? 'priority-highlight': ''
  var highlight1 = toDo.toDos[1].highlight ? 'priority-highlight': ''
  var highlight2 = toDo.toDos[2].highlight ? 'priority-highlight': ''
  var highlight3 = toDo.toDos[3].highlight ? 'priority-highlight': ''
  var topPriority = find_duplicate_in_array(toDo.toDos);
  var progressPercent = (toDo.toDos.filter(t => t.done).length / toDo.toDos.length) * 100
  return `
    <div class="card">
      <span class="card-body">
        ${toDo.day} 
        <span class="badge badge-success">Top Priority: ${topPriority}</span>
        <button type="button" class="btn btn-outline-info align-right" onclick="return showPastToDos('${toDo.day}')" data-toggle="button" aria-pressed="false" autocomplete="off">
        Show ToDos
        </button>
        </span>
        <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${progressPercent}%" aria-valuenow="${progressPercent}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
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
          <button type="button" class="btn btn-outline-dark btn-sm align-right ${highlight0}" data-toggle="button" aria-pressed="false" autocomplete="off">
        ${priority0}
        </button>
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
          <button type="button" class="btn btn-outline-dark btn-sm align-right ${highlight1}" data-toggle="button" aria-pressed="false" autocomplete="off">
        ${priority1}
        </button>
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
          <button type="button" class="btn btn-outline-dark btn-sm align-right ${highlight2}" data-toggle="button" aria-pressed="false" autocomplete="off">
        ${priority2}
        </button>
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
          <button type="button" class="btn btn-outline-dark btn-sm align-right ${highlight3}" data-toggle="button" aria-pressed="false" autocomplete="off">
        ${priority3}
        </button>
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

// console.log(pastToDos.flatMap(toDo => toDo.toDos[0].priorityTag))



