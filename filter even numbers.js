function filterevennumbers(numbers){
    let arr = [];
    for(let i= 0; i< numbers.length;i++){
        if(typeof numbers[i] !== 'number'){
            console.error("only numbers are allowed");
            return;
        }
        if (numbers[i] % 2 === 0){
            arr.push(numbers[i]);
        }
    }
    console.log(arr);
}

filterevennumbers([0,-2]);

