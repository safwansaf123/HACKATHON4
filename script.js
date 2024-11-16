// get refernce to the form and display
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var Education = document.getElementById('Education').value;
    var Skills = document.getElementById('Skills').value;
    var Experience = document.getElementById('Experience').value;
    // Generate the resume content dynamically
    var resumeHTML = "<h2><b>Editable-Resume</b></h2> \n<h3>Personal Information</h3> \n<p><b>name:</b> <span contenteditable=\"true\">".concat(name, "</span></p> \n<p><b>email:</b> <span contenteditable=\"true\">").concat(email, "</span></p> \n<p><b>phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p> \n\n<h3><b>Education</b></h3> <p contenteditable=\"true\">").concat(Education, "</p><h3> \n\n<b>Experience</b></h3> <p contenteditable=\"true\">").concat(Experience, "</p> \n\n<h3><b>Skills</b></h3> <p contenteditable=\"true\">").concat(Skills, "</p>");
    // display the resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing');
    }
});
