// This code ensures that the JavaScript runs only after the entire HTML document has been loaded.
// This is important because the script needs to find and manipulate HTML elements.
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that have the class 'faq-question'.
    // These are the clickable headers of your FAQ items.
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Loop through each found FAQ question element.
    faqQuestions.forEach(item => {
        // Attach an event listener to each question.
        // When a question is clicked, the function inside will execute.
        item.addEventListener('click', () => {
            // Find the closest parent element with the class 'faq-item'.
            // This is the container for the question and its answer.
            const faqItem = item.closest('.faq-item');
            // Find the answer element within this specific FAQ item.
            const faqAnswer = faqItem.querySelector('.faq-answer');
            // Find the toggle icon (+/-) within the question.
            const toggleIcon = item.querySelector('.toggle-icon');

            // --- Logic to close other open FAQ items ---
            // Select all FAQ items that are currently active (have the 'active' class).
            document.querySelectorAll('.faq-item.active').forEach(openItem => {
                // If an 'openItem' is NOT the 'faqItem' that was just clicked,
                // then we want to close it.
                if (openItem !== faqItem) {
                    openItem.classList.remove('active'); // Remove the 'active' class
                    openItem.querySelector('.faq-answer').style.maxHeight = '0'; // Collapse its answer
                    openItem.querySelector('.toggle-icon').textContent = '+'; // Change its icon back to '+'
                }
            });

            // --- Logic to toggle the clicked FAQ item ---
            // Toggle the 'active' class on the clicked FAQ item.
            // If it has 'active', remove it; if it doesn't, add it.
            faqItem.classList.toggle('active');

            // Check if the clicked FAQ item now has the 'active' class (meaning it's expanding).
            if (faqItem.classList.contains('active')) {
                // Set the maxHeight of the answer to its full scrollHeight.
                // This makes the answer expand smoothly.
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                // Change the icon to a '-' (minus) to indicate it's open.
                toggleIcon.textContent = '-';
            } else {
                // If the item is no longer active (meaning it's collapsing),
                // set maxHeight back to '0' to hide the answer.
                faqAnswer.style.maxHeight = '0';
                // Change the icon back to a '+' (plus).
                toggleIcon.textContent = '+';
            }
        });
    });
});