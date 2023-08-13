const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = batteryBatches.reduce(function (acumulator, element){
    return element + acumulator;
});
// Code your solution here
