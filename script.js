document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });
    }
});

function toggleEndpoint(element) {
    const card = element.closest('.endpoint-card');
    if (card) {
        card.classList.toggle('open');
    }
}

function showTab(event, tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

function toggleFaq(element) {
    const item = element.closest('.faq-item');
    if (item) {
        item.classList.toggle('open');
    }
}
