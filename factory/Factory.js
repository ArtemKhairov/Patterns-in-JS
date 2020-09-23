class User{
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
};

module.exports = (firstName, lastName) => new User(firstName, lastName);

// Конструктор класса инкапсулирован
// Возвращает готовый объект
// Не наследуется данный класс 