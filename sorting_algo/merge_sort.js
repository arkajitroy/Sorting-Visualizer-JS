
// merge function
async function merge(elm, low, mid, high){
    const n1 = mid - low+1;
    const n2 = high - mid;

    // creating two seperate arrays
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i=0; i<n1; i++){
        await waitforme(delay);
        elm[low + i].style.background = "orange";
        left[i] = elm[low + i].style.height;
    }

    for(let i=0; i<n2; i++){
        await waitforme(delay);
        elm[mid + 1 + i].style.background = "yellow";
        right[i] = elm[mid + 1 + i].style.height; 
    }

    await waitforme(delay);
    let i=0; j=0; k=low;
    while(i<n1 && j<n2){
        await waitforme(delay);

        if(parseInt(left[i]) <= parseInt(right[j])){
            if((n1+n2) === elm.length){
                elm[k].style.background = "green";
            }
            else{
                elm[k].style.background = "lightgreen";
            }
            elm[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1+n2) === elm.length){
                elm[k].style.background = "green";
            }else{
                elm[k].style.background = "lightgreen";
            }
            elm[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitforme(delay);
        if((n1 + n2) === elm.length){
            elm[k].style.background = "green";
        }
        else{
            elm[k].style.background = "green";
        }
        elm[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await waitforme(delay);
        if((n1 + n2) === elm.length){
            elm[k].style.background = "green";
        }
        else{
            elm[k].style.background = "green";
        }
        elm[k].style.height = right[j];
        j++;
        k++;
    }
}

// merge sort
async function mergesort(elm, low, high){
    if(low >= high){
        return;
    }
    const mid = left + Math.floor((high - low)/2);
    await mergesort(elm, low, mid);
    await mergesort(elm, mid+1, high);
    await merge(elm, low, mid, high);
}

// disable button
const merge_sort_btn = document.querySelector('#merge');
merge_sort_btn.addEventListener('click', async function(){

    let elm = document.querySelectorAll('.bar');
    let left = 0;
    let right = parseInt(elm.length) - 1;

    disableButtons();
    disable_size_slider();
    disable_arr_btn();

    await mergesort(elm, left, right);
    
    enableButtons();
    enable_size_slider();
    enable_arr_btn();
});