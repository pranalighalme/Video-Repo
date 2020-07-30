
let arrayNum = [1,2,3,-3,4,-4,5,-5,6,7];
let Arrlength = 2;

additionOfSubset = (arrayNum, Arrlength) =>{
    arrayNum.sort();
    let sortedArrayLength = arrayNum.length;
    let subsetOfArray = arrayNum.splice(Arrlength, sortedArrayLength);

    let additionOfMax = 0;

    subsetOfArray.map((ele)=>{
        additionOfMax += ele;
    })

    return additionOfMax;
}

additionOfSubset(arrayNum, Arrlength);