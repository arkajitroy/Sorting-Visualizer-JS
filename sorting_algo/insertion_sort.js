
// insertion sort

async function insertion(){
    const elm = document.querySelectorAll(".bar");

    elm[0].style.background = "green";
    for(let i=1; i<elm.length; i++){
        let j = i-1;
        let key = elm[i].style.height;
        elm[i].style.background = "#aa93fa";

        await waitforme(delay);

        while(j>=0 && (parseInt(elm[j].style.height) > parseInt(key))){
            elm[j].style.background = "blue";
            elm[j+1].style.height = elm[j].style.height;    // swapping
            j--;

            await waitforme(delay);

            for(let k=i; k>=0; k--){
                elm[k].style.background = "yellow";
            }
        }
        elm[j+1].style.height = key;
        elm[i].style.background = "yellow";
    }
}

// button activation

const insert_sort_btn = document.querySelector(".insertion");
insert_sort_btn.addEventListener('click', async function(){
    disableButtons();
    disable_size_slider();
    disable_arr_btn();

    await insertion();
    
    enableButtons();
    enable_size_slider();
    enable_arr_btn();
});