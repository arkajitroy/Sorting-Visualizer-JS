// Selection sort function

async function selection(){
    console.log("In selection()");
    const elm = document.querySelectorAll(".bar");

    for(let i=0; i<elm.length; i++){
        let min = i;
        elm[i].style.background = 'grey';

        for(let j=i+1; j<elm.length; j++){
            elm[i].style.background = 'blue';

            await waitforme(delay);
            if(parseInt(elm[j].style.height) < parseInt(elm[min].style.height)){
                if(min !== i){
                    // new minimum index found
                    elm[min].style.background = "#f0056f";
                }
                min = j;
            }
            else{
                // if current is more than minimum index
                elm[j].style.background = "#bdeb17";
            }
        }
        await waitforme(delay);
        swap(elm[min], elm[i]);
        // minimum index value
        elm[min].style.background = "blue";
        // sorted element
        elm[i].style.background = "yellow";
    }
}

const select_sort_btn = document.querySelector(".selection");
select_sort_btn.addEventListener('click', async function(){
    disableButtons();
    disable_size_slider();
    disable_arr_btn();

    await selection();
    
    enableButtons();
    enable_size_slider();
    enable_arr_btn();
});