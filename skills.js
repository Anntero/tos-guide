let allSkills = []; // This starts empty and gets filled by the other files

const classMap = {
    "Swordsman": ["Swordsman Tree", "Highlander Tree", "Peltasta Tree", "Hoplite Tree", "Barbarian Tree"],
    "Wizard": ["Wizard Tree", "Pyromancer Tree", "Cryomancer Tree", "Psychokino Tree"],
    "Archer": ["Archer Tree", "Quarrel Shooter Tree", "Ranger Tree"],
    "Cleric": ["Cleric Tree", "Priest Tree", "Krivis Tree", "Bokor Tree", "Dievdirbys Tree", "Paladin Tree", "Monk Tree"]
};

function selectBaseClass(baseName, element) {
    const buttons = document.querySelectorAll('#class-nav button');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');

    const jobTrees = classMap[baseName] || [];
    const subNav = document.getElementById('sub-nav');
    subNav.innerHTML = ""; 
    
    jobTrees.forEach(treeName => {
        const hasData = allSkills.some(s => s.tree === treeName);
        if (hasData) {
            const btn = document.createElement('button');
            btn.innerText = treeName.replace(" Tree", ""); 
            btn.onclick = () => filterBySpecificJob(treeName, btn);
            subNav.appendChild(btn);
        }
    });
    if (subNav.firstChild) subNav.firstChild.click();
}

function filterBySpecificJob(treeName, element) {
    const subButtons = document.querySelectorAll('#sub-nav button');
    subButtons.forEach(btn => btn.classList.remove('active-sub'));
    if (element) element.classList.add('active-sub');

    const container = document.getElementById('skill-board');
    container.innerHTML = "";
    const filtered = allSkills.filter(s => s.tree === treeName);
    filtered.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <div class="skill-tree">${skill.tree}</div>
            <h3 class="skill-name">${skill.name}</h3>
            <div class="skill-stats">${skill.stats}</div>
            <p class="skill-desc">${skill.description}</p>
        `;
        container.appendChild(card);
    });
}

window.onload = () => {
    // Small delay to make sure all data files are loaded
    setTimeout(() => {
        const firstBtn = document.querySelector('#class-nav button');
        if (firstBtn) selectBaseClass('Swordsman', firstBtn);
    }, 500);
};
