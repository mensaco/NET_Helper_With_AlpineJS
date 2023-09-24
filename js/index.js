// copy text
window.copyText = function (textToCopy) {
    navigator.clipboard.writeText(textToCopy);
    document.body.removeChild(myTemporaryInputElement);
}
