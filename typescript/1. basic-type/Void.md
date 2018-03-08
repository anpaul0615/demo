# Void

```javascript
function warnUser(): void {
    alert("This is my warning message");
} // OK

function warnUser(): void {
    alert("This is my warning message");
    return 0;
} // Error
```

```javascript
let unusable: void;
unusable = undefined; // OK
unusable = null; // OK
unusable = 1; // Error
unusable = 'one'; // Error
unusable = {}; // Error
```