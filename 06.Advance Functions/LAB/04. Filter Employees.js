function solution(string, criteria) {

    let employes = JSON.parse(string);

    let sorted = [];

    if (criteria == "all") {
        printEmployeeInfo(employes);
    } else {
        let [category, value] = criteria.split("-").map(part => part.trim()); // Trim whitespaces
       

    
        for (let employ of employes) {
            if (employ[category] == value) {
                sorted.push(employ);
            }
        }
        printEmployeeInfo(sorted);
    }

    function printEmployeeInfo(employees) {
        for (let index = 0; index < employees.length; index++) {
            const employee = employees[index];
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        }
    }
}

const jsonData = `[
    {"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"}, {"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"}, {"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"},{"id": "4","first_name": "Evanne","last_name": "Maldina","email": "ev2@hostgator.com","gender": "Male"}    
]`;

const r2 = solution(jsonData, 'last_name-Johnson');
