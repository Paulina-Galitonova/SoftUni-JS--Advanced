function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);


   function onClick() {
      debugger
       let input = document.querySelector("textarea").value;
       let array = JSON.parse(input);
       let restaurants = {};
       for (let str of array) {
           let [name, workers] = str.split(" - ");
           workers = makeAndSortWorkers(workers);
           if (!(name in restaurants)) {
               restaurants[name] = {
                   avgSalary: calcAvgSalary(workers),
                   bestSalary: findBestSalary(workers),
                   workers: workers
               }
           } else {
               restaurants[name] = update(restaurants[name], workers);
           }
       }
       let bestRestaurant = findBestRestaurant(restaurants);
       document.querySelector("#bestRestaurant p").textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avgSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;
       let result = ""
       for (let worker of bestRestaurant[1].workers) {
           result += `Name: ${worker.name} With Salary: ${worker.salary} `;
       }
       document.querySelector("#workers p").textContent = result;

       function makeAndSortWorkers(string) {
           let workers = string.split(", ");
           let result = [];
           for (let worker of workers) {
               let [name, salary] = worker.split(" ");
               salary = Number(salary);
               let curWorker = { name, salary };
               result.push(curWorker);
           }
           let sortedResult = result.sort((a, b) => b.salary - a.salary);
           return sortedResult;
       }

       function calcAvgSalary(array) {
           let sum = 0;
           for (let object of array) {
               sum += object.salary;
           }
           let avg = sum / array.length;
           return avg;
       }

       function findBestSalary(array) {
           let bestSalary = 0;
           for (let object of array) {
               if (bestSalary < object.salary) {
                   bestSalary = object.salary;
               }
           }
           return bestSalary;
       }

       function update(object, newWorkers) {
           for (let worker of newWorkers) {
               object.workers.push(worker);
           }
           object.avgSalary = calcAvgSalary(object.workers);
           object.bestSalary = findBestSalary(object.workers);
           object.workers = object.workers.sort((a, b) => b.salary - a.salary);
           return object
       }

       function findBestRestaurant(object) {
           let bestRestaurant = Object.entries(object).sort((a, b) => {
               return b[1].avgSalary - a[1].avgSalary;
           })[0];
           return bestRestaurant;
       }
   }
}