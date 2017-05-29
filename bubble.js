/**
 * Bubble sort
 * @param arr
 */
function bubbleSort(arr) {
    if(!arr.length || arr.length === 1) {
        return arr;
    }

    var swap = (arr,idx1,idx2) => {
        let tmp;
        tmp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = tmp;
    };

    // a flag to avoid going to the end of the array for each item
    var swapped;

    do {
        swapped = false;
        for(let i = 0; i < arr.length; i++) {
            if(typeof arr[i] != 'undefined' && typeof arr[i+1] != 'undefined' && arr[i] > arr[i+1]){
                swap(arr,i,i+1);
                swapped = true;
            }
        }
    } while(swapped);
}

let arr = [2,1,0,-10,2,1];

console.log(arr);
bubbleSort(arr);
console.log(arr);

