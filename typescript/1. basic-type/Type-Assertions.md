# Type Assertions

```javascript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

```javascript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```