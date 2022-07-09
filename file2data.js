const dropzone = document.querySelector(".dropzone");
const fileinput = document.querySelector("#file");
const copybtn = document.querySelector("#copybtn");
const dataUrl = document.querySelector(".url");
let dataurl = "";

document.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropzone.classList.add("fileover");
});

document.addEventListener("dragleave", (event) => {
  dropzone.classList.remove("fileover");
});

dropzone.addEventListener("drop", (event) => {
  event.preventDefault();

  event.target.classList.remove("fileover");

  handleFileInput(event.dataTransfer.files[0]);
});

function handleFileInput(file) {
  var reader = new FileReader();

  reader.readAsDataURL(file);

  reader.addEventListener("load", function () {
    dataurl = this.result;
    dataUrl.innerHTML = dataurl;
  });
}

document.querySelector("#copybtn").addEventListener("click", function () {
  navigator.clipboard.writeText(dataurl);
});

document.querySelector("#newtab").addEventListener("click", function () {
  console.log("opening", dataurl);
  const newWindow = window.open("about:blank");
  newWindow.document.write("<iframe width='100%' height='100%' src='" + dataurl + "' frameborder='0' style='margin:0'></iframe>");
});