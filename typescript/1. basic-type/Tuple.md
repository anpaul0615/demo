# Tuple

```javascript
let x: [string, number];
x = ["hello", 10]; // OK
x = ["hi", 20]; // OK
x = [30, "hi"]; // Error
```

```javascript
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error : 'number' does not have 'substr'
```

```javascript
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
```

```javascript
console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
```

```javascript
x[6] = true; // Error, 'boolean' isn't 'string | number'
```