document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ once: true, offset: 50 });

    const departments = window.departmentsData || {};
    const urlParams = new URLSearchParams(window.location.search);
    let currentId = urlParams.get('id');

    // Default to first department (civil) if none specified or invalid
    if (!currentId || !departments[currentId]) {
        currentId = 'civil';
    }

    const sidebar = document.getElementById('dept-sidebar');
    const mobileSelect = document.getElementById('mobile-dept-select');
    const contentArea = document.getElementById('dept-content-area');

    // Populate Sidebar and Mobile Select
    Object.values(departments).forEach(dept => {
        // Sidebar item
        const link = document.createElement('a');
        link.href = `?id=${dept.id}`;
        link.className = `px-4 py-3 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 ${
            dept.id === currentId 
            ? 'active' 
            : 'text-gray-600 hover:bg-gray-50 hover:text-navy'
        }`;
        link.innerHTML = `<i class="${dept.icon} text-lg"></i> <span class="truncate">${dept.name}</span>`;
        sidebar.appendChild(link);

        // Mobile select option
        const option = document.createElement('option');
        option.value = dept.id;
        option.textContent = dept.name;
        if (dept.id === currentId) option.selected = true;
        mobileSelect.appendChild(option);
    });

    // Handle Mobile Select Change
    mobileSelect.addEventListener('change', (e) => {
        window.location.href = `?id=${e.target.value}`;
    });

    // Render Department Data
    const renderDept = (id) => {
        const data = departments[id];
        if (!data) return;

        // Briefly fade out
        contentArea.style.opacity = '0';
        
        setTimeout(() => {
            // Update Title and Icons
            document.getElementById('dept-title').textContent = data.name;
            document.getElementById('dept-icon').className = `ph-fill ${data.icon}`;
            document.getElementById('dept-bg-icon').innerHTML = `<i class="ph-fill ${data.icon}"></i>`;
            
            // Update HOD
            document.getElementById('hod-title').textContent = data.hodTitle;
            document.getElementById('hod-name').textContent = data.hodName;
            
            // Update Content Blocks
            document.getElementById('dept-about').innerHTML = data.about || '<p>Content not available.</p>';
            document.getElementById('dept-profile').innerHTML = data.profile || '<p>Content not available.</p>';
            document.getElementById('dept-vision').innerHTML = data.vision || '<p>Content not available.</p>';
            document.getElementById('dept-mission').innerHTML = data.mission || '<p>Content not available.</p>';
            
            // Fade in
            contentArea.style.opacity = '1';

            // Scroll to top of content area on mobile
            if (window.innerWidth < 1024) {
                contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300); // match transition duration
    };

    // Initial render
    setTimeout(() => {
        renderDept(currentId);
    }, 100);
});
