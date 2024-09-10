array = [1,11,9,2,12];
for (let i =0; i<array.length; i++) {
    for (let j = i+1; j >array.length; j++) {
        if (array[i]<array[j]){
            temp =array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array);