document.addEventListener('DOMContentLoaded', function() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const pdfView = document.querySelector('.pdf-view');
    const htmlView = document.querySelector('.html-view');

    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            viewButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Toggle views
            const view = this.getAttribute('data-view');
            if (view === 'pdf') {
                pdfView.classList.add('active');
                htmlView.classList.remove('active');
            } else {
                pdfView.classList.remove('active');
                htmlView.classList.add('active');
            }
        });
    });
}); 