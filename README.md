# Resume-To-Job-Matcher  
## Description  
A Google Chrome Extension that compares job page descriptions and informs the user how similar the job posting's requirements are to his or her resume. Resume-To-Job-Matcher saves the user's time because they immediately know whether to apply or to change their resume before applying. It also increases the user's chances of getting the interview as they are less likely to blindly apply when using this extension.

Twinword             |  RapidAPI
:-------------------------:|:-------------------------:
![Twinword](https://speechify.com/wp-content/uploads/2022/10/twinword-ideas.png)  |  ![RapidAPI](https://rapidapi.com/static-assets/default/favicon-8e7d522e-653f-4edd-ac27-3f6ed950e45d.png)
  
## Details  
* Written in Javascript, HTML, and CSS.
* Utilizes TwinWord's Text Similarity API, which is accessed through RapidAPI pipeline.

## Easy Instructions
* Copy and paste your resume into the "work experience" box.
* Copy and paste the job description of the job you want to apply to.
* Click "Next" and a response will be generated for you.

## Response Breakdown
* The TwinWord API generates a dot product numerical answer, which is then edited slightly for better user understanding.
* A number between 0 and 10 indicates that there is very little overlap between the user's resume and the job description.
* A number between 10 and 50 indicates some overlap.
* Anything above 50 indicates significant overlap.
* The actual number (between 0 and 100) is also displayed, so the user can make their own scale if they want to.
