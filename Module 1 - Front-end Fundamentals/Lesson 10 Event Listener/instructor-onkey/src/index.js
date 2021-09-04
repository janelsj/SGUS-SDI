function onKeyUpHandler(){
    console.log('on key up');
}

function onKeyDownHandler(){
    console.log('on key down');
}


function countChar(){
    const val = document.querySelector("textarea").value;
    document.querySelector("span").innerText = val.length;
}