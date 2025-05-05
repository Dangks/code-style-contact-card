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
            // 使用 html2canvas 将预览区域转换为图片
            const canvas = await html2canvas(this.preview, {
                backgroundColor: '#1e1e1e',
                scale: 2, // 提高导出图片质量
                logging: false,
                useCORS: true
            });

            // 获取文件名
            const format = document.getElementById('format').value;
            const cardTitle = document.getElementById('cardTitle').value || "个人名片";
            const fileName = `${cardTitle}.png`;

            // 创建下载链接
            const link = document.createElement('a');
            link.download = fileName;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (error) {
            console.error('导出图片时出错:', error);
            alert('导出失败，请稍后重试');
        }
    }
}