// Code your solution in this file!
const returnFirstTwoDrivers =function(Drivers){

//adding the two drivers use .slice(0,2)
 return Drivers.slice (0,2);
 return new array
}
 const returnLastTwoDrivers=function (Drivers) {
return Drivers.slice(-2);
return new array

 }
 const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];
 
 function createFareMultiplier(integer) {
   return function(fare) {
     return fare * integer;
   }
 }

const fareDoubler = createFareMultiplier(2);

 const fareTripler = createFareMultiplier(3);

 function selectDifferentDrivers(drivers, selectorFunction) {
   if (selectorFunction === returnFirstTwoDrivers) {
     return drivers.slice(0, 2);

   } else if (selectorFunction===returnLastTwoDrivers) {
      return drivers.slice(-2);
      
   } else { 
   return [];}
}
