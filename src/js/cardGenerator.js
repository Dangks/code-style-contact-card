class CardGenerator {
    constructor() {
        this.formatters = {
            json: new JsonFormatter(),
            xml: new XmlFormatter(),
            yaml: new YamlFormatter(),
            ts: new TypeScriptFormatter(),
            py: new PythonFormatter(),
            java: new JavaFormatter(),
            go: new GoFormatter(),
            rs: new RustFormatter()
        };
    }

    generateCard(data, format) {
        const formatter = this.formatters[format];
        if (!formatter) {
            throw new Error(`不支持的格式: ${format}`);
        }
        return formatter.format(data);
    }
}