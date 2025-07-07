// Select all next/prev buttons
const nextPrevBtns = document.querySelectorAll('.nextprev-btn');

// Add event listeners to all navigation buttons
nextPrevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const pageId = btn.getAttribute('data-page');
    const page = document.getElementById(pageId);

    if (btn.classList.contains('back')) {
      page.classList.remove('turn');
    } else {
      page.classList.add('turn');
    }
  });
});

// Optional: Back to profile button
const backProfileBtn = document.querySelector('.back-profile');
if (backProfileBtn) {
  backProfileBtn.addEventListener('click', () => {
    // Reset all turned pages
    document.querySelectorAll('.book-page.turn').forEach(page => {
      page.classList.remove('turn');
    });
  });
}
