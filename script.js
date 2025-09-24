// Enhanced project data with categories and more details
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A fully responsive e-commerce website with advanced filtering and secure checkout.",
    longDescription:
      "<p>This e-commerce platform was built with a modern tech stack including React, Node.js, and MongoDB. It features a responsive design, product search and filtering, user authentication, shopping cart, and secure payment processing.</p><p><strong>Key Features:</strong></p><ul><li>User registration and authentication</li><li>Product catalog with advanced filtering</li><li>Shopping cart and wishlist functionality</li><li>Secure payment integration with Stripe</li><li>Order tracking and history</li><li>Admin dashboard for inventory management</li></ul>",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    category: "web",
    liveDemo: "#",
    sourceCode: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    longDescription:
      "<p>This task management application helps teams organize their work efficiently. Built with Vue.js and Firebase, it offers real-time collaboration, drag-and-drop functionality, and progress tracking.</p><p><strong>Key Features:</strong></p><ul><li>Real-time collaboration</li><li>Drag-and-drop task management</li><li>Team workspaces with user roles</li><li>File attachments and comments</li><li>Progress tracking and reporting</li><li>Mobile-responsive design</li></ul>",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1139&q=80",
    tags: ["Vue.js", "Firebase", "JavaScript", "CSS3"],
    category: "web",
    liveDemo: "#",
    sourceCode: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with forecasts and interactive maps.",
    longDescription:
      "<p>This weather dashboard provides detailed weather information with an intuitive interface. It uses the OpenWeather API to fetch real-time data and displays it using interactive charts and maps.</p><p><strong>Key Features:</strong></p><ul><li>Current weather conditions</li><li>7-day weather forecast</li><li>Interactive weather maps</li><li>Location-based weather</li><li>Temperature unit conversion</li><li>Responsive design for all devices</li></ul>",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1065&q=80",
    tags: ["JavaScript", "API Integration", "Chart.js", "HTML5"],
    category: "web",
    liveDemo: "#",
    sourceCode: "#",
  },
  {
    id: 4,
    title: "Data Analysis Tool",
    description:
      "A Python-based tool for analyzing and visualizing complex datasets.",
    longDescription:
      "<p>This data analysis tool processes large datasets and generates insightful visualizations. Built with Python and libraries like Pandas, NumPy, and Matplotlib, it helps users make data-driven decisions.</p><p><strong>Key Features:</strong></p><ul><li>Data import from multiple formats (CSV, Excel, JSON)</li><li>Statistical analysis and reporting</li><li>Interactive data visualizations</li><li>Export options for reports and charts</li><li>Customizable analysis parameters</li></ul>",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
    category: "python",
    liveDemo: "#",
    sourceCode: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website with modern design and animations.",
    longDescription:
      "<p>This portfolio website template features a clean, modern design that effectively showcases projects and skills. It includes smooth animations, a contact form, and is fully responsive across all devices.</p><p><strong>Key Features:</strong></p><ul><li>Responsive design for all screen sizes</li><li>Project showcase with filtering</li><li>Contact form with validation</li><li>Dark/light mode toggle</li><li>Smooth scrolling animations</li><li>Performance optimized</li></ul>",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "design",
    liveDemo: "#",
    sourceCode: "#",
  },
  {
    id: 6,
    title: "Mobile Fitness App",
    description:
      "A cross-platform mobile app for tracking workouts and nutrition.",
    longDescription:
      "<p>This fitness application helps users track their workouts, nutrition, and progress. Built with React Native, it offers a seamless experience on both iOS and Android devices.</p><p><strong>Key Features:</strong></p><ul><li>Workout tracking with custom routines</li><li>Nutrition logging with barcode scanning</li><li>Progress charts and statistics</li><li>Social features for motivation</li><li>Offline functionality</li><li>Push notifications</li></ul>",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    tags: ["React Native", "Firebase", "Redux", "Mobile"],
    category: "mobile",
    liveDemo: "#",
    sourceCode: "#",
  },
];

// DOM Elements
const projectsGrid = document.querySelector(".projects-grid");
const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalDescription = document.getElementById("modalDescription");
const liveDemoBtn = document.getElementById("liveDemo");
const sourceCodeBtn = document.getElementById("sourceCode");
const modalClose = document.querySelector(".modal-close");
const themeToggle = document.querySelector(".theme-toggle");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const filterBtns = document.querySelectorAll(".filter-btn");
const contactForm = document.getElementById("contactForm");

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  // Render projects
  renderProjects(projects);

  // Set up event listeners
  setupEventListeners();

  // Initialize scroll animations
  initScrollAnimations();
});

// Render projects to the grid
function renderProjects(projectsToRender) {
  projectsGrid.innerHTML = "";

  projectsToRender.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = `project-card ${project.category}`;
    projectCard.setAttribute("data-category", project.category);
    projectCard.innerHTML = `
                    <img src="${project.image}" alt="${
      project.title
    }" class="project-img">
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-tags">
                            ${project.tags
                              .map((tag) => `<span class="tag">${tag}</span>`)
                              .join("")}
                        </div>
                        <p>${project.description}</p>
                    </div>
                    <div class="project-hover-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-links">
                            <button class="btn view-project" data-id="${
                              project.id
                            }">View Details</button>
                        </div>
                    </div>
                `;
    projectsGrid.appendChild(projectCard);
  });

  // Add event listeners to project buttons
  document.querySelectorAll(".view-project").forEach((button) => {
    button.addEventListener("click", function () {
      const projectId = parseInt(this.getAttribute("data-id"));
      openProjectModal(projectId);
    });
  });
}

// Filter projects by category
function filterProjects(category) {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    if (category === "all" || card.getAttribute("data-category") === category) {
      card.style.display = "block";
      // Re-trigger animation for filtered items
      setTimeout(() => {
        card.classList.add("visible");
      }, 100);
    } else {
      card.style.display = "none";
      card.classList.remove("visible");
    }
  });
}

// Open project modal
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (project) {
    modalTitle.textContent = project.title;
    modalImg.src = project.image;
    modalImg.alt = project.title;
    modalDescription.innerHTML = project.longDescription;
    liveDemoBtn.href = project.liveDemo;
    sourceCodeBtn.href = project.sourceCode;
    projectModal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

// Close project modal
function closeProjectModal() {
  projectModal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Toggle dark/light mode
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const icon = themeToggle.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }

  // Save theme preference to localStorage
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Toggle mobile navigation
function toggleMobileNav() {
  navLinks.classList.toggle("active");
  // Animate hamburger icon
  const icon = hamburger.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

// Validate contact form
function validateForm() {
  let isValid = true;
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // Reset errors
  document.querySelectorAll(".error").forEach((error) => {
    error.style.display = "none";
  });

  // Validate name
  if (name.value.trim() === "") {
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  }

  // Validate subject
  if (subject.value.trim() === "") {
    document.getElementById("subjectError").style.display = "block";
    isValid = false;
  }

  // Validate message
  if (message.value.trim() === "") {
    document.getElementById("messageError").style.display = "block";
    isValid = false;
  }

  return isValid;
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();

  if (validateForm()) {
    // Show success message
    const submitBtn = contactForm.querySelector(".btn");
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitBtn.style.background = "var(--accent-color)";

    // In a real application, you would send the form data to a server here
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = "";
      contactForm.reset();
    }, 3000);
  }
}

// Initialize scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe project cards
  document.querySelectorAll(".project-card").forEach((card) => {
    observer.observe(card);
  });

  // Observe other elements
  document.querySelectorAll(".skill, .contact-item").forEach((el) => {
    observer.observe(el);
  });
}

// Set up all event listeners
function setupEventListeners() {
  // Modal close events
  modalClose.addEventListener("click", closeProjectModal);
  window.addEventListener("click", function (e) {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  // Theme toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Mobile navigation
  hamburger.addEventListener("click", toggleMobileNav);

  // Close mobile nav when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      hamburger.querySelector("i").classList.remove("fa-times");
      hamburger.querySelector("i").classList.add("fa-bars");
    });
  });

  // Project filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");
      // Filter projects
      const filter = this.getAttribute("data-filter");
      filterProjects(filter);
    });
  });

  // Contact form
  contactForm.addEventListener("submit", handleFormSubmit);

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Check for saved theme preference
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    const icon = themeToggle.querySelector("i");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}
