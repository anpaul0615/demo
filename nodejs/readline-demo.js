const readline = require('readline').createInterface({
  input:process.stdin,
  output: process.stdout
});

// set event
readline.on('line', (input) => {
  console.log(`Received: ${input}`);
});
readline.on('pause', () => {
  console.log('Readline paused.');
});
readline.on('resume', () => {
  console.log('Readline resumed.');
});


// ctrl + z
readline.on('SIGCONT', () => {
  readline.prompt();
});
// ctrl + c
readline.on('SIGINT', () => {
  readline.question('Are you sure you want to exit?', (answer) => {
    if (answer.match(/^y(es)?$/i)) readline.pause();
  });
});
// ctrl + z
readline.on('SIGTSTP', () => {
  console.log('Caught SIGTSTP.');
});
