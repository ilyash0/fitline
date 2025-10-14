document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('[data-tab]');
    const sections = document.querySelectorAll('[data-section]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('tabs-block__tab_active'));
            tab.classList.add('tabs-block__tab_active');

            sections.forEach(section => {
                section.classList.add('disabled');
            });

            document.querySelector(`[data-section="${target}"]`).classList.remove('disabled');
        });
    });
});