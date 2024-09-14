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
<p>First Name :${Fname}</p>
<p>Last Name :${Lname}</p>
<p>Email Address:${email}</p>
<p>Mobile Number :${number}</p>
<p>CNIC No :${CNIC}</p>
<p>Address${address}</p>

    <h2>Education :</h2>
    <p>${education}</p>

    <h2>Skills :</h2>
    <p>${skills}</p>

    <h2>Experience :</h2>
    <p>${experience}</p>

`;
        const resumeOutput = document.getElementById('Output');
        if (resumeOutput) {
            resumeOutput.innerHTML = output;
        }
        else {
            alert('Error: Could not find the output section.');
        }
    }
    else {
        console.error('Error: Could not find the necessary fields');
    }
});
