// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { firstName, lastName, sayHello } = require('./variable');

test('should create a variable named firstName and assign your first name to it', () => {
  expect(firstName).toBeDefined();
  expect(firstName.length).toBeGreaterThan(0);
});

test('should create a variable named lastName and assign your last name to it', () => {
  expect(lastName).toBeDefined();
  expect(lastName.length).toBeGreaterThan(0);
});

test('should create a variable named sayHello and assign a greeting to it', () => {
  expect(sayHello).toBeDefined();
  expect(sayHello).toEqual(
    `Hello world! My name is ${firstName} ${lastName}. Nice to meet you!`
  );
});
