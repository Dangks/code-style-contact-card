document.addEventListener('DOMContentLoaded', () => {
    const cardGenerator = new CardGenerator();
    const preview = document.getElementById('cardContent');
    const previewTitle = document.getElementById('previewTitle');
    const lineNumbers = document.getElementById('lineNumbers');

    // 获取所有输入元素
    const inputs = {
        cardTitle: document.getElementById('cardTitle'),
        name: document.getElementById('name'),
        title: document.getElementById('title'),
        phone: document.getElementById('phone'),
        email: document.getElementById('email'),
        link: document.getElementById('link'),
        format: document.getElementById('format')
    };

    // 更新预览的函数
    function updatePreview() {
        const data = {
            name: inputs.name.value,
            title: inputs.title.value,
            phone: inputs.phone.value,
            email: inputs.email.value,
            link: inputs.link.value
        };

        try {
            const format = inputs.format.value;
            const result = cardGenerator.generateCard(data, format);
            
            // 更新文件名，使用自定义标题
            const cardTitle = inputs.cardTitle.value || "个人名片";
            previewTitle.textContent = `${cardTitle}.${format}`;
            
            // 更新内容
            preview.innerHTML = result;

            // 更新行号
            updateLineNumbers(result);

            // 调试输出
            // console.log('Preview updated:', {
            //     format,
            //     data,
            //     result
            // });
        } catch (error) {
            console.error('更新预览时出错:', error);
        }
    }

    // 更新行号
    function updateLineNumbers(content) {
        const lines = content.split('\n');
        const lineCount = lines.filter(line => line.trim().length > 0).length;
        
        lineNumbers.innerHTML = '';
        for(let i = 1; i <= lineCount; i++) {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'line-number';
            lineDiv.textContent = i;
            lineNumbers.appendChild(lineDiv);
        }
    }

    // 为所有输入元素添加事件监听
    Object.values(inputs).forEach(input => {
        input.addEventListener('input', updatePreview);
        input.addEventListener('change', updatePreview);
    });

    // 初始化预览
    updatePreview();
});