function navigate(page) {
  document.querySelectorAll('.page').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(page).style.display = 'block';
}

function handleSubmit(event) {
  event.preventDefault();
  alert('Message sent!');
}
