
const button = document.getElementById('toggle-switch');
const checkbox = document.getElementById('label');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
});