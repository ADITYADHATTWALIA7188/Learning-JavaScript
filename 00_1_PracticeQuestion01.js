# 📚 Question 01 – Student Marks Management System

## 🎯 Objective

Create a JavaScript program to practice **arrays, conditional statements, and array methods** by performing a sequence of operations on a student's marks array.

---

## 📌 Initial Data

```javascript
let marks = [35, 78, 90, 33, 67];
let bonus = 5;
let passMarks = 40;
```

---

## 📝 Tasks

### ✅ Step 01 – Bonus or Remove

- Check the **first element** of the array.
- If it is less than `passMarks`, add the bonus marks.
- Otherwise, remove the first element from the array.

---

### ✅ Step 02 – Add Student Status

- Check the **last element** of the updated array.
- If it is **80 or above**, add `"Topper"` at the beginning of the array.
- Otherwise, add `"Average"` at the beginning.

---

### ✅ Step 03 – Insert a New Student

- Insert `"New Student"` at **index 2**.
- Do not remove any existing element.

---

### ✅ Step 04 – Remove an Element

- Remove the element present at **index 3**.

---

### ✅ Step 05 – Create a New Array

- Create a new array containing only the **last three elements** of the current array.

---

### ✅ Step 06 – Check Batch Size

- If the array length is greater than **6**, print:

```
Large Batch
```

- Otherwise, print:

```
Small Batch
```

---

### ✅ Step 07 – Odd or Even

- Check whether the **last element** of the array is **Odd** or **Even**.

---

### ✅ Step 08 – Search for an Element

- Check whether `"New Student"` exists in the array.
- Print:

```
Student Found
```

or

```
Student Not Found
```

---

### ✅ Step 09 – Find Element Index

- Find and print the **index** of `"New Student"`.

---

## 📖 Concepts Covered

- Variables
- Arrays
- Array Indexing
- `length`
- `if...else`
- Comparison Operators
- Arithmetic Operators
- `shift()`
- `unshift()`
- `splice()`
- `slice()`
- `includes()`
- `indexOf()`

---

## 🚀 Learning Outcome

After completing this challenge, you will be able to:

- Manipulate arrays using common JavaScript methods.
- Access elements using array indexing.
- Apply conditional statements with real-world scenarios.
- Understand the difference between array methods like `splice()` and `slice()`.
- Build a strong foundation for JavaScript problem-solving before moving on to loops and Data Structures & Algorithms (DSA).

<script>


    let marks = [35, 78, 90, 33, 67];
    let bonus = 5;
    let passMarks = 40;

    //Step-01 Check first element of Array
    console.log(marks);
    if (marks[0] < passMarks) {
      marks[0] += bonus;
    } else {
      marks.shift();
    }
    console.log(marks);

    //Step-02

    if (marks[marks.length - 1] > 79) {
      marks.unshift("Topper")
    } else {
      marks.unshift("Average")
    }
    console.log(marks)

    //Step-03 - use of splice()
    marks.splice(2, 0, "New Student");
    console.log(marks);

    //Step-04 Remove 78
    marks.splice(3, 1);
    console.log(marks);

    //Step-05 Make a new Array of last 3 elements
    let newMarks = marks.slice(3, 6);
    console.log(newMarks);

    //Step-6 Find the length of current Array
    if (marks.length > 6) {
      console.log("Large Batch");
    } else {
      console.log("Small Batch")
    }
    //Step-7 Last Number Check Odd or Even
    if (marks[marks.length - 1] % 2 == 0) {
      console.log("Number Is Even")
    } else {
      console.log("Number Is odd");
    }
    //Step-08 Find "New Student"
    if (marks.includes("New Student")) {
      console.log("Student Found");
    } else {
      console.log("Student Not Found")
    }
    //Step-09 "New Student" 's index'
    console.log(marks.indexOf("New Student"))
  </script>
