(function(){
    "use strict"
    //Ex1
    let cars = [{}];
    function makeCar() {
    let car = {}
    car.make = prompt("What is the make of the car");
    car.model = prompt("What is the model of the car?");
    cars.push(car);
    }

    // while(confirm('Would you like to enter a car?')) {
    //     makeCar();
    // }
    // console.log(cars)
// Ex 2
    const salesReport = {
        title: 'Monthly Sales Report',
        date: Date.UTC(2015,3,17),
        office: 'Codeup',
        employees: [{
            employeeNumber : 1,
            firstName: 'Jane',
            lastName: 'Janeway',
            salesUnits: 3
        }, {
            employeeNumber: 3,
            firstName: 'Tricia',
            lastName: 'Triciason',
            salesUnits: 5
        }, {
            employeeNumber: 4,
            firstName: 'Jeannette',
            lastName: "Jeanson",
            salesUnits: 4
        }, {
            employeeNumber: 5,
            firstName: 'Charles Emmerson III',
            lastName: 'Winchester',
            salesUnits: 2
        }, {
            employeeNumber: 6,
            firstName: 'Chet',
            lastName: 'Cheddarson',
            salesUnits: 8
        }, {
            employeeNumber: 7,
            firstName: 'Chaiam',
            lastName: 'Chaiamson',
            salesUnits: 12
        }, {
            employeeNumber: 8,
            firstName: 'Dale',
            lastName: 'Dalesinger',
            salesUnits: 1
        }, {
            employeeNumber: 9,
            firstName: 'Zig',
            lastName: 'Ziglar',
            salesUnits: 50
        }, {
            employeeNumber: 10,
            firstName: 'Henry',
            lastName: 'Kissinger',
            salesUnits: 1
        }, {
            employeeNumber: 11,
            firstName: 'Arthur Herbert',
            lastName: 'Fonzarelli',
            salesUnits: 23
        }, {
            employeeNumber: 12,
            firstName: 'Betty',
            lastName: 'Boop',
            salesUnits: 67
        }]
    }
    console.log(salesReport);
    //Ex 3
    salesReport.getEmployeeCount = salesReport.employees.length //returns the number of employees in the sales report
    console.log(salesReport.getEmployeeCount);
    // gets the total units sold by all employees
    salesReport.getTotalNumberOfSales = function () {
        let total = 0;
     for (let employee of salesReport.employees) {
         total += employee.salesUnits;
     }
    return total}
    console.log(salesReport.getTotalNumberOfSales());
    //gets average units sold by employee
    salesReport.getAverageSalesPerEmployee = function () {
        return salesReport.getTotalNumberOfSales() / salesReport.getEmployeeCount
    }
    console.log(salesReport.getAverageSalesPerEmployee());
    //Stopwatch object
    const stopWatch = {
        intervalId: 1,
        count: 0
    }

    stopWatch.start = setInterval(function () {
        console.log(stopWatch.count);
        stopWatch.count++
    },1000)

})()