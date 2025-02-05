// Disable right-click context menu
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable keyboard shortcuts and F12
document.addEventListener("keydown", (e) => {
  // Prevent F12
  if (e.key === "F12") {
    e.preventDefault();
    return false;
  }

  // Prevent Ctrl+Shift+I (Chrome, Firefox, Safari)
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
    return false;
  }

  // Prevent Ctrl+Shift+J (Chrome)
  if (e.ctrlKey && e.shiftKey && e.key === "J") {
    e.preventDefault();
    return false;
  }

  // Prevent Ctrl+Shift+C (Chrome)
  if (e.ctrlKey && e.shiftKey && e.key === "C") {
    e.preventDefault();
    return false;
  }

  // Prevent Ctrl+U (View Source)
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
    return false;
  }
});

// Disable devtools through console
setInterval(() => {
  const devtools = /./;
  devtools.toString = function () {
    window.location.reload();
  };
  console.log("%c", devtools);
}, 1000);

const otpForm = document.getElementById("otpForm");
const otpInput = document.getElementById("otpInput");
const message = document.getElementById("message");

otpForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const enteredOtp = otpInput.value;
  const correctOtp = "2881";
  // Show loading message while verifying
  message.textContent = "Verifying...";
  message.style.color = "blue";

  // Simulate verification delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (enteredOtp === correctOtp) {
    message.textContent = "OTP verification successful!";
  } else {
    message.textContent = "Invalid OTP. Please try again.";
    message.style.color = "black";
  }
});
