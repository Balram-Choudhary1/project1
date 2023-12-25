// // 1
// const data = [1,2,3,4,5];

// var output = 0 

// for( var i = 0; i< data.length; i++){
//     output = output + data[i];
// }

// console.log(output);

const data = [1,2,3,4,5];

const sum = data.reduce((sum,currentValue)=>{
    return sum + currentValue;
});

console.log(sum);

//add data logic
const selectyourchoice =(a,b)=>{
    return a+b;
};

var Data = selectyourchoice(10,20);
console.log(Data);

//sub logic
const selectchoice =(a,b)=>{
    return a-b;
};

var Data = selectchoice(10,20);
console.log(Data);
