class CardExporter {
    constructor() {
        this.preview = document.getElementById('preview');
        this.exportBtn = document.getElementById('exportBtn');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.exportBtn.addEventListener('click', () => this.exportAsImage());
    }

    async exportAsImage() {
        try {
            // 临时调整预览区域样式以确保完整捕获
            const originalScale = this.preview.style.transform;
            this.preview.style.transform = 'scale(1)';

            // 使用 html2canvas 将预览区域转换为图片
            const canvas = await html2canvas(this.preview, {
                backgroundColor: '#1e1e1e',
                scale: 2, // 提高导出图片质量
                logging: false,
                useCORS: true,
                allowTaint: true,
                width: this.preview.offsetWidth,
                height: this.preview.offsetHeight,
                // 确保捕获阴影效果
                onclone: (clonedDoc) => {
                    const clonedPreview = clonedDoc.getElementById('preview');
                    clonedPreview.style.transform = 'scale(1)';
                    // 确保克隆的元素保持原始尺寸
                    clonedPreview.style.width = this.preview.offsetWidth + 'px';
                    clonedPreview.style.height = this.preview.offsetHeight + 'px';
                }
            });

            // 恢复原始缩放比例
            this.preview.style.transform = originalScale;

            // 获取文件名
            const format = document.getElementById('format').value;
            const cardTitle = document.getElementById('cardTitle').value || "个人名片";
            const fileName = `${cardTitle}.png`;

            // 创建下载链接
            const link = document.createElement('a');
            link.download = fileName;
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();
        } catch (error) {
            console.error('导出图片时出错:', error);
            alert('导出失败，请稍后重试');
        }
    }
}