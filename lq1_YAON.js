// Person Data Storage
const person1 = {
  name: "Maria Delos Santos Las Marias",
  age: 25,
  address: "Upper Session Road, Baguio City, Benguet",
};

const person2 = {
  name: "Juan Gamoso Dela Cruz",
  age: 28,
  address: "San Nicolas, Candon City, Ilocos Sur",
};

// Rearrange Name Sequence
const rearrangeName = (fullName) => {
  const nameParts = fullName.trim().split(' ');
  const lastName = nameParts[nameParts.length - 1];
  const firstName = nameParts[0];
  const middleName = nameParts.slice(1, nameParts.length - 1).join(' ');
  return `${lastName}, ${firstName} ${middleName}`;
};

const rearrangePerson1Name = rearrangeName(person1.name);
const rearrangePerson2Name = rearrangeName(person2.name);

// Console log output
console.log(`${rearrangePerson1Name}, ${person1.age}, ${person1.address}`);
console.log(`${rearrangePerson2Name}, ${person2.age}, ${person2.address}`);

// Variable Manipulations
const person1NameLength = person1.name.length;
const person2NameLength = person2.name.length;
const person1AddressLength = person1.address.length;
const person2AddressLength = person2.address.length;

// Operations
const sumNumericValues = person1.age + person2.age + person1NameLength + person2NameLength + person1AddressLength + person2AddressLength;
const operation1result = (person1.age) + (person2.age);
const operation2result = (person1.age + person2.age - person1NameLength) * person2NameLength;
const operation3result = Math.pow(person1AddressLength, person2AddressLength);


// Print Results
console.log(`Sum of all numeric values: ${sumNumericValues}`);
console.log(`Operation1 result: ${operation1result}`);
console.log(`Operation2 result: ${operation2result}`);
console.log(`Operation3 result: ${operation3result}`);

