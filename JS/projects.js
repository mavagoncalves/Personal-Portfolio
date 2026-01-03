const projects = [
    {
        id: 1,
        title: "LetEmCook",
        description: "Meal planner application with nutritional intake database. Input for recipes, storing of ingredients in the database and recipes search.",
        category: "Team Project",
        technologies: ["Scrum", "Database", "Testing"],
        image: "assets/LetemCookLogo.png",
        link: "#" 
    },
    {
        id: 2,
        title: "Piggy",
        description: "Dice game with PvP and PvC modes. Built using test-driven development. Features AI for computer playmode.",
        category: "Game Development",
        technologies: ["Python", "TDD", "AI"],
        image: "assets/PiggyTestfiles.png",
        link: "#"
    },
    {
        id: 3,
        title: "Museo",
        description: "Website for posts showcase with contact form. Fetches data from an API and displays it in a responsive layout.",
        category: "Web Development",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "assets/museologo.jpeg",
        link: "#"
    },
    {
        id: 4,
        title: "Portfolio",
        description: "This personal portfolio website featuring interactive elements and theme management.",
        category: "Web Development",
        technologies: ["HTML", "CSS", "Git"],
        link: "#"
    },
];


// DOM elements
const projectsContainer = document.getElementById('projects-container');
const projectCounter = document.getElementById('project-counter');

const displayProjects = (projectsToShow) => {
    // Clear container
    projectsContainer.textContent = '';
    
    // Loop through the projects to create elements
    projectsToShow.forEach(project => {
        // card container
        const card = document.createElement('article');
        card.classList.add('project-card');

        // image
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        img.classList.add('thumb');

        // title
        const h2 = document.createElement('h2');
        h2.textContent = project.title;

        // category
        const categoryP = document.createElement('p');
        categoryP.classList.add('muted');
        categoryP.textContent = project.category;

        // description
        const descP = document.createElement('p');
        descP.textContent = project.description;

        // technology stack section
        const techDiv = document.createElement('div');
        techDiv.style.marginTop = '1rem';
        
        const techSmall = document.createElement('small');
        
        // bold label
        const boldLabel = document.createElement('strong');
        boldLabel.textContent = 'Tech: ';
        
        // Append label and text list
        techSmall.appendChild(boldLabel);
        techSmall.append(project.technologies.join(', '));
        techDiv.appendChild(techSmall);

        // Assemble the card
        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(categoryP);
        card.appendChild(descP);
        card.appendChild(techDiv);

        // Add card to container
        projectsContainer.appendChild(card);
    });

    // Update counter text
    projectCounter.textContent = `Showing ${projectsToShow.length} of ${projects.length} projects`;
};

// display all projects
displayProjects(projects);

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        //remove active class buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active to clicked button
        button.classList.add('active');

        // get category
        const category = button.getAttribute('data-category');

        // filter data
        if (category === 'all') {
            displayProjects(projects);
        } else {
            const filtered = projects.filter(project => project.category === category);
            displayProjects(filtered);
        }
    });
});