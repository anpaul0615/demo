# Null, Undefined

```javascript
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

```javascript
let unusable: void;
unusable = undefined; // OK
unusable = null; // OK
unusable = 1; // Error
unusable = 'one'; // Error
unusable = {}; // Error
```