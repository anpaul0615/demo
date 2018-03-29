# Interfaces Extending Classes

```javascript
class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}
class TextBox extends Control {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.
class Image implements SelectableControl {
    select() { }
}
class Location {

}
```
- 인터페이스가 클래스를 상속받을 때, 기본 클래스의 모든 멤버를 상속받지만 기본 구현체의 멤버는 상속받지 않음  
  (When an interface type extends a class type, it inherits the members of the class but not their implementations)
- 기본 클래스의 private 및 protected 멤버도 상속할 수 있음  
  (Interfaces inherit even the private and protected members of a base class)
- private, protected 멤버가 있는 기본 클래스(A)를 상속받은 인터페이스(B)는, 그 기본 클래스(A) 혹은 그 서브클래스에서만 구현될 수 있음  
  (This means that when you create an interface that extends a class with private or protected members, that interface type can only be implemented by that class or a subclass of it)
- 이것은 거대한 상속계층에서 특정 프로퍼티를 가지고있는 서브클래스에서만 코드가 동작하도록 지정하는 경우에서 유용합니다.  
  (This is useful when you have a large inheritance hierarchy, but want to specify that your code works with only subclasses that have certain properties)

