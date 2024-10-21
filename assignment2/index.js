document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const bugInput = document.getElementById('bugTitle');
    const issueInput = document.getElementById('issue');
    const osInput = document.getElementById('optionError');
    const screenshotInput = document.getElementById('screenshot');
}

 // Real-time validation
 bugInput.addEventListener('input', () => {
    validateBug();
});
issueInput.addEventListener('input', () => {
    validateIssue();
});
osInput.addEventListener('input', () => {
    validateOs();
});
screenshotInput.addEventListener('input', () => {
    validatescreenshot();
});

//Validation functions
    function validateForm() {
        const isBugValid = validateBug();
        const isIssueValid = validateIssue();
        const isOsValid = validateOs();
        const isScreenshotValid = validatescreenshot();
        return isBugValid && isIssueValid && isOsValid  && iscreenshotValid;
    }

    function validateBug() {
        const bugValue = BugInput.value.trim();
        const BugError = document.getElementById('BugError');
        if (bugTitle === '') {
            document.getElementById('bugError').style.display = 'inline';
            isValid = false;
        }
        }
     function validateIssue() {
            const issueValue = issueInput.value.trim();
            const issueError = document.getElementById('issueError');
                 if (issue === '') {
                document.getElementById('issueError').innerText = '* Required';
                document.getElementById('issueError').style.display = 'inline';
                isValid = false;
            }
    }
);
