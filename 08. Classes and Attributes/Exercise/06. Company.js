class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = {
                employees: [],
                avrSalary: 0,
                sumSalary: 0,
                countEmployees: 0
            };
        }

        this.departments[department].employees.push({ name, salary, position });
        this.departments[department].sumSalary += salary;
        this.departments[department].countEmployees++;
        this.departments[department].avrSalary = this.departments[department].sumSalary / this.departments[department].countEmployees;

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDeptName = null;
        let bestAvgSalary = 0;

        for (let dept in this.departments) {
            if (this.departments[dept].avrSalary > bestAvgSalary) {
                bestDeptName = dept;
                bestAvgSalary = this.departments[dept].avrSalary;
            }
        }

        const sortedEmployees = this.departments[bestDeptName].employees
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        const result = `Best Department is: ${bestDeptName}
Average salary: ${bestAvgSalary.toFixed(2)}
${sortedEmployees.map(employee => `${employee.name} ${employee.salary} ${employee.position}`).join('\n')}`;

        return result;
    }
}



let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
console.log(c.bestDepartment());
