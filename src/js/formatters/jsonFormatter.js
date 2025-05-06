class JsonFormatter {
    format(data) {
        const formattedData = {
            "name": data.name || "Dangks",
            "title": data.title || "软件工程师",
            "phone": data.phone || "+86-1234567890",
            "email": data.email || "dangks@email.com",
            "link": data.link || "https://github.com/Dangks"
        };
        
        // 使用 JSON.stringify 时添加空格缩进
        const json = JSON.stringify(formattedData, null, 2);
        return this.syntaxHighlight(json);
    }

    syntaxHighlight(json) {
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
            let cls = 'json-string';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'json-key';
                    match = match.replace(':', '') + ':'; // 确保冒号显示
                }
            }
            return `<span class="${cls}">${match}</span>`;
        }).replace(/[{}\[\],]/g, match => `<span class="json-punctuation">${match}</span>`);
    }

    formatJson(data) {
        return JSON.stringify(data, null, 4)
            .replace(/"(\w+)":/g, '<span class="key">"$1"</span>:')
            .replace(/: "([^"]+)"/g, ': <span class="string">"$1"</span>')
            .replace(/: (\d+)/g, ': <span class="number">$1</span>')
            .replace(/[{}\[\],]/g, '<span class="symbol">$&</span>');
    }
}