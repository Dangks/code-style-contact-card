class YamlFormatter {
    format(data) {
        const yaml = `# Contact Card
name: ${data.name || 'Dangks'}
title: ${data.title || '软件工程师'}
phone: ${data.phone || '+86-1234567890'}
email: ${data.email || 'dangks@email.com'}
link: ${data.link || 'https://github.com/Dangks'}`;
    return this.syntaxHighlight(yaml);
}

    syntaxHighlight(code) {
        return code.replace(/^([^:\n#]+):/gm, '<span class="json-key">$1:</span>')
                  .replace(/: (.+)$/gm, ': <span class="json-string">$1</span>')
                  .replace(/^#.*$/gm, '<span class="comment">$&</span>');
    }
}