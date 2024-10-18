// Content for the Mission, About, and Contact sections
const contentData = {
    mission: "<h2>Our Mission</h2><p>To create and promote...</p>",
    about: "<h2>About Us</h2><p>Our beliefs and core principles...</p>",
    contact: "<h2>Contact</h2><p>Email us at info@communicationvital.com...</p>"
};

// Function to display the correct section based on button click
function showSection(section) {
    const contentContainer = document.getElementById('content');
    let content = '';

    switch (section) {
        case 'mission':
            content = `
                <img src="/communication-vital-banner1.webp" alt="Mission Banner" class="responsive-banner">
                <h2>Our Mission</h2>
                <p>Our mission is to foster a supportive community for individuals with autistic language deficiencies and other communication challenges. We believe in the power of connection and inclusivity, providing a safe space where everyone can thrive.</p>
            `;
            break;
        case 'about':
            content = `
                <img src="/communication-vital-banner1.webp" alt="About Us Banner" class="responsive-banner">
                <h2>About Us</h2>
                <p>We are dedicated to building a certified autism-friendly community that offers opportunities for non-verbal adults and individuals with communication challenges. Our aim is to create a welcoming environment that supports growth and development for all.</p>
            `;
            break;
        case 'contact':
            content = `
                <img src="/communication-vital-banner1.webp" alt="Contact Banner" class="responsive-banner">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you! Feel free to reach out to us with any questions or to learn more about our programs. You can contact Jon Fleischer at <a href='mailto:jdfly19@yahoo.com'>jdfly19@yahoo.com</a> or call <a href='tel:+16617433143'>‪(661) 743-3143‬</a>.</p>
            `;
            break;
    }

    contentContainer.innerHTML = content;
}

// Function to reveal sections when scrolled into view
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

// Load the team data into the team section
const teamData = [
    { name: "Jon Fleischer", role: "Founder", bio: "Passionate about making a difference..." },
    { name: "David Menache", role: "IT", bio: "Assisting with website and communications..." }
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

// Function to toggle modal visibility
function toggleModal() {
    document.getElementById('modal').classList.toggle('hidden');
}

// Function to submit the form inside the modal
function submitForm() {
    const email = document.getElementById('modal-email').value;  // Modal email field
    if (email) {
        fetch('https://7bkbty4nua.execute-api.us-west-2.amazonaws.com/prod/subscribe', {  // Replace with your API Gateway URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.text())
        .then(message => {
            alert(message);
            toggleModal();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error saving your subscription. Please try again.');
        });
    } else {
        alert('Please enter a valid email.');
    }
}

document.getElementById('subscribeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior (which is a GET request)
    
    const email = document.getElementById('form-email').value;  // Get the email input field

    console.log('Submitting form with email:', email); // Log email to the console
    
    if (email) {
        // Make a POST request to the API Gateway endpoint
        fetch('https://7bkbty4nua.execute-api.us-west-2.amazonaws.com/prod/subscribe', {  // Replace with your API Gateway URL
            method: 'POST',  // Use POST method
            headers: {
                'Content-Type': 'application/json'  // Content type should be JSON
            },
            body: JSON.stringify({ email: email })  // Send the email as JSON
        })
        .then(response => {
            console.log('Response received:', response);
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
            if (data.message) {
                // Display success message
                document.getElementById('subscribe-message').innerHTML = `<p>${data.message}</p>`;
                document.getElementById('form-email').value = '';  // Clear the email field
            } else {
                // Handle any error or unexpected responses
                document.getElementById('subscribe-message').innerHTML = '<p>Subscription failed. Please try again.</p>';
            }
        })
        .catch(error => {
            console.error('Error during fetch:', error);
            document.getElementById('subscribe-message').innerHTML = '<p>There was an error. Please try again later.</p>';
        });
    } else {
        alert('Please enter a valid email.');
    }
});

