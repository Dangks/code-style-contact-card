class ThemeController {
    constructor() {
        this.themeSelect = document.getElementById('theme');
        this.init();
    }

    init() {
        // 监听主题切换
        this.themeSelect.addEventListener('change', () => {
            this.changeTheme(this.themeSelect.value);
        });

        // 初始化主题
        const savedTheme = localStorage.getItem('card-theme') || 'dark';
        this.themeSelect.value = savedTheme;
        this.changeTheme(savedTheme);
    }

    changeTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('card-theme', theme);
    }
}