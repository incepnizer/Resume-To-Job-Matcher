document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // Your form handling code here
    });
    const workExp = document.getElementById('exp');
    const jobDesc = document.getElementById('descp');
    const next = document.getElementById('submit');

    next.addEventListener('click', () => {
        const workText = workExp.value;
        const jobDe = jobDesc.value;

        if (workText === '' || jobDe === '') {
            alert("You've left some fields empty");
        } else {
            // using different api
            async function getData() {
                const url = `https://twinword-text-similarity-v1.p.rapidapi.com/similarity/?text1=${workText}&text2=${jobDe}`;

                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '0ccb5993c7msh14635afbbe6740ep1ef1bdjsn851236cc04e0',
                        'X-RapidAPI-Host': 'twinword-text-similarity-v1.p.rapidapi.com'
                    }
                };
                
                try {
                    const response = await fetch(url, options);
                    const result = await response.text();
                    console.log(result);

                    let end = 0;
                    
                    for (let i = 13; i < result.length; i++) {
                        if (result.substring(i, i + 1) === ',') {
                            end = i;
                            break;
                        }
                    }

                    let score = 100 * Number(result.substring(14, end));

                    switch (true) {
                        case (score <= 10):
                            score = score + " - your resume doesn't match too well and you should consider adding qualifications the company is looking for.";
                            break;
                        case (score <= 50):
                            score = score + " - your resume matches decently well, and you have a decent chance at getting an interview";
                            break;
                        case (score <= 100):
                            score = score + " - you have many qualifications the company is looking for and have a good change of landing the internship given a decent to good interview";
                    }
                    document.getElementById("result").innerHTML = score;
                    //console.log(score);


                } catch (error) {
                }
            }

            getData();

        }

    });
});

