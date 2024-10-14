"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    static createEmployee(name) {
        return { name: name };
    }
    ;
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT department id: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please add a value');
        }
        this.addReports(value);
    }
    constructor(id, reports) {
        super(id, 'ACCOUNTING');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    ;
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log('Accounting Department Id: ' + this.id);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        ;
        this.employees.push(name);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('itId', ['Max']);
it.addEmployee('max');
it.addEmployee('allon');
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it.admins);
// const accounting = new AccountingDepartment( 'accountingId', []);
const accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = "Year end report";
accounting.addReports('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Elly');
accounting.printEmployeeInformation();
accounting.describe();
