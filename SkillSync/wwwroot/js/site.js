// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


/*Analyze Page javascript code*/

        // NOTE: This script is for demonstration purposes.
        // In the real application, the file upload and Gemini API call will be handled by the C# backend.
        document.addEventListener('DOMContentLoaded', () => {
            const fileUploadArea = document.getElementById('file-upload-area');
    const resumeFileInput = document.getElementById('resume-file-input');
    const fileNameDisplay = document.getElementById('file-name');
    const dreamJobInput = document.getElementById('dream-job-input');
    const analyzeBtn = document.getElementById('analyze-btn');
    const loader = document.getElementById('loader');
    const resultsSection = document.getElementById('results-section');
    const resultsContainer = document.getElementById('results-container');

    let fileIsSelected = false;

            fileUploadArea.addEventListener('click', () => resumeFileInput.click());

            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        fileUploadArea.addEventListener(eventName, e => {
            e.preventDefault();
            e.stopPropagation();
        }, false);
            });

            ['dragenter', 'dragover'].forEach(eventName => {
        fileUploadArea.addEventListener(eventName, () => fileUploadArea.classList.add('drag-over'), false);
            });

            ['dragleave', 'drop'].forEach(eventName => {
        fileUploadArea.addEventListener(eventName, () => fileUploadArea.classList.remove('drag-over'), false);
            });

            fileUploadArea.addEventListener('drop', e => {
        let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles(files);
            }, false);

            resumeFileInput.addEventListener('change', e => handleFiles(e.target.files), false);

    function handleFiles(files) {
                if (files.length > 0) {
                    const file = files[0];
    if (file.type === "application/pdf") {
        fileNameDisplay.textContent = `File selected: ${file.name}`;
    fileIsSelected = true;
                    } else {
        alert("Please upload a PDF file.");
    fileNameDisplay.textContent = "";
    fileIsSelected = false;
                    }
                }
            }

            analyzeBtn.addEventListener('click', () => {
                // This is a frontend simulation. The real logic will be in the C# backend.
                if (!fileIsSelected || dreamJobInput.value.trim() === '') {
        alert('Please upload a resume and enter your dream job.');
    return;
                }
    loader.classList.remove('hidden');
    resultsSection.classList.add('hidden');

                // Simulate API call delay
                setTimeout(() => {
                    const mockResult = `
    <h4>Your Current Skills</h4>
    <ul>
        <li>Python</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>React</li>
        <li>SQL</li>
        <li>Git</li>
    </ul>
    <h4>Key Skills for a Senior Python Developer</h4>
    <ul>
        <li>Advanced Python (Asyncio, Metaclasses)</li>
        <li>Django or Flask Framework</li>
        <li>Docker & Kubernetes</li>
        <li>Cloud Platforms (AWS, Azure, or GCP)</li>
        <li>System Design & Architecture</li>
        <li>PostgreSQL</li>
    </ul>
    <h4>Your Skill Gap</h4>
    <ul>
        <li>Advanced Python (Asyncio, Metaclasses)</li>
        <li>Docker & Kubernetes</li>
        <li>Cloud Platforms (AWS, Azure, or GCP)</li>
        <li>System Design & Architecture</li>
    </ul>
    <h4>Recommended Courses to Fill the Gaps</h4>
    <ul>
        <li><strong>Advanced Python:</strong> "Advanced Python" on Pluralsight</li>
        <li><strong>Docker & Kubernetes:</strong> "Docker & Kubernetes: The Complete Guide" on Udemy</li>
        <li><strong>Cloud Platforms (AWS):</strong> "AWS Certified Solutions Architect - Associate" course by A Cloud Guru</li>
        <li><strong>System Design:</strong> "System Design Interview" course on Educative.io</li>
    </ul>
    `;
    resultsContainer.innerHTML = mockResult;
    loader.classList.add('hidden');
    resultsSection.classList.remove('hidden');
                }, 2000);
            });
        });


//Dashboard page javascript


        document.addEventListener('DOMContentLoaded', () => {
            // Mock data - In a real app, this would come from the database for the logged-in user.
            const userProfile = {
        name: 'Alex Doe',
    email: 'alex.doe@example.com',
    skills: ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'SQL', 'Git', 'Figma']
            };

    const skillsContainer = document.getElementById('skills-container');

            // Render Skills
            const renderSkills = () => {
        skillsContainer.innerHTML = '';
                if (userProfile.skills.length > 0) {
        userProfile.skills.forEach(skill => {
            const skillElement = document.createElement('span');
            skillElement.className = 'skill-tag';
            skillElement.textContent = skill;
            skillsContainer.appendChild(skillElement);
        });
                } else {
        skillsContainer.innerHTML = `<p class="text-sm text-slate-400">No skills found. <a href="/Home/Analyze" class="text-blue-400 hover:underline">Analyze your resume</a> to get started.</p>`;
                }
            };

    // Initial render
    renderSkills();
        });