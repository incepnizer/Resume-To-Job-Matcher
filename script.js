document.addEventListener('DOMContentLoaded', function() {
    const exp = document.getElementById("exp");
    const weblink = document.getElementById("weblink");
    const submitButton = document.getElementById("submit");
    
    submitButton.addEventListener('click', () => {
        const expText = exp.value;
        let linkToScrap = weblink.value;

        // conditions before continuing
        if (expText === "") {
            alert("Please enter something in the experience field");
        } else if (linkToScrap === "") {
            alert("Please enter a link to get job description data from");
        } else if (linkToScrap.includes("glassdoor") === false) {
            alert("Please enter a valid job posting website");
        } else {
            // scrape then AI time
            let xhr = new XMLHttpRequest();
            linkToScrap = "https://cors-anywhere.herokuapp.com/" + linkToScrap;
            xhr.open("GET", linkToScrap, true);
            xhr.responseType = "document";
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let response = xhr.responseXML.querySelectorAll(".JobDescriptionContent.desc");
                    console.log(response);
                } 
            };
            //JobDescriptionContainer
            //JobDescriptionContent desc
            //xhr.send();
        }
    })
})


document.addEventListener('DOMContentLoaded', function() {
    let currentJob = "";
    console.log("whats");
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, jobID } = obj;
        if (type === "NEW") {
            currentJob = jobID;
            newJobLoaded();
        }
    });

    const newJobLoaded = () => {

    }
})



