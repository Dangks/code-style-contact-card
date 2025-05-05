class RustFormatter {
    format(data) {
        const formattedData = {
            "name": data.name || "Dangks",
            "title": data.title || "软件工程师",
            "phone": data.phone || "+86-1234567890",
            "email": data.email || "dangks@email.com",
            "link": data.link || "https://github.com/Dangks"
        };
        
        return this.syntaxHighlight(JSON.stringify(formattedData, null, 2));
    }

    syntaxHighlight(json) {
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
            let cls = 'json-string';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'json-key';
                    match = match.replace(':', '') + ':';
                }
            }
            return `<span class="${cls}">${match}</span>`;
        }).replace(/[{}\[\],]/g, match => `<span class="json-punctuation">${match}</span>`);
    }
}