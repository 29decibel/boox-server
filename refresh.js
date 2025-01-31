// Set refresh interval to 1 minute (60000 milliseconds)
const REFRESH_INTERVAL = 60000;

function updateLastRefreshTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    document.getElementById('lastRefresh').textContent = `${dateString} ${timeString}`;
}

function refreshPage() {
    window.location.href = '/';
    window.location.reload();
}

// Update timestamp immediately when page loads
updateLastRefreshTime();

// Set up the auto-refresh timer
setInterval(refreshPage, REFRESH_INTERVAL);

// Start countdown timer
let countdown = REFRESH_INTERVAL / 1000;
setInterval(() => {
    countdown--;
    if (countdown < 0) countdown = REFRESH_INTERVAL / 1000;
    const lastRefreshElement = document.getElementById('willRefresh');
    lastRefreshElement.textContent = `(refreshing in ${countdown}s)`;
}, 1000);
