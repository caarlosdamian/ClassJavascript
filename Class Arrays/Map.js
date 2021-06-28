let arr = [1, 5, 6, 8, 7, 5];
var tasks = [
  {
    name: "Write for Envato Tuts+",

    duration: 120,
  },

  {
    name: "Work out",

    duration: 60,
  },

  {
    name: "Procrastinate on Duolingo",

    duration: 240,
  },
];

function suma(arr) {
  let sum = 0;
  arr.map((val) => {
    sum += val;
  });
  return console.log("Valor usando map  " + sum);
}

function getTask() {
  var task_names = tasks.map(function (task) {
    return task.name;
  });
  return console.log(task_names);
}

suma(arr);
getTask(tasks);
