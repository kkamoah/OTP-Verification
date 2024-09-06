
const otpForm = document.getElementById('otpForm');
const otpInput = document.getElementById('otpInput');
const message = document.getElementById('message');

otpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const enteredOtp = otpInput.value;
    const correctOtp = '2881'; 
    if (enteredOtp === correctOtp) {
        message.textContent = 'OTP verification successful!';
    } else {
        message.textContent = 'Invalid OTP. Please try again.';
    }
});