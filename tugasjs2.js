// printOddNumber

const printOddNumber = (num) => {
    for (let i = 1; i <= num; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  };
  
  printOddNumber(100);

//printPijarCamp
const printPijarCamp = (num) =>{
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0 ) {
            console.log("PijarCamp");
        } else if(i % 3 ===0){
            console.log("Pijar");
        } else if(i % 5 ===0){
            console.log("Camp");
        } else {
            console.log(i);
        }
    }
};
        printPijarCamp(100)

        // combine array combine objects

        const combineArray = (arr1,arr2)=>{
            return [array1, array2]
        }
        const combineObjects = (obj1,obj2)=>{
            return [objects1, objects2]
        }
        const array1 = [1, 2, 3, 4, 5]
        const array2 = [6, 7, 8, 9, 10]
        const objects1 = {a: 11, b:12}
        const objects2 = {f:13, g:14 }
        
        const combinedArray = combineArray (array1,array2)
        const combinedObjects = combineObjects (objects1,objects2)

        console.log(combinedArray);
        console.log(combinedObjects);
        
        //storedObjects

        const storedObjects = {};

            const addObject = (key, value) => {
             storedObjects[key] = value;
};

            addObject("nama", "Dhaahi Katum M");
            addObject("kota", "Tangerang");

            console.log(storedObjects);
        
            //printSquare

            const printSquare = (num) => {
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j < num; j++) {
      row += "* ";
    }
    console.log(row);
  }
};

printSquare(6);
printSquare(4);

//returnFirstName
const returnFirstName = (fullName) => {
  const firstName = fullName.split(" ")[0];
  return firstName;
};

const fullName = "Dhaahi Katum M";
const firstName = returnFirstName(fullName);
console.log(firstName);

//returnDay

const returnDay = (clock) => {
  if (clock >= 5 && clock <= 12) {
    return "Pagi";
  } else if (clock >= 13 && clock <= 15) {
    return "Siang";
  } else if (clock >= 16 && clock <= 18) {
    return "Sore";
  } else if ((clock >= 19 && clock <= 24) || (clock >= 0 && clock <= 4)) {
    return "Malam";
  } else {
    return "Invalid clock value";
  }
};

const clock = 14;
const day = returnDay(clock);
console.log(day);