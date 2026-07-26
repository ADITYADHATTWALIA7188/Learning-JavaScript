# 📚 JavaScript Arrays – Merging Arrays

## 🎯 Objective

Learn different ways to merge two arrays in JavaScript and understand the advantages and disadvantages of each approach.

---

## 📌 Initial Data

```javascript
let Array1 = [1, 2, 3, 4];
let Array2 = [5, 6, 7, 8];
```

---

## 📝 Tasks

### ✅ Method 1 – Using `push()` (Not Recommended)

- Insert one array into another using the `push()` method.
- Observe the output carefully.
- Notice that the second array becomes a **nested array** instead of merging its individual elements.

```javascript
Array1.push(Array2);
```

**Output**

```javascript
[1, 2, 3, 4, [5, 6, 7, 8]]
```

> ⚠️ This method is **not recommended** when your goal is to merge two arrays.

---

### ✅ Method 2 – Using `concat()`

- Merge two arrays using the `concat()` method.
- Store the result in a new array.
- Verify that the original arrays remain unchanged.

```javascript
let NewArray = Array3.concat(Array4);
```

**Output**

```javascript
[1, 2, 3, 4, 5, 6, 7, 8]
```

> ✅ Recommended for simple array merging.

---

### ✅ Method 3 – Using Spread Operator (`...`)

- Merge two arrays using the spread operator.
- Store the merged result in a new array.

```javascript
let NewArray = [...Array3, ...Array4];
```

**Output**

```javascript
[1, 2, 3, 4, 5, 6, 7, 8]
```

> ✅ Modern JavaScript approach and widely used in React, Node.js, and ES6+ applications.

---

### ✅ Extra Practice – Spread Operator

Use the spread operator to insert additional values while merging arrays.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArr = [100, ...arr1, 200, ...arr2];
```

**Output**

```javascript
[100, 1, 2, 3, 200, 4, 5, 6]
```

---

## 📖 Concepts Covered

- Arrays
- `push()`
- `concat()`
- Spread Operator (`...`)
- Nested Arrays
- Array Merging
