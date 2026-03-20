document.addEventListener('DOMContentLoaded', () => {
    const sessionGrid = document.getElementById('sessionGrid');
    const sessionCountEl = document.getElementById('sessionCount');
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const videoPlayer = document.getElementById('videoPlayer');
    const closeButton = document.querySelector('.close-button');

    // Render session list
    function renderSessions() {
        sessionGrid.innerHTML = '';
        sessionData.forEach(session => {
            const card = document.createElement('div');
            card.className = 'session-card';
            
            // Check if it's a playable session
            const isPlayable = session.id && session.type === 'google-drive';
            
            card.innerHTML = `
                <div class="session-num">#${session.num}</div>
                <div class="session-info">
                    <div class="session-title">${session.speaker ? session.speaker + ' | ' : ''}${session.title}</div>
                    <div class="session-desc">${session.description}</div>
                </div>
                <div class="session-action">
                    ${isPlayable ? `
                        <div class="play-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                    ` : ''}
                </div>
            `;
            
            if (isPlayable) {
                card.onclick = () => openModal(session);
            }
            
            sessionGrid.appendChild(card);
        });
        
        sessionCountEl.textContent = `${sessionData.length} SESSIONS`;
    }

    // Modal logic
    function openModal(session) {
        // Convert view link to preview link for embedding
        // Link format: https://drive.google.com/file/d/ID/preview
        const embedUrl = `https://drive.google.com/file/d/${session.id}/preview`;
        
        videoPlayer.src = embedUrl;
        modalTitle.textContent = session.title;
        modalDesc.textContent = session.description;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeModal() {
        modal.style.display = 'none';
        videoPlayer.src = ''; // Stop video
        document.body.style.overflow = 'auto';
    }

    closeButton.onclick = closeModal;
    
    window.onclick = (event) => {
        if (event.target == modal) {
            closeModal();
        }
    };

    // Initial render
    renderSessions();
});
