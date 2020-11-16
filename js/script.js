var dialog = document.querySelector("dialog");
if (!dialog.showModal) {
  dialogPolyfill.registerDialog(dialog);
}
function fireModal() {
  dialog = document.querySelector("#dialog-1");
  dialog.showModal();
  dialog.querySelector(".close").addEventListener("click", function () {
    dialog.close();
  });
}

function fireLightBox() {
  lightBox = document.querySelector("#lightBox");
  lightBox.showModal();
  lightBox
    .querySelector(".close-lightBox")
    .addEventListener("click", function () {
      lightBox.close();
    });
}

// Script Hanya untuk demo
function fireModalKosongDemo() {
  dialog = document.querySelector("#dialog-kosong");
  dialog.showModal();
  dialog.querySelector(".close").addEventListener("click", function () {
    dialog.close();
  });
}
