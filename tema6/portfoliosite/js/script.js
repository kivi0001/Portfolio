// TOOLS DIALOG //

const openBtn = document.querySelector("#open_btn");
const closeBtn = document.querySelector("#close_btn");
const tools = document.querySelector("#tools");

openBtn.addEventListener("click", openDialog);
closeBtn.addEventListener("click", closeDialog);

function openDialog(){
    document.querySelector ("#tools").showModal();
}

function closeDialog(){
    document.querySelector ("#tools").close();
}
