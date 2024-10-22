// Content for the Mission, About, and Contact sections
const contentData = {
    mission: `

    <div class="title-share">
        <h2><i class="fas fa-rocket"></i> Our Mission</h2>
        <div class="share-buttons">
            <a href="#" onclick="shareOnFacebook()" class="share-button facebook">
                <i class="fab fa-facebook-f"></i> Share on Facebook
            </a>
            <a href="#" onclick="shareOnTwitter()" class="share-button twitter">
                <i class="fab fa-twitter"></i> Share on Twitter
            </a>
            <a href="#" onclick="shareOnLinkedIn()" class="share-button linkedin">
                <i class="fab fa-linkedin-in"></i> Share on LinkedIn
            </a>
        </div>
    </div>


        <p>Our mission is to foster a supportive community for individuals with autistic language deficiencies and other communication challenges. We believe in the power of connection and inclusivity, providing a safe space where everyone can thrive.</p>
        <h3>Core Principles</h3>
            <ul class="fancy-icons-list">
                <li><i class="fas fa-star" style="color: gold;"></i> All people deserve to be understood and supported</li>
                <li><i class="fas fa-star" style="color: gold;"></i> Disability and challenges do not have to prevent a great life</li>
                <li><i class="fas fa-star" style="color: gold;"></i> Everyone deserves a solid chance in life no matter what obstacles they face</li>
                <li><i class="fas fa-star" style="color: gold;"></i> Safety is the first consideration, and all development follows from there</li>
            </ul>
        <h3><i class="fas fa-bullseye"></i> Our Aim</h3>
        <figure class="our-aim-image">
            <img src="https://verballychallenged.inthingslimited.com/public/OurAim.png" alt="Our Aim Supportive Environment">
        </figure>
        <p>We aim to engage with, teach, and learn from a community of similarly language-challenged non-verbal adults and developmentally disabled individuals from all walks of life. Our strategy is to build a certified autism-friendly community where participants may live full time, part-time, or visit daily.</p>
    <!-- Clear the floats after the images -->
    <div style="clear: both;"></div>
        <h3><i class="fas fa-mountain"></i> Our Challenge</h3>
        <figure class="our-aim-image">
            <img src="https://verballychallenged.inthingslimited.com/public/frustrated-parent.png" alt="Our Aim Supportive Environment">
        </figure>
        <p>Many parents face the overwhelming prospect that there is no place for their aging family members to reside and thrive once they can no longer provide for them. This issue is growing rapidly and creates enormous emotional strain for parents.</p>
    <!-- Clear the floats after the images -->
    <div style="clear: both;"></div>
        <h3><i class="fas fa-chart-line"></i> Statistics</h3>
        <figure class="our-aim-image">
            <a class="no-link-icon" href="pa.html">
                <img id="hover-stats-image" src="https://verballychallenged.inthingslimited.com/public/trending-up.png" alt="Stats">
            </a>
            <figcaption style="text-align:center;position:relative;left:-10px;">
    <a class="no-link-icon" href="pa.html">Stats</a>
    </figcaption>
        </figure>
    

    <!-- Tooltip container -->
        <div id="tooltip-container" class="tooltip-hidden"></div>

        <p>Autism is one of the fastest-growing disabilities. Non-verbal and minimally verbal individuals make up 25-30% of the autistic population.</p>
        <p>Today’s graduating classes report X number of non-verbal students per class.</p>
        <!-- Clear the floats after the images -->
        <div style="clear: both;"></div>
        <h3><i class="fas fa-users"></i> Our Community</h3>
        <p>The hub includes sensory centers, tiny home living spaces, a store, a restaurant, a farm, and medical and security facilities.</p>
        <figure style="text-align: center;">
            <img src="https://verballychallenged.inthingslimited.com/public/tiny_homes.jpg" alt="Picnic Outing" style="width: 80%; max-width: 500px; border-radius: 10px;">
        </figure>

        <h3><i class="fas fa-chalkboard-teacher"></i><a href="#" onclick="showSection('whatWeTeach')"> What We Teach</a></h3> <!-- Clickable link for What we teach -->
        <p>We offer life skills training, from basic personal hygiene to advanced community participation. We emphasize mentorship through our “leg up” program, pairing advanced participants with beginners.</p>
    `,
    about: `

        <div class="title-share">
          <h2><i class="aboutpage fa-solid fa-user-circle"></i> About Verbal Pathways</h2>
            <div class="share-buttons">
                <a href="#" onclick="shareOnFacebook()" class="share-button facebook">
                    <i class="fab fa-facebook-f"></i> Share on Facebook
                </a>
                <a href="#" onclick="shareOnTwitter()" class="share-button twitter">
                    <i class="fab fa-twitter"></i> Share on Twitter
                </a>
                <a href="#" onclick="shareOnLinkedIn()" class="share-button linkedin">
                    <i class="fab fa-linkedin-in"></i> Share on LinkedIn
                </a>
            </div>
        </div>


        <p>We are dedicated to building a certified autism-friendly community that offers opportunities for non-verbal adults and individuals with communication challenges. Our aim is to create a welcoming environment that supports growth and development for all.</p>
        <h3><i class="aboutpage fa-solid fa-users"></i> The Who</h3>
        <p>We are a group of like-minded individuals passionate about making a difference:</p>
        <ul class="custom-list">
            <li>
                <strong><a class="no-link-icon" href="#" onclick="showSection('Jon')">Jon Fleischer</a>:</strong> Founding member and bilingual financial services veteran.
            </li>
            <li>
                <strong><a class="no-link-icon" href="#" onclick="showSection('Larry')">Larry Banchero</a>:</strong> Entrepreneur and expert in multiple industries.
            </li>
            <li>
                <strong><a class="no-link-icon" href="#" onclick="showSection('Brian')">Brian Fleischer, Esq.</a>:</strong> Dual citizen of the U.S. and Mexico, a lawyer with decades of experience.
            </li>
            <li>
                <strong><a class="no-link-icon" href="#" onclick="showSection('David')">David Menache</a>:</strong> Network engineer and tech entrepreneur, contributing his technical expertise.
            </li>
        </ul>
        <h3><i class="aboutpage fas fa-question-circle"></i> <a href="#" onclick="showSection('theWhy')">The Why</a></h3> 
        <p>Jon, like many parents, is concerned about providing for his special needs nephew once he’s unable. This program was created to ensure continued care and support for William and others like him.</p>
        <h3><i class="aboutpage fas fa-file"></i> <a href="#" onclick="showSection('williamsStory')">William's Story</a></h3> 
        <p>William’s journey through a difficult childhood led to his care being taken over by Jon, who became his legal conservator. Jon’s experiences caring for William have deeply shaped his commitment to this cause.</p>
        <h3><i class="fas fa-chalkboard-teacher"></i> <a href="#" onclick="showSection('whatWeTeach')">What we Teach</a></h3> 
        <p>Click the link above to learn about the skills we teach, including life skills, outings, and more.</p>
    `,
    contact: `

        <div class="title-share">
            <h2><i class="fa-solid fa-envelope"></i> Contact Us</h2>
            <div class="share-buttons">
                <a href="#" onclick="shareOnFacebook()" class="share-button facebook">
                    <i class="fab fa-facebook-f"></i> Share on Facebook
                </a>
                <a href="#" onclick="shareOnTwitter()" class="share-button twitter">
                    <i class="fab fa-twitter"></i> Share on Twitter
                </a>
                <a href="#" onclick="shareOnLinkedIn()" class="share-button linkedin">
                    <i class="fab fa-linkedin-in"></i> Share on LinkedIn
                </a>
            </div>
        </div>

        <p>We'd love to hear from you! Feel free to reach out to us with any questions or to learn more about our programs.</p>
        <p>Contact Verbal Pathways at <a class="no-link-icon" href='mailto:williams-team@inthingslimited.com'>williams-team@inthingslimited.com</a> or call <a class="no-link-icon" href='tel:+16617433143'>‪(661) 743-3143‬</a>.</p>
    <p><img class="contactuspic" src=https://verballychallenged.inthingslimited.com/public/pexels-alexander-mass-748453803-28964106.jpg></p>
    `
};



// Team data for display
const teamData = [
    { name: "Jon Fleischer", role: "Founder", email: "jon@inthingslimited.com", bio: "Passionate about making a difference..." },
    { name: "Larry Banchero", role: "Co-founder", email: "larry@inthingslimited.com", bio: "Entrepreneur and builder with a vast array of experience..." },
    { name: "Brian Fleischer", role: "Legal Advisor", email: "brianf@inthingslimited.com", bio: "Experienced lawyer contributing to legal aspects of the project..." },
    { name: "David Menache", role: "IT", email: "dave@inthingslimited.com", bio: "Assisting with website and communications..." }
];


// Function to generate Gravatar URL
function getGravatarUrl(email, size = 80) {
    const emailHash = md5(email.trim().toLowerCase());  // Hash email using MD5
    return `https://www.gravatar.com/avatar/${emailHash}?s=${size}&d=identicon`;  // Gravatar URL
}


// Function to load team content with links to specific member sections
function loadTeam() {
    const teamSection = document.getElementById('team');
    const placeholder = document.getElementById('team-placeholder');

    // Remove placeholder
    placeholder.style.display = 'none';

    // Add team content
    teamData.forEach(member => {
        // Create function name dynamically based on the first name
        const firstName = member.name.split(' ')[0]; // Get the first name
        const sectionFunction = `show${firstName}Section`; // Dynamic function name

        const memberDiv = document.createElement('div');
        memberDiv.innerHTML = `
            <img src="${getGravatarUrl(member.email)}" alt="${member.name}" class="gravatar-icon">
            <h3><a href="#" onclick="${sectionFunction}()">${member.name}</a></h3>
            <p>${member.role}</p>
            <p>${member.bio}</p>
        `;
        teamSection.appendChild(memberDiv);
    });

    // Add class to reveal the team section
    teamSection.classList.add('visible');
}


//// Function to load team content
//function loadTeam() {
    //const teamSection = document.getElementById('team');
    //const placeholder = document.getElementById('team-placeholder');

    //// Remove placeholder
    //placeholder.style.display = 'none';

    //// Add team content
    //teamData.forEach(member => {
        //const memberDiv = document.createElement('div');
        //memberDiv.innerHTML = `
            //<img src="${getGravatarUrl(member.email)}" alt="${member.name}" class="gravatar-icon">
            //<h3>${member.name}</h3>
            //<p>${member.role}</p>
            //<p>${member.bio}</p>
        //`;
        //teamSection.appendChild(memberDiv);
    //});

    //// Add class to reveal the team section
    //teamSection.classList.add('visible');
//}


// Function to reveal the team content when the user scrolls down
function revealTeamOnScroll() {
    const teamSection = document.getElementById('team');
    const sectionTop = teamSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight) {
        loadTeam();  // Load the team content
        window.removeEventListener('scroll', revealTeamOnScroll);  // Remove event listener to prevent repeated loading
    }
}


// Attach the scroll event listener
window.addEventListener('scroll', revealTeamOnScroll);

// Function to toggle modal visibility
function toggleModal() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('hidden');
}


// Function to submit the form inside the modal
function submitForm(event) {
    event.preventDefault();  // Prevent actual form submission

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
                document.getElementById('modal-email').value = '';  // Clear the email field
                toggleModal();  // Close the modal after successful submission
                showSubscribeMessage(data.message);  // Show the success message
            } else {
                showSubscribeMessage('Subscription failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showSubscribeMessage('There was an error. Please try again later.');
        });
    } else {
        alert('Please enter a valid email.');
    }
}


// Show the subscription message and hide it after a few seconds
function showSubscribeMessage(message) {
    const messageContainer = document.getElementById('subscribe-message');
    messageContainer.innerHTML = `<p>${message}</p>`;  // Set the message content
    messageContainer.style.display = 'flex';  // Show the message
    setTimeout(function() {
        messageContainer.style.display = 'none';  // Hide it after 3 seconds
    }, 3000);
}

// Attach the form submission handler
document.getElementById('subscribe-form').addEventListener('submit', submitForm);


// Function to show the Mission section when the banner is clicked
//function showMissionSection() {
    //showSection('mission');
//}
function showMissionSection() {
    // Display the mission section
    showSection('mission');

    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}

function showwhatWeTeachSection() {
    // Display the mission section
    showSection('whatWeTeach');

    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}

function showJonSection() {
    // Display the mission section
    showSection('Jon');

    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}

function showBrianSection() {
    // Display the mission section
    showSection('Brian');

    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}

function showLarrySection() {
    // Display the mission section
    showSection('Larry');

    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}

function showDavidSection() {
    // Display the mission section
    showSection('David');

    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}

// Function to display the correct section based on button click
function showSection(section) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = contentData[section] || `<img src="/communication-vital-banner1.webp" alt="Banner" class="responsive-banner">`;
}

contentData.williamsStory = `
    <h2><i class="aboutpage fas fa-file"></i> Our Inspiration</h2>
        <p>William’s journey through a difficult childhood led to his care being taken over by Jon, who became his legal conservator. Jon’s experiences caring for William have deeply shaped his commitment to this cause.</p>

    <figure class="story-image">
        <img src="https://verballychallenged.inthingslimited.com/public/enjoying_literature.jpg" alt="Enjoying Literature">
        <figcaption>Enjoying Literature</figcaption>
    </figure>

    <p>William often found himself in chaotic environments, where he was heavily medicated and sometimes left in the care of strangers.</p>
    

    <figure class="story-image">
        <img src="https://verballychallenged.inthingslimited.com/public/favorite_ride_at_the_pier.jpg" alt="Favorite Ride at Pier">
        <figcaption>Favorite Ride at the Pier</figcaption>
    </figure>

    <p>Jon became his full-time caretaker. Since then, Jon has dedicated his life to providing a safe, stable environment for William.</p>

    <figure class="story-image">
        <img src="https://verballychallenged.inthingslimited.com/public/ready_for_dinner_bubba_gumps.jpg" alt="Ready for Dinner at Bubba Gumps">
        <figcaption>Ready for Dinner at Bubba Gumps</figcaption>
    </figure>

    <!-- Clear the floats after the images -->
    <div style="clear: both;"></div>

    <p>Through consistent care, positive reinforcement, and patience, William has shown significant improvements.</p>
`;

contentData.Jon = `
    <h2><img src="${getGravatarUrl('jon@inthingslimited.com')}" alt="Jon Fleischer" class="gravatar-icon"> Jon Fleischer</h2>
    <p>Jon Fleischer is a retired bilingual financial services veteran with a diverse background in various industries. He has experience in:</p>
    <ul class="custom-list2">
        <li><i class="fas fa-star" style="color: gold;"></i> Financial services in California, Washington, Oregon, Mexico, and Nicaragua</li>
        <li><i class="fas fa-star" style="color: gold;"></i> Sales and marketing in the auto industry, textiles, and private equity</li>
        <li><i class="fas fa-star" style="color: gold;"></i> Farming and agriculture in Diriamba, Nicaragua</li>
        <li><i class="fas fa-star" style="color: gold;"></i> Construction and real estate in Aberdeen, Washington</li>
    </ul>
    <p>Jon is also a TESOL certified teacher of English as a second language, helping students and professionals of all ages and diverse backgrounds. His entrepreneurial spirit and varied experiences have made him a dedicated advocate for individuals with communication challenges.</p>
    <figure style="max-width: 400px; margin: 20px auto; text-align: center;">
        <img src="https://verballychallenged.inthingslimited.com/public/blood_draw_at_doc.jpg" alt="Jon Fleischer at the doctor's office" style="width: 100%; height: auto; border-radius: 10px;">
        <figcaption style="font-style: italic; margin-top: 10px;">Jon with William at a routine doctor's appointment.</figcaption>
    </figure>
    <h3>Personal Life</h3>
    <p>Jon has also been a caregiver and conservator for his nephew, William, who is afflicted with non-verbal autism. After the loss of William’s parents, Jon stepped in as his primary caregiver, dedicating his life to providing a safe, supportive environment for him.</p>
    <h3>Professional Background</h3>
    <p>Jon has founded several startup companies and operated businesses both domestically and internationally. His wealth of experience spans many fields, and he is now focused on creating and promoting a much-needed service for individuals who are unable to provide for themselves.</p>
    <p>His passion for helping those with communication challenges has driven his efforts to build a certified autism-friendly community that offers opportunities for non-verbal adults and individuals with special needs to live, learn, and thrive.</p>
`;

// Content for Larry Banchero
contentData.Larry = `
    <h2><img src="${getGravatarUrl('larry@inthingslimited.com')}" alt="Larry Banchero" class="gravatar-icon"> Larry Banchero</h2>
    <p>Larry Banchero is an impressive entrepreneur with a diverse background and a spirit of adventure. His extensive experience includes:</p>
    <ul class="custom-list2">
        <li><i class="fas fa-star" style="color: gold;"></i> Building and running a successful family business, Seattle Sorbet, which was eventually acquired by a large conglomerate</li>
        <li><i class="fas fa-star" style="color: gold;"></i> Master builder who has worked on ground-up projects and refurbishing dilapidated properties</li>
        <li><i class="fas fa-star" style="color: gold;"></i> Marketing expert with a proven track record in relationship-building and sales</li>
        <li><i class="fas fa-star" style="color: gold;"></i> Experience in the jewelry business in Osaka, Japan, and real estate development in Spain and Nicaragua</li>
    </ul>
    <p>Larry has partnered with Jon in several entrepreneurial endeavors and has served as both a mentor and an important team player. His ability to thrive under pressure and his expertise in many areas have made him an invaluable part of the team.</p>
    <h3>Personal Life</h3>
    <p>Larry has lived and worked abroad in various countries, including Japan, Spain, and Nicaragua. His dedication to building successful ventures and his strong work ethic have earned him respect in many industries.</p>
`;

// Content for Brian Fleischer
contentData.Brian = `
    <h2><img src="${getGravatarUrl('brianf@inthingslimited.com')}" alt="Brian Fleischer, Esq." class="gravatar-icon"> Brian Fleischer</h2>
    <p>Brian Fleischer is a dual citizen of Mexico and the United States, born in Mexico City and raised in Los Angeles. He brings a wealth of legal experience to the team, including:</p>
    <ul class="custom-list2">
        <li><i class="fas fa-star" style="color: gold;"></i> Undergraduate studies at the University of Arizona</li>
        <li><i class="fas fa-star" style="color: gold;"></i> Juris Doctor from a law school</li>
        <li><i class="fas fa-star" style="color: gold;"></i> Partner at Sassano and Fleischer law firm in the San Francisco Bay Area, Sacramento, and Los Angeles</li>
    </ul>
    <p>Brian has over 20 years of experience in law, handling cases with dedication, intelligence, and attention to detail. Outside of his legal work, Brian is an accomplished drummer who enjoys entertaining and playing music with a local quartet in the Bay Area.</p>
    <h3>Personal Life</h3>
    <p>Brian is also an avid scuba diver and prolific underwater photographer, capturing beautiful marine images during his travels. His love for learning about diverse cultures has taken him to many parts of the world.</p>
`;

// Content for David Menache
contentData.David = `
    <h2><img src="${getGravatarUrl('dave@inthingslimited.com')}" alt="David Menache" class="gravatar-icon"> David Menache </h2>
    <p>David Menache began his studies at UC Berkeley, where he pursued a degree in Legal Studies. After initially focusing on law, David quickly transitioned into technology and has since become a full stack developer and certified AWS Solutions Architect. His professional background includes:</p>
    <ul class="custom-list2">
        <li><i class="fas fa-star" style="color: gold;"></i> Developing and managing applications across diverse industries</li>
        <li><i class="fas fa-star" style="color: gold;"></i> Extensive expertise in databases, networks, mass communications, and advertising</li>
        <li><i class="fas fa-star" style="color: gold;"></i> Leading a successful sales organization from his home in Nicaragua</li>
    </ul>
    <p>David’s technical skills and leadership have made him a key contributor to the team’s mission of building a supportive community for individuals with communication challenges.</p>
    <h3>Personal Life</h3>
    <p>In his personal time, David enjoys tending to animals and riding his horses along the beautiful beaches of Central America.</p>
`;


contentData.whatWeTeach = `
    <div class="title-share">
        <h2 style="display: flex; justify-content: space-between; align-items: center;">
            <span><i class="aboutpage fas fa-chalkboard-teacher"></i> What We Teach</span>
        </h2>
        <div class="share-buttons">
            <a href="#" onclick="shareOnFacebook()" class="share-button facebook">
                <i class="fab fa-facebook-f"></i> Share on Facebook
            </a>
            <a href="#" onclick="shareOnTwitter()" class="share-button twitter">
                <i class="fab fa-twitter"></i> Share on Twitter
            </a>
            <a href="#" onclick="shareOnLinkedIn()" class="share-button linkedin">
                <i class="fab fa-linkedin-in"></i> Share on LinkedIn
            </a>
        </div>
    </div>
    <div class="meat">
    <h3>Basic Life Skills</h3>
    <figure class="whatweteach" style="width:40%!important;">
    <img src="public/Graduation.jpg" alt="Graduation Day" style="width: 100%; height: auto;">
    <figcaption style="text-align: center;">Graduation Day!</figcaption>
    </figure>
    <ul>
        <li>Personal hygiene</li>
        <li>Eating skills</li>
        <li>Bathroom skills</li>
    </ul>
    <h3>Intermediate Life Skills</h3>
    <ul>
        <li>Care of personal belongings</li>
        <li>Washing, folding, and storing clothes</li>
        <li>Cooking</li>
        <li>Arts and crafts</li>
    </ul>
    <h3>Advanced Life Skills</h3>
    <ul>
        <li>Eating in restaurants</li>
        <li>Handling money</li>
        <li>Using mass transit</li>
        <li>Community safety</li>
        <li>Socializing, making friends, and building relationships</li>
    </ul>
    <h3>Advanced Plus</h3>
    <ul>
        <li>Air travel</li>
        <li>Boating</li>
        <li>Becoming a “leg up” mentor</li>
    </ul>
    <h3>Physical Education</h3>
    <ul>
        <li>Soccer field</li>
        <li>Basketball court</li>
        <li>Walking/running track</li>
        <li>Swimming pool</li>
        <li>Park</li>
    </ul>
    <h3>Outings</h3>
    <p>We provide enrichment excursions and field trips to interesting and educational destinations reachable within 2 hours of the community.</p>
    <figure style="text-align: center;">
        <img src="https://verballychallenged.inthingslimited.com/public/tiny_homes.jpg" alt="Picnic Outing" style="width: 80%; max-width: 500px; border-radius: 10px;">
    </figure>
    <h3>Leg Up Program</h3>
    <p>We pair advanced participants with beginners to encourage growth under the watchful eye of trusted caregivers.</p>
        <figure style="text-align: center;">
            <img src="https://verballychallenged.inthingslimited.com/public/leg-up.webp" alt="Leg Up Program" style="width: 80%; max-width: 500px; border-radius: 10px;">
        </figure>
    <h3>In-House Events</h3>
    <p>Our community hosts picnics, cookouts, and campfires to encourage social interaction and fun.</p>
    <figure style="text-align: center;">
        <img src="https://verballychallenged.inthingslimited.com/public/picnic.jpg" alt="Picnic Outing" style="width: 80%; max-width: 500px; border-radius: 10px;">
    </figure>
    <h3>Financial Assistance</h3>
    <ul>
        <li>In-house help with acquiring Regional Center Funding</li>
        <li>Independent Facilitators through the Self-Determination Program</li>
        <li>Government grants</li>
        <li>Private donors</li>
        <li>Corporate sponsors (e.g., JSX, Northrup Grumman)</li>
    </ul>
    </div>
`;


// Content for The Why section
//contentData.theWhy = `
    //<h2>The Why</h2>
    //<p>Jon, like many parents, faces the overwhelming problem of figuring out who will provide for his special needs nephew once he becomes incapacitated by age or death. He has become disillusioned by the lack of quality care available in the Antelope Valley, where William was born and raised. This has motivated him to dedicate the rest of his working years to building a high-quality, enduring program that will continue to provide all the support necessary for William and many others long after he is gone.</p>
    //<p>Jon is assembling a team of talented, dedicated professionals to undertake this awesome responsibility. His goal is to ensure that individuals with communication challenges and their families can access the care and support they need, even in the face of adversity.</p>
    //<h3>Jon's Motive</h3>
    //<p>The lack of available, quality care options for William has driven Jon to create a solution. His personal experiences caring for William have shaped his vision of a safe, inclusive community where individuals like William can thrive, receive support, and live fulfilling lives.</p>
    //<p>Jon believes that no family should face the stress, anxiety, and fear that comes with wondering who will care for their loved one with special needs. His vision for this community is centered around understanding, compassion, and lifelong support.</p>
//`;

contentData.theWhy = `
    <h2><i class="aboutpage fas fa-question-circle"></i>The Why</h2>
    <p>Jon, like many parents, faces the overwhelming problem of figuring out who will provide for his special needs nephew once he becomes incapacitated by age or death. He has become disillusioned by the lack of quality care available in the Antelope Valley, where William was born and raised. This has motivated him to dedicate the rest of his working years to building a high-quality, enduring program that will continue to provide all the support necessary for William and many others long after he is gone.</p>
    
    <figure class="story-image">
        <img src="https://verballychallenged.inthingslimited.com/public/blood_draw_at_doc.jpg" alt="Blood Draw at Doctor's Office">
        <figcaption>Routine blood draw with William at the doctor's office</figcaption>
    </figure>

    <p>Jon is assembling a team of talented, dedicated professionals to undertake this awesome responsibility. His goal is to ensure that individuals with communication challenges and their families can access the care and support they need, even in the face of adversity.</p>
    
    <figure class="story-image">
        <img src="https://verballychallenged.inthingslimited.com/public/Graduation.jpg" alt="Graduation Day">
        <figcaption>Graduation Day!</figcaption>
    </figure>

    <h3>Jon's Motive</h3>
    <p>The lack of available, quality care options for William has driven Jon to create a solution. His personal experiences caring for William have shaped his vision of a safe, inclusive community where individuals like William can thrive, receive support, and live fulfilling lives.</p>
    
    <p>Jon believes that no family should face the stress, anxiety, and fear that comes with wondering who will care for their loved one with special needs. His vision for this community is centered around understanding, compassion, and lifelong support.</p>
`;


// Show the subscription message and hide it after a few seconds
function showSubscribeMessage(message) {
    const messageContainer = document.getElementById('subscribe-message');
    messageContainer.innerHTML = `<p>${message}</p>`;  // Set the message content
    messageContainer.style.display = 'flex';  // Show the message
    setTimeout(function() {
        messageContainer.style.display = 'none';  // Hide it after 3 seconds
    }, 3000);
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
                document.getElementById('modal-email').value = '';  // Clear the email field
                toggleModal();  // Close the modal after successful submission
                showSubscribeMessage(data.message);  // Show the success message
            } else {
                showSubscribeMessage('Subscription failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showSubscribeMessage('There was an error. Please try again later.');
        });
    } else {
        alert('Please enter a valid email.');
    }
}
function shareOnFacebook() {
    const url = window.location.href;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
}

function shareOnTwitter() {
    const url = window.location.href;
    const text = 'Check out this incredibly worthwhile program for autistic adults!';
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
}

function shareOnLinkedIn() {
    const url = window.location.href;
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
}


document.addEventListener('DOMContentLoaded', function() {
    const statsImage = document.getElementById('hover-stats-image');

    if (!statsImage) {
        console.error("Stats image not found in the DOM.");
        return;
    }

    // Function to load chart.html into the tooltip
    function loadTooltipContent() {
        fetch('https://verballychallenged.inthingslimited.com/chart.html')
            .then(response => response.text())
            .then(data => {
                const tooltip = document.getElementById('tooltip-container');
                tooltip.innerHTML = data; // Insert fetched content into the tooltip
            })
            .catch(error => {
                console.error('Error loading tooltip content:', error);
            });
    }

    // Function to show the tooltip at the cursor position
    function showTooltip(event) {
        const tooltip = document.getElementById('tooltip-container');
        tooltip.style.left = (event.pageX + 10) + 'px'; // Position 10px to the right of the cursor
        tooltip.style.top = (event.pageY + 10) + 'px';  // Position 10px below the cursor
        tooltip.classList.add('tooltip-visible');
        tooltip.classList.remove('tooltip-hidden');
    }

    // Function to hide the tooltip
    function hideTooltip() {
        const tooltip = document.getElementById('tooltip-container');
        tooltip.classList.add('tooltip-hidden');
        tooltip.classList.remove('tooltip-visible');
    }

    // Attach event listeners to the stats image
    statsImage.addEventListener('mouseenter', loadTooltipContent);
    statsImage.addEventListener('mousemove', showTooltip);
    statsImage.addEventListener('mouseleave', hideTooltip);
});

