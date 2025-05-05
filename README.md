# Code Style Contact Card

[English](README.md) | [中文](README_zh.md)

![ContactCard](https://github.com/user-attachments/assets/ce796f23-deeb-4831-b34d-72bad11fb794)

### Description
A web-based programmer specific contact card generator that can display contact card information in various programming language formats, allowing you to generate unique programmer style contact cards using code. The card design mimics popular IDE interfaces with syntax highlighting.

### Features
- Multiple programming language formats support:
  - JSON
  - YAML
  - XML
  - TypeScript
  - Python
  - Java
  - Go
  - Rust
- IDE-style dark theme display
- Real-time preview
- Zoom control (50% - 200%)
- Export as high-quality PNG image
- Line numbers display
- Syntax highlighting

### Usage
1. Fill in your information:
   - Card Title
   - Name
   - Title
   - Phone
   - Email
   - Link
2. Choose code format
3. Click "Save as Image" button to export

### Technical Details
- Pure frontend implementation
- No external dependencies (except html2canvas)
- Standard business card size (ISO 7810 ID-1): 85.60 × 53.98 mm
- Responsive design

### Project Structure
```
code-style-contact-card/
└── src/
    ├── index.html          # Main HTML file
    ├── css/
    │   └── style.css      # Styles
    └── js/
        ├── cardGenerator.js    # Card generation logic
        ├── exportCard.js       # Image export functionality
        ├── html2canvas.min.js  # HTML to canvas conversion
        ├── main.js             # Main application logic
        ├── zoomController.js   # Zoom functionality
        └── formatters/         # Code formatters
            ├── jsonFormatter.js
            ├── xmlFormatter.js
            ├── yamlFormatter.js
            ├── tsFormatter.js
            ├── pyFormatter.js
            ├── javaFormatter.js
            ├── goFormatter.js
            └── rustFormatter.js
```

### License
[MIT License](LICENSE)

### Disclaimer
- Project development was assisted by AI tool Claude 3.5
- Third-party libraries used:
  - html2canvas (v1.4.1): For converting HTML content to images
- Inspiration: VSCode editor interface style

---
*Note: This project is for entertainment purposes only, recommended to use alongside formal business cards*
