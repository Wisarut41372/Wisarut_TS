let employees;
employees = [
    ["100", "Mos", 1, 10000, " ", ""],
    ["101", "Toy", 2, 15000, "", ""],
    ["102", "Bas", 3, 20000, "", ""],
    ["103", "Tan", 7, 25000, "", ""],
    ["104", "Num", 7, 30, "", ""],
];
employees.forEach((e) => {
    //update s[4]
    e[4] = "2000";
    e[5] = "Rice Cooker";
    console.log("ID:" + e[0]);
    console.log("Name:" + e[1]);
    console.log("WorkYear:" + e[2]);
    console.log("Salary:" + e[3]);
    console.log("Bonus:" + e[4]);
    console.log("Gift:" + e[5]);
    console.log("================");
});
