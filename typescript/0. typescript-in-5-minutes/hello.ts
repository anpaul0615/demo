// hello.ts
(function(){
    function greeter(person: string) {
        return 'Hello, ' + person;
    }
    
    const person = 'Paul';
    
    console.log(greeter(person));
})()