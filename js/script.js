let arr=[2,4,7,3, 5];

function findminimum(arr) {
    let min=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(min>arr[i]){
            
            min=arr[i];
        }
        
    }
    return min;
}

function findmaximum(arr) {
    let max=arr[0];
    let secondmax;
    for (let i = 0; i < arr.length; i++) {
        if(max<arr[i]){
            secondmax=max
            max=arr[i];
        }else if(secondmax<arr[i]){
            secondmax=arr[i];
        }
        
    }
    return secondmax;
}

let minimum=findminimum(arr);
let maximum=findmaximum(arr);
console.log(minimum);
console.log(maximum);




let arr2=[2,4,7,3,5,8];

function addElement(arr, number,index) {
    let arr2=new Array();
    for (let i = 0; i < index; i++) {
        arr2[i]=arr[i];
    }
    arr2[index]=number;
    for(let i=index+1;i<arr.length+1;i++){
        arr2[i]=arr[i-1];
    }
    console.log(arr2); 
}

addElement(arr2,9,3);



let arr3=[2,4,6,7,9,4,13,8,8];

function defineeven(arr) {
    let arr2=[];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0){
            if(arr2.indexOf(arr[i])<0){
            arr2.push(arr[i])
        }
        } 
    }
    return arr2;

}

let arr4=defineeven(arr3);
console.log(arr4);


let arr5=["a","b","c","a","c"];

let sortedarr=arr5.sort();
for(let i=0;i<sortedarr.length;i++){
    
}