function bubbleSort(arr) {
    let swapped = false;
    let iterations = 1
    
    do {
        swapped = false;
        for (let i = 0; i < arr.length - iterations; i++) {
            if (arr[i] > arr[i+1]) {
                swap(arr, i)
                swapped = true;
            }
        }
        iterations++
    } while (swapped)
    
    return arr
}

function swap(arr, pointer) {
    let current = arr[pointer]
    let next = arr[pointer + 1]
    arr[pointer] = next
    arr[pointer + 1] = current
}