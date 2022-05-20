
// BUBBLE SORT FUNCTION
async function bubble(){
    console.log('In bubble Function');
    const elm = document.querySelectorAll(".bar");
    
    for(let i=0; i<elm.length-1; i++){
        console.log('In i th loop');

        for(let j=0; j<elm.length-i-1; j++){
            console.log("In the j th loop");
            elm[j].style.background = 'blue';
            elm[j+1].style.background = 'blue';

            if(parseInt(elm[j].style.height) > parseInt(elm[j+1].style.height)){
                console.log("In IF CONDITION");
                await waitforme(delay);
                swap(elm[j], elm[j+1]);
            }
            elm[j].style.background = 'rgb(0, 119, 255)';       //rgb(0, 119, 255)
            elm[j+1].style.background = 'rgb(0, 119, 255)';
        }
        elm[elm.length-1-i].style.background = 'yellow';
    }
    elm[0].style.background = 'yellow';
}

const bubble_sort_btn = document.querySelector("#bubble");
bubble_sort_btn.addEventListener('click', async function(){
    disableButtons();
    disable_size_slider();
    disable_arr_btn();

    await bubble();
    
    enableButtons();
    enable_size_slider();
    enable_arr_btn();
});