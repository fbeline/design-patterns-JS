function bonusVisitor(employee) {
  if (employee instanceof Manager)
    employee.bonus = employee.salary * 2;
  if (employee instanceof Developer)
    employee.bonus = employee.salary;
}

class Employee {

  constructor(salary) {
    this.bonus = 0;
    this.salary = salary;
  }

  accept(visitor) {
    visitor(this);
  }
}

class Manager extends Employee {
  constructor(salary) {
    super(salary);
  }
}

class Developer extends Employee {
  constructor(salary) {
    super(salary);
  }
}

export {
  Developer,
  Manager,
  bonusVisitor
};
