// Loads and renders project cards from projects/projects.json
async function loadProjects() {
    const projectCards = document.getElementById('project-cards');
    const res = await fetch('projects/projects.json');
    const projects = await res.json();
    for (const project of projects) {
        const card = document.createElement('div');
        card.className = 'project-card pro-card';
        card.innerHTML = `
            <a href="${project.link}" style="text-decoration:none;color:inherit;display:block;">
                <div class="project-image-wrapper">
                    <img src="${project.image}" alt="${project.name}" class="project-image-placeholder" style="object-fit:cover;width:100%;height:140px;">
                </div>
                <div class="project-info">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <span class="project-more">Read more</span>
                </div>
            </a>
        `;
        projectCards.appendChild(card);
        console.log(`Loaded project: ${project.name}`);
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);
