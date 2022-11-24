import serverConfig from "../config/serverConfig";

const submitMark = (markObject, callback) => {
    const request = new XMLHttpRequest();
    request.open("POST", serverConfig.serverURL + serverConfig.submitInterface);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(markObject));
    request.onload = () => {
        if (request.status === 200) {
            callback(null, request.responseText);
        } else {
            callback("Error", null);
        }
    }
}

export default submitMark;