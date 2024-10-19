// Content for the Mission, About, and Contact sections
const contentData = {
    mission: `
        <h2>Our Mission</h2>
        <p>Our mission is to foster a supportive community for individuals with autistic language deficiencies and other communication challenges. We believe in the power of connection and inclusivity, providing a safe space where everyone can thrive.</p>
        <h3>Core Principles</h3>
        <ul>
            <li>All people deserve to be understood and supported</li>
            <li>Disability and challenges do not have to prevent a great life</li>
            <li>Everyone deserves a solid chance in life no matter what obstacles they face</li>
            <li>Safety is the first consideration, and all development follows from there</li>
        </ul>
        <h3>Our Aim</h3>
        <p>We aim to engage with, teach, and learn from a community of similarly language-challenged non-verbal adults and developmentally disabled individuals from all walks of life. Our strategy is to build a certified autism-friendly community where participants may live full time, part-time, or visit daily.</p>
        <h3>Our Challenge</h3>
        <p>Many parents face the overwhelming prospect that there is no place for their aging family members to reside and thrive once they can no longer provide for them. This issue is growing rapidly and creates enormous emotional strain for parents.</p>
        <h3>Stats</h3>
        <p>Autism is one of the fastest-growing disabilities. Non-verbal and minimally verbal individuals make up 25-30% of the autistic population.</p>
        <p>Today’s graduating classes report X number of non-verbal students per class.</p>
        <h3>Our Community</h3>
        <p>The hub includes sensory centers, tiny home living spaces, a store, a restaurant, a farm, and medical and security facilities.</p>
        <h3><a href="#" onclick="showSection('whatWeTeach')">What We Teach</a></h3> <!-- Clickable link for What we teach -->
        <p>We offer life skills training, from basic personal hygiene to advanced community participation. We emphasize mentorship through our “leg up” program, pairing advanced participants with beginners.</p>
    `,
    about: `
        <h2>About Us</h2>
        <p>We are dedicated to building a certified autism-friendly community that offers opportunities for non-verbal adults and individuals with communication challenges. Our aim is to create a welcoming environment that supports growth and development for all.</p>
        <h3>The Who</h3>
        <p>We are a group of like-minded individuals passionate about making a difference:</p>
        <ul>
            <li><strong><a href="#" onclick="showSection('Jon')">Jon Fleischer</a>:</strong> Founding member and bilingual financial services veteran.</li>
            <li><strong><a href="#" onclick="showSection('Larry')">Larry Banchero</a>:</strong> Entrepreneur and expert in multiple industries.</li>
            <li><strong><a href="#" onclick="showSection('Brian')">Brian Fleischer, Esq.</a>:</strong> Dual citizen of the U.S. and Mexico, a lawyer with decades of experience.</li>
            <li><strong><a href="#" onclick="showSection('David')">David Menache</a>:</strong> Network engineer and tech entrepreneur, contributing his technical expertise.</li>
        </ul>
        <h3><a href="#" onclick="showSection('theWhy')">The Why</a></h3> 
        <p>Jon, like many parents, is concerned about providing for his special needs nephew once he’s unable. This program was created to ensure continued care and support for William and others like him.</p>
        <h3><a href="#" onclick="showSection('williamsStory')">William’s Story</a></h3> 
        <p>William’s journey through a difficult childhood led to his care being taken over by Jon, who became his legal conservator. Jon’s experiences caring for William have deeply shaped his commitment to this cause.</p>
        <h3><a href="#" onclick="showSection('whatWeTeach')">What We Teach</a></h3> 
        <p>Click the link above to learn about the skills we teach, including life skills, outings, and more.</p>
    `,
    contact: `
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Feel free to reach out to us with any questions or to learn more about our programs.</p>
        <p>Contact Jon Fleischer at <a href='mailto:jdfly19@yahoo.com'>jdfly19@yahoo.com</a> or call <a href='tel:+16617433143'>‪(661) 743-3143‬</a>.</p>
    `
};

// Function to display the correct section based on button click
function showSection(section) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = contentData[section] || `<img src="/communication-vital-banner1.webp" alt="Banner" class="responsive-banner">`;
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
    { name: "Larry Banchero", role: "Co-founder", bio: "Entrepreneur and builder with a vast array of experience..." },
    { name: "Brian Fleischer", role: "Legal Advisor", bio: "Experienced lawyer contributing to legal aspects of the project..." },
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
    const modal = document.getElementById('modal');
    modal.classList.toggle('hidden');
}

// Function to submit the form inside the modal
function submitForm(event) {
    event.preventDefault(); // Prevent actual form submission

    const email = document.getElementById('modal-email').value;  // Modal email field
    if (email) {
        fetch('https://7bkbty4nua.execute-api.us-west-2.amazonaws.com/prod/subscribe', {  // Replace with your API Gateway URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                document.getElementById('subscribe-message').innerHTML = `<p>${data.message}</p>`;
                document.getElementById('modal-email').value = '';  // Clear the email field
                toggleModal();  // Close the modal after successful submission
                showSubscribeMessage();  // Show the success message
            } else {
                document.getElementById('subscribe-message').innerHTML = '<p>Subscription failed. Please try again.</p>';
                showSubscribeMessage();  // Show the error message
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('subscribe-message').innerHTML = '<p>There was an error. Please try again later.</p>';
            showSubscribeMessage();  // Show the error message
        });
    } else {
        alert('Please enter a valid email.');
    }
}

// Show the subscription message and hide it after a few seconds
function showSubscribeMessage() {
    const message = document.getElementById('subscribe-message');
    message.classList.remove('hidden');  // Show the message
    setTimeout(function() {
        message.classList.add('hidden');  // Hide it after 3 seconds
    }, 3000);
}

// Attach the form submission handler
document.getElementById('subscribe-form').addEventListener('submit', submitForm);


// Function to show the Mission section when the banner is clicked
function showMissionSection() {
    showSection('mission');
}

// Function to display the correct section based on button click
function showSection(section) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = contentData[section] || `<img src="/communication-vital-banner1.webp" alt="Banner" class="responsive-banner">`;
}

