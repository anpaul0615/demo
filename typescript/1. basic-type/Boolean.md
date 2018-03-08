# Boolean

```javascript
let isDone: boolean = false;
const isDone2: Boolean = false; // OK
```

```javascript
const isDone3: boolean = new Boolean(true); // Error : Type 'Boolean' is not assignable to type 'boolean'.
// 'boolean' is a primitive, but 'Boolean' is a wrapper object.
// Prefer using 'boolean' when possible.
```