// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Matrix Effect (Falling Binary Code)
const matrixCanvas = document.getElementById('matrix-canvas');
const matrixCtx = matrixCanvas.getContext('2d');

matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

const binaryChars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const fontSize = 14;
const columns = matrixCanvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
}

function drawMatrix() {
    matrixCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

    matrixCtx.fillStyle = '#00ff88';
    matrixCtx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
        matrixCtx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);


// Floating Cyber Particles
const particlesCanvas = document.getElementById('particles-canvas');
const particlesCtx = particlesCanvas.getContext('2d');

particlesCanvas.width = window.innerWidth;
particlesCanvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * particlesCanvas.width,
        y: Math.random() * particlesCanvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: `hsl(${Math.random() * 60 + 150}, 100%, 50%)` // Green/cyan glow
    });
}

function drawParticles() {
    particlesCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);

    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        particlesCtx.beginPath();
        particlesCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        particlesCtx.fillStyle = p.color;
        particlesCtx.shadowBlur = 10;
        particlesCtx.shadowColor = p.color;
        particlesCtx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > particlesCanvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > particlesCanvas.height) p.speedY *= -1;
    }

    requestAnimationFrame(drawParticles);
}

drawParticles();




// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Certificate Viewer Functionality - REPLACE YOUR EXISTING CODE WITH THIS
const certViewer = document.getElementById("cert-viewer");
const viewerImage = document.getElementById("viewer-cert-image");
const closeViewer = document.querySelector(".close-viewer");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const modalNav = document.querySelector(".modal-nav");

// Store all certificates data (keep your existing array)
const certificates = [
    { thumb: "Defronix.jpeg", full: "Defronix.jpeg" },
    { thumb: "ARC.png", full: "ARC.png" },
    { thumb: "CAP.png", full: "CAP.png" },
    { thumb: "red_team.png", full: "red_team.png" },
    { thumb: "practiCal.png", full: "practiCal.png" },
    { thumb: "internship.png", full: "internship.png" },
    { thumb: "EHE.jpeg", full: "EHE.jpeg" },
    { thumb: "internship1.png", full: "internship1.png" },
    { thumb: "safs.jpeg", full: "safs.jpeg" },
    { thumb: "casestudyletter.jpeg", full: "casestudyletter.jpeg" },
    { thumb: "MCEH.jpeg", full: "MCEH.jpeg" }
];

let currentCertIndex = 0;

// Open viewer with smooth transition
function openCertificateViewer(index) {
    currentCertIndex = index;
    viewerImage.style.opacity = 0;
    viewerImage.src = certificates[index].full;
    certViewer.style.display = "flex";
    document.body.style.overflow = "hidden";
    
    // Show/hide nav buttons
    if (certificates.length <= 1) {
        certViewer.classList.add('single-cert');
    } else {
        certViewer.classList.remove('single-cert');
    }
    
    setTimeout(() => {
        viewerImage.style.opacity = 1;
    }, 10);
}

// Close viewer
function closeCertificateViewer() {
    certViewer.style.display = "none";
    document.body.style.overflow = "auto";
}

// Navigation with smooth transitions
function showPrevCert() {
    viewerImage.style.opacity = 0;
    setTimeout(() => {
        currentCertIndex = (currentCertIndex - 1 + certificates.length) % certificates.length;
        viewerImage.src = certificates[currentCertIndex].full;
        viewerImage.style.opacity = 1;
    }, 300);
}

function showNextCert() {
    viewerImage.style.opacity = 0;
    setTimeout(() => {
        currentCertIndex = (currentCertIndex + 1) % certificates.length;
        viewerImage.src = certificates[currentCertIndex].full;
        viewerImage.style.opacity = 1;
    }, 300);
}

// Event Listeners
prevBtn.addEventListener("click", showPrevCert);
nextBtn.addEventListener("click", showNextCert);

// Close when clicking outside (works for both mouse and touch)
certViewer.addEventListener("click", function(e) {
    if (e.target === certViewer || e.target === viewerImage) {
        closeCertificateViewer();
    }
});

// Keyboard navigation
document.addEventListener("keydown", function(e) {
    if (certViewer.style.display === "flex") {
        if (e.key === "Escape") closeCertificateViewer();
        if (e.key === "ArrowLeft") showPrevCert();
        if (e.key === "ArrowRight") showNextCert();
    }
});

// Initialize certificate click handlers
document.querySelectorAll(".cert-card").forEach((card, index) => {
    card.addEventListener("click", () => openCertificateViewer(index));
});
// REMOVE THE DUPLICATE MODAL CODE (the second block in your original file)


// 3D Background using Three.js
if (document.getElementById('3d-bg')) {
    const canvas = document.getElementById('3d-bg');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Floating Geometry
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({
        color: 0x00ff88,
        emissive: 0x003300,
        shininess: 100
    });

    const shapes = [];
    for (let i = 0; i < 15; i++) {
        const shape = new THREE.Mesh(geometry, material);
        shape.position.x = Math.random() * 20 - 10;
        shape.position.y = Math.random() * 20 - 10;
        shape.position.z = Math.random() * 20 - 10;
        shape.scale.setScalar(Math.random() * 0.5 + 0.5);
        shapes.push(shape);
        scene.add(shape);
    }

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 5;

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        shapes.forEach(shape => {
            shape.rotation.x += 0.005;
            shape.rotation.y += 0.01;
        });
        renderer.render(scene, camera);
    }
    animate();

    // Handle Window Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());

    // Send email using FormSubmit.co (free service)
    fetch('https://formsubmit.co/ajax/hanonymous985@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formObject)
    })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            this.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem sending your message.');
        });
});

// Form Submission with Animation
document.getElementById('cyber-contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const formData = new FormData(this);

    // Simple animation on submit
    const submitBtn = document.querySelector('.cyber-submit-btn');
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;

    // Simulate sending (replace with actual form submission)
    setTimeout(() => {
        submitBtn.innerHTML = '<span>Message Sent!</span>';
        this.reset();

        setTimeout(() => {
            submitBtn.innerHTML = '<span>Send Message</span><div class="line"></div>';
            submitBtn.disabled = false;
        }, 2000);
    }, 1500);

});


