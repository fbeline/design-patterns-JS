function bonusVisitor(employee) {
  if (employee instanceof Manager)
    employee.bonus = employee.salary * 2;
  if (employee instanceof Developer)
    employee.bonus = employee.salary;
}

function Employee() {
  this.bonus = 0;
}

Employee.prototype.accept = function(visitor) {
  visitor(this);
};

function Manager(salary) {
  this.salary = salary;
}

Manager.prototype = Object.create(Employee.prototype);

function Developer(salary) {
  this.salary = salary;
}

Developer.prototype = Object.create(Employee.prototype);

module.exports = [Developer, Manager, bonusVisitor];
