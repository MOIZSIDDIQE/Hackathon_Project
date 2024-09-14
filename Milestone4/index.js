document.getElementById("Resume")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const profilePicElement = document.getElementById("profilePic");
    const FnameElement = document.getElementById("Fname");
    const LnameElement = document.getElementById("Lname");
    const emailElement = document.getElementById("email");
    const cnicElement = document.getElementById("cnic");
    const numberElement = document.getElementById("number");
    const addressElement = document.getElementById("address");
    const educationElement = document.getElementById("education");
    const skillsElement = document.getElementById("skills");
    const experienceElement = document.getElementById("experience");
    if (FnameElement && profilePicElement && LnameElement && emailElement && cnicElement && numberElement && addressElement && educationElement && skillsElement && experienceElement) {
        const Fname = FnameElement.value;
        const Lname = LnameElement.value;
        const email = emailElement.value;
        const CNIC = cnicElement.value;
        const number = numberElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;
        // picture
        const picFile = profilePicElement.files?.[0];
        const picURL = picFile ? URL.createObjectURL(picFile) : "";
        const output = `
        
        <h1>Resume </h1>
        ${picURL ? `<img src="${picURL}" alt="Profile picture" class="picBox" >` : ''} 
<h2>Personal Information</h2>
<p>First Name : <span id="edit-Fname" class="edit">${Fname}</span> </p>
<p>Last Name : <span id="edit-Lname" class="edit"> ${Lname}</span> </p>
<p>Email Address: <span id="edit-email" class="edit"> ${email}</span> </p>
<p>Mobile Number : <span id="edit-number" class="edit"> ${number}</span> </p>
<p>CNIC No : <span id="edit-cnic" class="edit"> ${CNIC}</span> </p>
<p>Address :<span id="edit-address" class="edit"> ${address}</span> </p>

    <h2>Education :</h2>
    <p id="edit-education" class="edit" >${education}</p>

    <h2>Skills :</h2>
    <p id="edit-skills" class="edit" >${skills}</p>

    <h2>Experience :</h2>
    <p id="edit-experience" class="edit" >${experience}</p>

`;
        const resumeOutput = document.getElementById('Output');
        if (resumeOutput) {
            resumeOutput.innerHTML = output;
            Editable();
        }
    }
    else {
        console.error('Error: Could not find the necessary fields');
    }
});
function Editable() {
    const editableElement = document.querySelectorAll('.edit');
    editableElement.forEach(edit => {
        edit.addEventListener('click', function () {
            const atEdit = edit;
            const editVal = atEdit.textContent || "";
            if (atEdit.tagName === 'P' || atEdit.tagName === 'SPAN') {
                const editInput = document.createElement('input');
                editInput.type = 'text';
                editInput.value = editVal;
                edit.classList.add('editing-input');
                editInput.addEventListener('blur', function () {
                    atEdit.textContent = editInput.value;
                    atEdit.style.display = 'inline';
                    atEdit.remove();
                });
                atEdit.style.display = 'none';
                atEdit.parentNode?.insertBefore(editInput, atEdit);
                editInput.focus();
            }
        });
    });
}
