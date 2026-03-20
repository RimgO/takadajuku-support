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
            
            // Check session type
            const isGoogleDrive = session.type === 'google-drive';
            const isExternal = session.type === 'external';
            const isNone = session.type === 'none' || !session.link;
            
            card.innerHTML = `
                <div class="session-num">#${session.num}</div>
                <div class="session-info">
                    <div class="session-title">${session.speaker ? session.speaker + ' | ' : ''}${session.title}</div>
                    <div class="session-desc">${session.description}</div>
                </div>
                <div class="session-action">
                    ${!isNone ? `
                        <div class="play-button">
                            ${isGoogleDrive ? `
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            ` : `
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            `}
                        </div>
                    ` : ''}
                </div>
            `;
            
            if (isGoogleDrive) {
                card.onclick = () => openModal(session);
            } else if (isExternal) {
                card.onclick = () => window.open(session.link, '_blank');
            }
            
            sessionGrid.appendChild(card);
        });
        
        sessionCountEl.textContent = `${sessionData.length} SESSIONS`;
    }

    // Modal logic
    function openModal(session) {
        const embedUrl = `https://drive.google.com/file/d/${session.link}/preview`;
        
        videoPlayer.src = embedUrl;
        modalTitle.textContent = session.title;
        modalDesc.textContent = session.description;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        videoPlayer.src = ''; 
        document.body.style.overflow = 'auto';
    }

    closeButton.onclick = closeModal;
    
    window.onclick = (event) => {
        if (event.target == modal) {
            closeModal();
        }
    };

    renderSessions();
});
