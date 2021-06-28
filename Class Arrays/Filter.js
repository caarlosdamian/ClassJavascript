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

  function mayorQue(arr) {
    let result = arr.filter((valor) => valor > 5);
    return console.log(result);
  }
  function masDuracion(tasks) {
    let result = tasks.filter((valor) => valor.duration > 100);
    return console.log(result);
  }

  mayorQue(arr)
  masDuracion(tasks)