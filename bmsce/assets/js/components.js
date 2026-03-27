const pageComponents = [
    { mountId: 'navbar-container', file: '/components/navbar.html' },
    { mountId: 'hero-container', file: '/components/hero.html' },
    { mountId: 'stats-container', file: '/components/stats.html' },
    { mountId: 'vision-mission-container', file: '/components/vision-mission.html' },
    { mountId: 'departments-container', file: '/components/departments.html' },
    { mountId: 'placements-container', file: '/components/placements.html' },
    { mountId: 'testimonials-container', file: '/components/testimonials.html' },
    { mountId: 'news-events-container', file: '/components/news-events.html' },
    { mountId: 'footer-container', file: '/components/footer.html' }
];

async function loadComponent({ mountId, file }) {
    const mount = document.getElementById(mountId);
    if (!mount) return;

    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Unable to load ${file}`);
        mount.innerHTML = await response.text();
    } catch (error) {
        console.error(`Failed to load component: ${file}`, error);
    }
}

async function loadPageComponents() {
    await Promise.all(pageComponents.map(loadComponent));
    initializeNavbarBehavior();
    initializeCounterAnimation();
    initializeAOS();
}

function initializeAOS() {
    if (window.AOS) {
        AOS.init({
            once: true,
            offset: 50,
            duration: 800
        });
    }
}

function initializeNavbarBehavior() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!navbar || !mobileMenuBtn || !mobileMenu) return;

    let isScrolled = false;

    const onScroll = () => {
        if (window.scrollY > 50 && !isScrolled) {
            navbar.classList.add('glass-nav', 'text-navy', 'py-2', 'border-b', 'border-slate-200/80');
            navbar.classList.remove('bg-transparent', 'text-white', 'py-4', 'border-transparent');
            mobileMenuBtn.classList.add('text-navy');
            mobileMenuBtn.classList.remove('text-white');
            isScrolled = true;
        } else if (window.scrollY <= 50 && isScrolled) {
            navbar.classList.remove('glass-nav', 'text-navy', 'py-2', 'border-slate-200/80');
            navbar.classList.add('bg-transparent', 'text-white', 'py-4', 'border-transparent');
            mobileMenuBtn.classList.remove('text-navy');
            mobileMenuBtn.classList.add('text-white');
            isScrolled = false;
        }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

function initializeCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    const counterSection = document.getElementById('stats');
    if (!counters.length || !counterSection) return;

    const speed = 160;

    const animateCounters = () => {
        counters.forEach((counter) => {
            const target = Number(counter.getAttribute('data-target') || 0);

            const updateCount = () => {
                const count = Number(counter.innerText);
                const inc = Math.max(1, Math.ceil(target / speed));

                if (count < target) {
                    counter.innerText = String(Math.min(target, count + inc));
                    setTimeout(updateCount, 18);
                } else {
                    counter.innerText = String(target);
                }
            };

            updateCount();
        });
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            observer.disconnect();
        }
    }, { threshold: 0.45 });

    observer.observe(counterSection);
}

document.addEventListener('DOMContentLoaded', loadPageComponents);
