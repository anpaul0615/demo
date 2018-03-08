// hello-class.ts
(function(){
    interface Person {
        name: string;
        age: number;
    }

    class Developer {
        fullName: string;
        constructor(
            public firstName: string,
            public middleInitial: string,
            public lastName: string
        ) {
            this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
        }
    }

    function greeter(person: Person){
        return 'Hello, ' + person.name + ' ' + person.age;
    }
    
    let person = {
        name: 'Paul',
        age: 28
    };
    
    console.log(greeter(person));
})();