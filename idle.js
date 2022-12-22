let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back to me too 🥺";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})