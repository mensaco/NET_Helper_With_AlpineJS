window.copyText = function (textToCopy) {


    // var myTemporaryInputElement = document.createElement("input");
    // myTemporaryInputElement.type = "text";
    // myTemporaryInputElement.value = textToCopy;

    // document.body.appendChild(myTemporaryInputElement);

    // myTemporaryInputElement.select();
    // myTemporaryInputElement.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(textToCopy);

    document.body.removeChild(myTemporaryInputElement);

}