// get refernce to the form and display


const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// handle form submission

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();   // prevent page reload


// collect input values

const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const phone = (document.getElementById('phone') as HTMLInputElement).value
const Education = (document.getElementById('Education') as HTMLInputElement).value
const Skills = (document.getElementById('Skills') as HTMLInputElement).value
const Experience = (document.getElementById('Experience') as HTMLInputElement).value


// Generate the resume content dynamically

const resumeHTML = `<h2><b>Editable-Resume</b></h2> 
<h3>Personal Information</h3> 
<p><b>name:</b> <span contenteditable="true">${name}</span></p> 
<p><b>email:</b> <span contenteditable="true">${email}</span></p> 
<p><b>phone:</b> <span contenteditable="true">${phone}</span></p> 

<h3><b>Education</b></h3> <p contenteditable="true">${Education}</p><h3> 

<b>Experience</b></h3> <p contenteditable="true">${Experience}</p> 

<h3><b>Skills</b></h3> <p contenteditable="true">${Skills}</p>`
;
// display the resume

if (resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else{
    console.error('the resume display element is missing');
}

});