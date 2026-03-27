(() => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const submitBtn = document.getElementById('contact-submit');
    const alertBox = document.getElementById('contact-alert');

    const isLocalhost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    const apiBase = isLocalhost ? 'http://127.0.0.1:5601' : 'https://bms-s9o7.onrender.com';

    const setAlert = (message, type = 'success') => {
        alertBox.textContent = message;
        alertBox.classList.remove('hidden', 'bg-green-50', 'text-green-700', 'border', 'border-green-200', 'bg-red-50', 'text-red-700', 'border-red-200');

        if (type === 'success') {
            alertBox.classList.add('bg-green-50', 'text-green-700', 'border', 'border-green-200');
        } else {
            alertBox.classList.add('bg-red-50', 'text-red-700', 'border', 'border-red-200');
        }
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const message = document.getElementById('message')?.value.trim();

        if (!name || !email || !message) {
            setAlert('Please fill all required fields.', 'error');
            return;
        }

        if (!emailRegex.test(email)) {
            setAlert('Please enter a valid email address.', 'error');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-70', 'cursor-not-allowed');

        try {
            const response = await fetch(`${apiBase}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data?.error || 'Unable to submit your message right now.');
            }

            setAlert('Thanks! Your message has been sent successfully. We will contact you soon.', 'success');
            form.reset();
        } catch (error) {
            setAlert(error.message || 'Something went wrong. Please try again later.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
        }
    });
})();
