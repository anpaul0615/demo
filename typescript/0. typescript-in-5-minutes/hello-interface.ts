// hello-interface.ts
(function(){
    interface Person {
        name: string;
        age: number;
    }

    function greeter(person: Person){
        return `Hello, ${person.name} ${person.age}`;
    }
    
    let person = {
        name: 'Paul',
        age: 28
    };
    
    console.log(greeter(person));
})();