document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const messageForm = document.getElementById('messageForm');
    const userInput = document.getElementById('userInput');
    const endInterviewBtn = document.getElementById('endInterviewBtn');

    // Initial question
    const initialQuestion = "Hello! I'm your interviewer powered by Claude. Let's start with a common question: Could you tell me about yourself and your background?";
    
    let currentQuestionIndex = 0;

    // Function to add a message to the chat
    function addMessage(content, isAI = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex items-start space-x-4 ${isAI ? '' : 'justify-end'} max-w-2xl mx-auto`;
        
        if (isAI) {
            messageDiv.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                    <span class="text-blue-600 dark:text-blue-400 text-sm font-semibold">A</span>
                </div>
                <div class="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-3 max-w-[80%]">
                    <p class="text-gray-900 dark:text-white text-sm">${content}</p>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="flex-1 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 max-w-[80%]">
                    <p class="text-gray-900 dark:text-white text-sm">${content}</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <span class="text-gray-600 dark:text-gray-300 text-sm font-semibold">Me</span>
                </div>
            `;
        }
        
        messageDiv.style.marginBottom = '0.75rem';
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to handle message submission
    async function handleSubmit() {
        const message = userInput.value.trim();
        if (message) {
            // Disable input while processing
            userInput.disabled = true;
            
            // Show user message
            addMessage(message, false);
            userInput.value = '';

            try {
                // Send message to Claude API
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: message })
                });

                const data = await response.json();

                if (data.status === 'success') {
                    // Show Claude's response
                    addMessage(data.response, true);
                    // Increment counter after response
                    currentQuestionIndex++;
                    updateProgress();
                } else {
                    addMessage("I apologize, but I encountered an error. Please try again.", true);
                }
            } catch (error) {
                console.error('Error:', error);
                addMessage("I apologize, but I encountered an error. Please try again.", true);
            }

            // Re-enable input unless interview is complete
            if (currentQuestionIndex < 3) {
                userInput.disabled = false;
                userInput.focus();
            }
        }
    }

    // Update progress bar
    function updateProgress() {
        const progressBar = document.querySelector('.bg-blue-600');
        // Calculate progress based on completed questions (0-based index)
        const progress = ((currentQuestionIndex) / 3) * 100;
        progressBar.style.width = `${progress}%`;
        
        const questionCounter = document.querySelector('.text-sm.text-gray-600');
        if (questionCounter) {
            if (currentQuestionIndex >= 3) {
                questionCounter.textContent = 'Demo completed';
                userInput.disabled = true;
                userInput.placeholder = "Demo interview completed";
                progressBar.style.width = '100%';  // Ensure bar is full at completion
            } else {
                questionCounter.textContent = `Question ${currentQuestionIndex + 1} of 3`;
            }
        }
    }

    // Event listeners
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleSubmit();
    });

    userInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    });

    endInterviewBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to end this interview?')) {
            window.location.href = '/';
        }
    });

    // Start the interview
    addMessage(initialQuestion, true);
    updateProgress();
}); 