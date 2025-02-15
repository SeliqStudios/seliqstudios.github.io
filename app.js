class ProjectManager {
  constructor() {
    this.projects = [
      {
        id: 1,
        title: 'Spinning Cats',
        description: 'Low-poly spinning cats.',
        link: 'https://seliqstudios.github.io/Spinning-Cats/',
        github: 'https://github.com/SeliqStudios/Spinning-Cats?tab=readme-ov-file',
        image: 'https://camo.githubusercontent.com/01e04913032b17db62dc088df1d08db26c3b55c88374951f5627a3e261d14939/68747470733a2f2f66696c65732e636174626f782e6d6f652f6a306f6a6c722e706e67'
      },
      {
        id: 2,
        title: 'Roblox Script Generator',
        description: 'The best roblox script generator using AI!',
        link: 'https://suferr.github.io/RSG/',
        github: 'https://github.com/Suferr/RSG',
        image: 'https://files.catbox.moe/bp90du.png'
      }
    ];
    this.projectsGrid = document.getElementById('projectsGrid');
    this.searchInput = document.getElementById('searchInput');
    
    this.renderProjects();
    this.setupSearchListener();
  }

  renderProjects() {
    this.projectsGrid.innerHTML = '';
    this.projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.dataset.title = project.title.toLowerCase();
      projectCard.dataset.description = project.description.toLowerCase();
      
      projectCard.innerHTML = `
        ${project.image ? `<img src="${project.image}" alt="${project.title}">` : ''}
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="project-links">
          ${project.link ? `<a href="${project.link}" target="_blank" class="project-button">View Project</a>` : ''}
          ${project.github ? `<a href="${project.github}" target="_blank" class="project-button">GitHub Repository</a>` : ''}
        </div>
      `;
      this.projectsGrid.appendChild(projectCard);
    });
  }

  setupSearchListener() {
    this.searchInput.addEventListener('input', () => {
      const searchTerm = this.searchInput.value.toLowerCase().trim();
      const projectCards = this.projectsGrid.querySelectorAll('.project-card');
      
      projectCards.forEach(card => {
        const titleMatch = card.dataset.title.includes(searchTerm);
        const descriptionMatch = card.dataset.description.includes(searchTerm);
        
        if (searchTerm === '' || titleMatch || descriptionMatch) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  }
}

const projectManager = new ProjectManager();
