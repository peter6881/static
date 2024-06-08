// static/js/scripts.js

function convertText() {
    var inputText = document.getElementById("input-text").value;
    var fontStyle = document.getElementById("font-style").value;
    var outputText = document.getElementById("output-text");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Response Text:", xhr.responseText); // 打印响应内容
                outputText.value = xhr.responseText;
            } else {
                console.error("Error: " + xhr.statusText); // 打印错误信息
                outputText.value = 'Error: ' + xhr.statusText;
            }
        }
    };

    xhr.open("POST", "/convert", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("text=" + encodeURIComponent(inputText) + "&font=" + encodeURIComponent(fontStyle));
}
