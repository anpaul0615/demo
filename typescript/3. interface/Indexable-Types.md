# Indexable Types

```javascript
const dict = {
    foo: 1,
    bar: 2
};
Object.keys(dict).forEach(k => console.log(dict[k])); //error: Index signature of object type implicitly has an 'any' type

```
- 동적인 키 값을 통한 프로퍼티 접근은 Typescript 에서 동작하지 않음
- 어떤 타입의 프로퍼티에 접근하는지 알 수 없기 때문에, 리턴값을 묵시적으로 any 타입으로 변환하므로 에러가 발생함
- 컴파일 옵션 중 noImplicitAny 옵션을 false 로 설정하는 것으로 해당 에러를 무시할 수 있음  
  (디폴트 값은 true)


```javascript
interface Indexable {
    [key: string]: number;  // Index signature
}

const dict: Indexable = {
    foo: 1,
    bar: 2
};

Object.keys(dict).forEach(k => console.log(dict[k])); // OK
```
- 인터페이스에 Index signature 를 선언해주면, 이 인터페이스를 구현한 대상은 프로퍼티를 동적으로 접근할 수 있음
- 키 값과 프로퍼티의 반환값은 Index signature 에 정의되어있는 key/value 의 타입을 따름  
  (ex. 키 값을 string 으로 접근해서 프로퍼티값을 number 로 반환받음)

