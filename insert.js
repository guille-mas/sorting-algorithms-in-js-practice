/**
 * mark first element as sorted
 * for each unsorted element
 * 'extract' the element
 * for i = lastSortedIndex to 0
 * if currentSortedElement > extractedElement
 * move sorted element to the right by 1
 * else: insert extracted element
 *
 * @param arr
 */
function insertSort(arr) {
    for(let i=1; i<arr.length; i++){
        if(arr[i] < arr[i-1]){
            let tmp = arr.splice(i,1)[0];
            let i2 = i-1;
            while(i2 > 0 && tmp < arr[i2]){
                i2--;
            }
            arr.splice(i2,0,tmp);
        }
    }
}


//--------------------TEST BELOW----------------------

let arr = [2,1,0,-10,2,1];

console.log(arr);
insertSort(arr);
console.log(arr);
