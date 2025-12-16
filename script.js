    const form = document.getElementById('feedbackForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        successMessage.style.display = 'block';
      } else {
        alert('Submission failed. Please try again.');
      }
    });