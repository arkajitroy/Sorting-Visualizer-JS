// ARRAY SIZE

// selecting the array slider using DOM
var array_size = document.querySelector('#a_size');

array_size.addEventListener('input', () =>{
    console.log(array_size.value, typeof(array_size.value));
    create_new_array(parseInt(array_size.value));
});

// creating arrays and calling the function
// creating blank array to store the arrays
var array = [];
var bar_count = 60;
var delay = 260;

//ARRAY SPEED
var delayElement = document.querySelector('#a_speed');

delayElement.addEventListener('input', () =>{
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
})

// Now calling the create new array function
create_new_array();

// creating the create new array function
function create_new_array(bar_count){
    delete_child();

    array = [];
    for(let i=0; i<bar_count; i++){
        array.push(Math.floor(Math.random() * 250)+1);
    }
    console.log(array);

    const bars = document.querySelector('#data-group');

    //creating multiple element div using loop
    for(let i=0; i<bar_count; i++){
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*1.5}px`;
        bar.classList.add('bar');
        bar.classList.add('data-bar');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// helper function to delete the array
function delete_child(){
    const bar = document.querySelector("#data-group");
    bar.innerHTML = '';
}

//selecting generate array button
var gen_array_btn = document.querySelector("#generate-array");
gen_array_btn.addEventListener("click", () =>{
    console.log("From newArray -> "+array_size.value);
    console.log("From newArray -> "+delay);
    enable_arr_btn();
    enable_size_slider();
    create_new_array(array_size.value);
});