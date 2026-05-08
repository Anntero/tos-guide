// --- COMPLETE SKILL DATA ---
const allSkills = [
    // --- CLERIC TREE ---
    { "tree": "Cleric Tree", "name": "Heal", "stats": "OH: 2 | CD: 22s", "description": "Restores HP/SP or deals damage. Tiles heal players even at full HP. [cite: 2, 5]" },
    { "tree": "Cleric Tree", "name": "Cure", "stats": "CD: 0s", "description": "Removes Lv.1 ailments or deals damage. No Cooldown. [cite: 5, 7]" },
    { "tree": "Cleric Tree", "name": "Safety Zone", "stats": "CD: 48s", "description": "Protective magic circle that blocks incoming attacks. [cite: 499, 502]" },
    { "tree": "Cleric Tree", "name": "Divine Might", "stats": "CD: 27s", "description": "Enhances the level of the next skill cast for you and party members. [cite: 508, 511]" },
    
    // --- PRIEST TREE ---
    { "tree": "Priest Tree", "name": "Aspersion", "stats": "CD: 20s", "description": "Increases defense of allies and deals damage to enemies. Requires Holy Water. [cite: 528, 530]" },
    { "tree": "Priest Tree", "name": "Blessing", "stats": "CD: 35s", "description": "Grants additional damage to attacks. Scales with SPR. [cite: 538, 541]" },
    { "tree": "Priest Tree", "name": "Resurrection", "stats": "CD: 30s", "description": "Resurrects fallen allies. Faster casting at higher levels. [cite: 543, 547]" },
    { "tree": "Priest Tree", "name": "Revive", "stats": "CD: 90s", "description": "Prevents allies from becoming Incapable of Combat for a duration. [cite: 551, 554]" },

    // --- KRIVIS TREE ---
    { "tree": "Krivis Tree", "name": "Aukuras", "stats": "CD: 60s", "description": "Summons a torch that restores HP and reduces enemy accuracy. [cite: 570]" },
    { "tree": "Krivis Tree", "name": "Zaibas", "stats": "CD: 0s", "description": "Calls down lightning bolts. No Cooldown. [cite: 576, 579]" },
    { "tree": "Krivis Tree", "name": "Daino", "stats": "CD: 60s", "description": "Enables magical attacks to critically strike. [cite: 573, 575]" },

    // --- HIGHLANDER TREE ---
    { "tree": "Highlander Tree", "name": "Herald of Brigid", "stats": "CD: 30s", "description": "Imbues weapon with Fire. Deals extra damage lines based on active imbues. [cite: 124, 126]" },
    { "tree": "Highlander Tree", "name": "Cross Guard", "stats": "CD: 0s", "description": "Blocks attacks. Successful blocks make enemies vulnerable to [Pierce]. [cite: 128, 129]" },
    { "tree": "Highlander Tree", "name": "Moulinet", "stats": "CD: 35s", "description": "Swings sword continuously. Bonus damage per elemental imbue. [cite: 130, 131]" },

    // --- BARBARIAN TREE ---
    { "tree": "Barbarian Tree", "name": "Frenzy", "stats": "CD: 0s", "description": "Generate stacks to increase Physical Attack as HP drops. [cite: 148, 149]" },
    { "tree": "Barbarian Tree", "name": "Cleave", "stats": "CD: 0s", "description": "Slashes targets and makes them vulnerable to [Slash] damage. [cite: 150]" },
    { "tree": "Barbarian Tree", "name": "Helm Chopper", "stats": "OH: 2 | CD: 20s", "description": "Strikes twice at an enemy’s head, causing Stun. [cite: 152]" },

    // --- WIZARD TREE ---
    { "tree": "Wizard Tree", "name": "Rune of Destruction", "stats": "OH: 2 | CD: 40s", "description": "Deals area damage that reflects to nearby enemies. [cite: 295, 296]" },
    { "tree": "Wizard Tree", "name": "Rune of Ice", "stats": "CD: 140s", "description": "Temporarily boosts the power of ice-type magic for the party. [cite: 297]" },
    { "tree": "Wizard Tree", "name": "Enchant Lightning", "stats": "CD: N/A", "description": "Changes melee/missile attacks to Lightning property. [cite: 339, 340]" },

    // --- QUARREL SHOOTER TREE ---
    { "tree": "Quarrel Shooter Tree", "name": "Stone Shot", "stats": "OH: 5 | CD: 10s", "description": "Fires a stone bullet that pushes and stuns enemies. [cite: 368, 370]" },
    { "tree": "Quarrel Shooter Tree", "name": "Running Shot", "stats": "CD: 35s", "description": "Attack while moving quickly with increased speed and damage. [cite: 373, 374]" },

    // --- HUNTER TREE ---
    { "tree": "Hunter Tree", "name": "Rush Dog", "stats": "CD: 0s", "description": "Commands companion to charge and headbutt an enemy. No Cooldown. [cite: 386, 378]" },
    { "tree": "Hunter Tree", "name": "Coursing", "stats": "CD: 90s", "description": "Companion bites a target, holding them in place. [cite: 379]" }
];

// --- CLASS MAPPING ---
const classMap = {
    "Swordsman": ["Swordsman Tree", "Highlander Tree", "Barbarian Tree", "Peltasta Tree", "Hoplite Tree", "Rodelero Tree", "Fencer Tree", "Murmillo Tree"],
    "Wizard": ["Wizard Tree", "Pyromancer Tree", "Cryomancer Tree", "Psychokino Tree", "Rune Caster Tree", "Sage Tree", "Enchanter Tree", "Shadowmancer Tree"],
    "Archer": ["Archer Tree", "Quarrel Shooter Tree", "Ranger Tree", "Hunter Tree", "Scout Tree", "Rogue Tree", "Hackapell Tree"],
    "Cleric": ["Cleric Tree", "Priest Tree", "Krivis Tree", "Bokor Tree", "Dievdirbys Tree", "Paladin Tree", "Sadhu Tree", "Monk Tree", "Inquisitor Tree"]
};

// --- LOGIC FUNCTIONS ---
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
    const firstBtn = document.querySelector('#class-nav button');
    if (firstBtn) selectBaseClass('Swordsman', firstBtn);
};
