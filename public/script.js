
const contentData = {
    mission: "<h2>Our Mission</h2><p>To create and promote...</p>",
    about: "<h2>About Us</h2><p>Our beliefs and core principles...</p>",
    contact: "<h2>Contact</h2><p>Email us at info@communicationvital.com...</p>"
};

function showSection(section) {
    document.getElementById('content').innerHTML = contentData[section];
}

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.reveal');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

const teamData = [
    { name: "John Doe", role: "Founder", bio: "Passionate about making a difference..." },
    { name: "Jane Smith", role: "Director", bio: "Focused on fostering communication..." }
];

function loadTeam() {
    const teamSection = document.getElementById('team');
    teamData.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.innerHTML = `<h3>${member.name}</h3><p>${member.role}</p><p>${member.bio}</p>`;
        teamSection.appendChild(memberDiv);
    });
}

window.onload = loadTeam;

function toggleModal() {
    document.getElementById('modal').classList.toggle('hidden');
}

function submitForm() {
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thank you for subscribing, ${email}!`);
        toggleModal();
    } else {
        alert('Please enter a valid email.');
    }
}
