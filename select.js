/**
 * Select Sort
 *
 * repeat (numOfElements - 1) times
 *   set the first unsorted element as the minimum
 *   for each of the unsorted elements
 *     if element < currentMinimum
 *       set element as new minimum
 * swap minimum with first unsorted position
 *
 * @param arr
 */
function selectSort(arr){
    if(!arr.length || arr.length === 1) {
        return arr;
    }

    let swap = (arr,idx1,idx2) => {
        let tmp;
        tmp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = tmp;
    };

    for(let i=0; i<arr.length; i++){
        let minIdx = i;
        for(let i2 = minIdx+1; i2 < arr.length; i2++){
            if(arr[i2] < arr[minIdx]){
                minIdx = i2;
            }
        }
        if(minIdx > i){
            swap(arr,i,minIdx);
        }
    }
}


//--------------------TESTS BELOW---------------------

let arr = [2,1,0,-10,2,1];

console.log(arr);
selectSort(arr);
console.log(arr);
