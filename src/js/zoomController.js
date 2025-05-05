class ZoomController {
    constructor() {
        this.preview = document.getElementById('preview');
        this.previewSection = document.querySelector('.preview-section');
        this.zoomLevel = document.getElementById('zoomLevel');
        this.zoomIn = document.getElementById('zoomIn');
        this.zoomOut = document.getElementById('zoomOut');
        
        this.currentZoom = 1.6; // 默认缩放120%
        this.minZoom = 0.5;
        this.maxZoom = this.calculateMaxZoom();
        this.zoomStep = 0.1;
        
        this.setupEventListeners();
        this.updateZoom(); // 初始化时应用默认缩放
    }

    calculateMaxZoom() {
        // 计算最大缩放比例，确保不超出容器
        const containerWidth = this.previewSection.clientWidth;
        const containerHeight = this.previewSection.clientHeight;
        const cardWidth = 85.60 * 3.779528; // 将mm转换为px (1mm ≈ 3.779528px)
        const cardHeight = 53.98 * 3.779528;
        
        const maxWidthZoom = (containerWidth * 0.9) / cardWidth;
        const maxHeightZoom = (containerHeight * 0.9) / cardHeight;
        
        return Math.min(maxWidthZoom, maxHeightZoom, 2); // 取最小值，且不超过200%
    }

    setupEventListeners() {
        this.zoomIn.addEventListener('click', () => this.zoom(true));
        this.zoomOut.addEventListener('click', () => this.zoom(false));
        
        // 监听容器大小变化
        const resizeObserver = new ResizeObserver(() => {
            this.maxZoom = this.calculateMaxZoom();
            if (this.currentZoom > this.maxZoom) {
                this.currentZoom = this.maxZoom;
                this.updateZoom();
            }
        });
        resizeObserver.observe(this.previewSection);
        
        // 添加鼠标滚轮缩放支持
        this.preview.addEventListener('wheel', (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
                this.zoom(e.deltaY < 0);
            }
        }, { passive: false });
    }

    zoom(isZoomIn) {
        const oldZoom = this.currentZoom;
        if (isZoomIn) {
            this.currentZoom = Math.min(this.currentZoom + this.zoomStep, this.maxZoom);
        } else {
            this.currentZoom = Math.max(this.currentZoom - this.zoomStep, this.minZoom);
        }

        if (oldZoom !== this.currentZoom) {
            this.updateZoom();
        }
    }

    updateZoom() {
        this.preview.style.transform = `scale(${this.currentZoom})`; // 移除 translateY
        this.zoomLevel.textContent = `${Math.round(this.currentZoom * 100)}%`;
    }
}