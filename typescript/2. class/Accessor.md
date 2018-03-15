# Accessor

```javascript
let passcode = "secret passcode";
class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
```
- getter/setter 는 ECMAScript 5+ 에서만 동작함
- 클래스 인스턴스로부터 프로퍼티를 읽기/쓰기를 시도할때 getter/setter 가 호출됨
- 프로퍼티에 대해 getter/setter 가 선언되지 않으면, 자동으로 readonly 로 추론됨
  (읽을수는 있는데 쓸수는 없음 == readonly)

