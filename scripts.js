function submitMarks() {
    // Get the marks from the input fields
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    const cgpa = parseFloat(document.getElementById('cgpa').value);

    // Calculate the GPA
    const totalMarks = subject1 + subject2 + subject3 + subject4;
    const gpa = (totalMarks / 4).toFixed(2);

    // Populate the table with the marks
    document.getElementById('marksTableBody').innerHTML = `
        <tr><td>Subject 1</td><td>${subject1}</td></tr>
        <tr><td>Subject 2</td><td>${subject2}</td></tr>
        <tr><td>Subject 3</td><td>${subject3}</td></tr>
        <tr><td>Subject 4</td><td>${subject4}</td></tr>
    `;

    // Set the GPA and CGPA in the table
    document.getElementById('gpa').innerText = gpa;
    document.getElementById('displayCgpa').innerText = cgpa;

    // Show the results table
    document.getElementById('resultsTable').style.display = 'block';
}
