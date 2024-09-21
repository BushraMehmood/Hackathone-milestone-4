//get refrences to the form and display area
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//Handle form Submission
form.addEventListener('submit',(event: Event) => {
    event?.preventDefault(); //prevent page reload
    //collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //Generate the resume content dynamically
    const resumeHtml = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</p>
    <p><b>Education:</b><span contenteditable="true">${education}</p>
    <p><b>Experience:</b><span contenteditable="true">${experience}</p>
    <p><b>Skills:</b><span contenteditable="true">${skills}</p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    
    <he>Experience</h3>
    <p contenteditable="true">${experience}</p>

    
    <he>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;
    //Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHtml;
    }else(
        console.error(`The resume dislay is missing.`)
    )
    
})


