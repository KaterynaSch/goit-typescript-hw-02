/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<U extends object, K extends object> (objA: U, objB: K):U & K {
  return Object.assign(objA, objB);
}

export {}