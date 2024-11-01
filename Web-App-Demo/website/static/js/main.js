document.addEventListener('DOMContentLoaded', function() {
    // Button handlers
    const tryDemoBtn = document.getElementById('tryDemoBtn');
    const startPracticeBtn = document.getElementById('startPracticeBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    // Add smooth scrolling to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Demo dialog
    function showDemoDialog() {
        const dialog = document.createElement('div');
        dialog.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm';
        dialog.innerHTML = `
            <div class="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-md w-full">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Start AI Interview Demo</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-6">Ready to practice? Our AI interviewer will ask you common interview questions and provide feedback on your responses.</p>
                <div class="space-y-4">
                    <button onclick="window.location.href='/interview-demo'" class="w-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                        Start Interview
                    </button>
                    <button class="w-full border border-gray-200 dark:border-gray-800 px-4 py-2 rounded-lg text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors close-dialog">
                        Cancel
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(dialog);
        
        // Close dialog handler
        dialog.querySelector('.close-dialog').addEventListener('click', () => {
            dialog.remove();
        });
    }

    // Event listeners
    tryDemoBtn.addEventListener('click', showDemoDialog);
    startPracticeBtn.addEventListener('click', () => {
        window.location.href = '/auth/login';
    });
    learnMoreBtn.addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
}); 