document.getElementById('developerBtn').addEventListener('mouseover', function() {
    document.getElementById('developerInfo').classList.remove('hidden');
});

document.getElementById('developerBtn').addEventListener('mouseout', function() {
    document.getElementById('developerInfo').classList.add('hidden');
});

document.getElementById('loginBtn').addEventListener('click', function() {
    // Redirect to homepage
    window.location.href = 'homepage.html';
});
