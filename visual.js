
// SWAPING FUNCTION
function swap(elm1, elm2){
    console.log("In swap Function");

    let temp = elm1.style.height;
    elm1.style.height = elm2.style.height;
    elm2.style.height = temp;
}

// Disable sorting buttons
function disableButtons(){
    document.querySelector("#bubble").disabled = true;
    document.querySelector("#selection").disabled = true;
    document.querySelector("#insertion").disabled = true;
    document.querySelector("#merge").disabled = true;
    document.querySelector("#quick").disabled = true;
}

// Enable Sorting Buttons
function enableButtons(){
    document.querySelector("#bubble").disabled = false;
    document.querySelector("#selection").disabled = false;
    document.querySelector("#insertion").disabled = false;
    document.querySelector("#merge").disabled = false;
    document.querySelector("#quick").disabled = false;
}

// ENABLE AND DISABLE SIZE SLIDER

function disable_size_slider(){
    document.querySelector("#a_size").disabled = true;
}

function enable_size_slider(){
    document.querySelector("#a_size").disabled = false;
}

// ENABLE AND DISABLE SPEED SLIDER

function disable_speed_slider(){
    document.querySelector("#a_speed").disabled = true;
}

function enable_speed_slider(){
    document.querySelector("#a_speed").disabled = false;
}

// ENABLE AND DISABLE ARRAY BUTTON

function disable_arr_btn(){
    document.querySelector("#generate-array").disabled = true;
}

function enable_arr_btn(){
    document.querySelector("#generate-array").disabled = false;
}

// USING ASYNC FUNCTION TO VISUALIZE
function waitforme(milisec){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve('')
        }, milisec);
    })
}