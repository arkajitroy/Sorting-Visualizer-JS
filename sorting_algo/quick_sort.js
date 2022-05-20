
// quick sort algorithm

async function partition(elm, l, r){
    let i= l-1;
    elm[r].style.background = "blue";

    for(let j=l; j<=r-1; j++){
        elm[j].style.background = "yellow";
        await waitforme(delay);

        if(parseInt(elm[j].style.height) < parseInt(elm[r].style.height)){
            i++;
            swap(elm[i] , elm[j]);
            elm[i].style.background = "orange";
            
            if( i != j){
                elm[j].style.background = "orange";
            }
            await waitforme(delay);
        }
        else{
            elm[j].style.background = "red";
        }
    }
    i++;

    await waitforme(delay);
    swap(elm[i], elm[r]);

    //color
    elm[r].style.background = "orange";
    elm[i].style.background = "green";

    await waitforme(delay);

    // color
    for(let k=0; k<elm.length; k++){
        if(elm[k].style.background != "yellow"){
            elm[k].style.background = "yellow";
        }
    }
    return i;
}

// quick sort
async function quickSort(elm, l, r){
    if(l < r){
        let pivot = await partition(elm, l, r);
        await quickSort(elm, l, pivot-1);
        await quickSort(elm, pivot+1, r);
    }
    else{
        if(l >= 0 && r>= 0 && elm.length && r < elm.length){
            elm[r].style.background = "yellow";
            elm[l].style.background = "yellow";
        }
    }
}

// button activation and deactivation

const quick_sort_btn = document.querySelector('.quick');
quick_sort_btn.addEventListener('click', async function(){

    let elm = document.querySelectorAll('.bar');
    let left = 0;
    let right = elm.length - 1;

    disableButtons();
    disable_size_slider();
    disable_arr_btn();

    await quickSort(elm, left, right);
    
    enableButtons();
    enable_size_slider();
    enable_arr_btn();
});