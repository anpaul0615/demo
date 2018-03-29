# Declaration

```javascript
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```
- TypeScript 에서는 값의 형태(shape)에 초점을 맞춰서 타입을 검사함
- 인터페이스는 이러한 타입의 이름과 요구사항을 정의하는 역할을 함
- 인터페이스를 구현하는 대상은 인터페이스에서 정의한 요구사항만 충족하면 됨

