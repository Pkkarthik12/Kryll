document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const artifactCode = document.getElementById('artifact-code');
    const previewContainer = document.getElementById('preview-container');
    const copyBtn = document.getElementById('copy-btn');
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');

    // Sidebar Toggle
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    // Auto-resize textarea
    chatInput.addEventListener('input', () => {
        chatInput.style.height = 'auto';
        chatInput.style.height = (chatInput.scrollHeight) + 'px';
    });

    // Handle Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`${tab}-container`).classList.add('active');
        });
    });

    // Send Message
    async function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Clear input
        chatInput.value = '';
        chatInput.style.height = 'auto';

        // Add user message to UI
        addMessage(message, 'user');

        // Show typing indicator
        const typingId = addMessage('...', 'ai typing');

        try {
            const data = await API.chat(message);
            
            // Remove typing indicator
            document.getElementById(typingId).remove();

            // Add AI response
            addMessage(data.text, 'ai');

            // Handle Artifact
            if (data.artifact) {
                renderArtifact(data.artifact);
            }
        } catch (error) {
            document.getElementById(typingId).remove();
            addMessage('Sorry, something went wrong. Please try again.', 'system');
            console.error(error);
        }
    }

    function addMessage(text, type) {
        const id = 'msg-' + Date.now();
        const msgDiv = document.createElement('div');
        msgDiv.id = id;
        msgDiv.className = `message ${type}`;
        msgDiv.textContent = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return id;
    }

    function renderArtifact(artifact) {
        // Update Code View
        artifactCode.textContent = artifact.content;
        
        // Update Preview View
        if (artifact.language === 'html' || artifact.type === 'code') {
             // For a simple demo, we'll just inject HTML or show a stylized block
             previewContainer.innerHTML = `<div class="artifact-preview-card">
                <h3>${artifact.title}</h3>
                <div class="artifact-meta">${artifact.language}</div>
                <div class="artifact-body">${artifact.content.replace(/\n/g, '<br>')}</div>
             </div>`;
        }

        // Switch to preview tab automatically
        tabBtns[0].click();
    }

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Copy to clipboard
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(artifactCode.textContent).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => copyBtn.textContent = originalText, 2000);
        });
    });
});
