// Function to find the logged-in user
function getLoggedInUser() {
  const userEmail = localStorage.getItem("userEmail");
  console.log("User email:", userEmail);

  if (!userEmail) {
    console.error("No email found in localStorage");
    return null;
  }

  return users.find(user => user.email === userEmail);
}

// Function to display client information
function displayClientInfo() {
  const client = getLoggedInUser();

  if (client) {
    const clientInfoDiv = document.getElementById("client-info");
    clientInfoDiv.innerHTML = `
          <h2>Hello, ${client.name}</h2>
          <p>Email: ${client.email}</p>
      `;
    console.log("Client information displayed");
  } else {
    console.warn("Redirecting to login page");
    window.location.href = "/en/login-en.html"; // Redirect to English login page
  }
}

// Function to display the file list
function displayFileList() {
  const files = [
    { name: "Invoice - January", url: "/files/invoice-january.pdf" },
    { name: "Project report", url: "/files/project-report.pdf" },
    { name: "Site mockup - February", url: "/files/mockup-february.zip" },
  ];

  const fileListUl = document.querySelector("#file-list ul");
  files.forEach((file) => {
    const li = document.createElement("li");
    li.classList.add("file-item");
    li.innerHTML = `<span>${file.name}</span> <a href="${file.url}" download>Download</a>`;
    fileListUl.appendChild(li);
  });
  console.log("File list displayed");
}

// Logout function
function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("userEmail");
  console.log("User logged out, redirecting to login page");
  window.location.href = "/en/login-en.html"; // Redirect to English login page
}

// Check if the user is logged in
document.addEventListener("DOMContentLoaded", function () {
  const loggedIn = localStorage.getItem("loggedIn");

  if (!loggedIn) {
    console.warn("User not logged in, redirecting to login");
    window.location.href = "/en/login-en.html";
  } else {
    console.log("User logged in");
    displayClientInfo(); // Display client info
    displayFileList();   // Display client files
  }
});

// Logout event handler
document.getElementById("logout").addEventListener("click", logout);
