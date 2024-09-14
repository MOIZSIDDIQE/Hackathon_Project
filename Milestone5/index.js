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
    const userElement = document.getElementById("username");
    if (FnameElement && profilePicElement && LnameElement && emailElement &&
        cnicElement && numberElement && addressElement && educationElement &&
        skillsElement && experienceElement && userElement) {
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
        // URL
        const user = userElement.value;
        const Path = `resumes/${user.replace(/\s+/g, '_')}_cv.html`;
        const output = `
        
        <h1>Resume </h1>
        ${picURL ? `<img src="${picURL}" alt="Profile picture" class="picBox" >` : ''} 
<h2>Personal Information</h2>
<p>First Name : <span contenteditable="" id="edit-Fname" class="edit">${Fname}</span> </p>
<p>Last Name : <span contenteditable="" id="edit-Lname" class="edit"> ${Lname}</span> </p>
<p>Email Address: <span contenteditable="" id="edit-email" class="edit"> ${email}</span> </p>
<p>Mobile Number : <span contenteditable="" id="edit-number" class="edit"> ${number}</span> </p>
<p>CNIC No : <span contenteditable="" id="edit-cnic" class="edit"> ${CNIC}</span> </p>
<p>Address :<span contenteditable="" id="edit-address" class="edit"> ${address}</span> </p>

    <h2>Education :</h2>
    <p contenteditable="" id="edit-education" class="edit" >${education}</p>

    <h2>Skills :</h2>
    <p contenteditable="" id="edit-skills" class="edit" >${skills}</p>

    <h2>Experience :</h2>
    <p contenteditable="" id="edit-experience" class="edit" >${experience}</p>

`;
        const resumeOutput = document.getElementById('Output');
        if (resumeOutput) {
            resumeOutput.innerHTML = output;
            resumeOutput.classList.remove("hidden");
            const container = document.createElement("div");
            container.id = "container";
            resumeOutput.appendChild(container);
            const download = document.createElement("button");
            download.textContent = "Download in PDF";
            download.addEventListener("click", () => {
                window.print();
            });
            container.appendChild(download);
            const shareLink = document.createElement("button");
            shareLink.textContent = "Copy Link";
            shareLink.addEventListener("click", async () => {
                try {
                    const link = `https://yourdomain.com/resumes/${user.replace(/\s+/g, "_")}cv.html`;
                    await navigator.clipboard.writeText(link);
                    alert("link copied on clipboard");
                }
                catch (err) {
                    console.error("Error: ", err);
                    alert("Failed to copy link on clipboard.Please try again");
                }
            });
            container.appendChild(shareLink);
        }
        else {
            console.error("Resume Output container not found in the document.");
        }
    }
    else {
        console.error('Error: Could not find the necessary fields');
    }
});
