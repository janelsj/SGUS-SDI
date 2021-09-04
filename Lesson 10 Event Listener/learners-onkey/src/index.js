/*
    Instead of doing character count (demonstrated by instructor), you are to do a word count instead.     
*/

function up(){
    alert("key up");
}

function down(){
    alert("key down");
}

function wordCount() {
    // Add code here
    const characters = document.querySelector("textarea").value;
    const words = characters.split(" ");
    document.querySelector("span").innerText = words.length;
}