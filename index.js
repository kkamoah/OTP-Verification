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
