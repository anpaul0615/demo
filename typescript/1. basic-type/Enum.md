# Enum

```javascript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

```javascript
enum Color {Red, Green, Blue}
console.log(Color.Red === 0);  // true
```

```javascript
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

```javascript
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

```javascript
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
console.log(colorName); // Displays 'Green' as its value is 2 above
console.log(colorName === 'Green'); // true
```