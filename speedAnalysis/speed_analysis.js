let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
console.log(startTime, endTime);

function startTest() {
    document.getElementById('inputText').innerHTML = testText;

    let userInput = document.getElementById('userInput');
    userInput.value = '';
    userInput.focus();
    userInput.readOnly = false;
    startTime = new Date().getTime();
    console.log(startTime, endTime);
}

function endTest() {
    if (!startTime) {
        alert("Click Start first");
        return;
    }
    console.log(startTime, endTime);
    endTime = new Date().getTime();
    document.getElementById('output').innerHTML = "Time taken: " + (endTime - startTime) + " Result:" + (testText === document.getElementById('userInput').value)+" Words:"+(document.getElementById('userInput').value.length)+ " WPS:"+(document.getElementById('userInput').value.length/((endTime - startTime)/1000));
}