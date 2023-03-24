
const accordionQuestion = document.querySelectorAll('.accordion');

accordionQuestion.forEach(accordion => {
    accordion.addEventListener('click', () => {
    const accordionAnswer = accordion.nextElementSibling;

    if (accordionAnswer.style.display === 'block') {
        accordionAnswer.style.display = 'none';
        accordion.classList.remove('open');
    } else {
        accordionAnswer.style.display = 'block';
        accordion.classList.add('open');
    }
  });
});
