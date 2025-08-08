# 📧 Mail Portal - Nevzat Ayaz Anatolian High School

A modern, bilingual web portal for Nevzat Ayaz Anatolian High School's student email system, built with Next.js and modern UI components.

![School Portal Preview](public/placeholder.svg)

## 🌟 Features

- **📧 Student Email Management**: Easy email account request system for students
- **🌍 Bilingual Support**: Turkish and English language options
- **🎨 Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🔗 School Integration**: Direct links to official school website and network
- **⚡ Fast Performance**: Built with Next.js 15 for optimal speed
- **🎯 User-Friendly**: Clean, intuitive interface for students and staff

## 🚀 Tech Stack

- **Frontend**: React 19, Next.js 15.2.4
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: pnpm
- **UI Components**: Radix UI primitives

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/naaltech/mail-portal.git
   cd mail-portal
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## 🏗️ Project Structure

```
mail-portal/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   └── theme-provider.tsx
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets
├── styles/            # Additional styles
└── school-portal.tsx  # Main portal component
```

## 🎨 UI Components

The project uses [shadcn/ui](https://ui.shadcn.com/) components including:

- **Layout**: Card, Separator, Tabs
- **Forms**: Button, Input, Select, Checkbox
- **Navigation**: Breadcrumb, Dropdown Menu, Navigation Menu
- **Feedback**: Alert, Toast, Progress
- **Data Display**: Table, Avatar, Badge
- **Overlays**: Dialog, Popover, Tooltip

## 🌐 Features in Detail

### Email Request System
- Students can request new email accounts
- Direct integration with school's email management system
- Streamlined application process

### Language Support
- **Turkish (TR)**: Default language for local students
- **English (EN)**: International accessibility
- Easy language switching with toggle button

### School Integration
- **Official Website**: Direct link to school's MEB website
- **School Network**: Access to Nevzat Ayaz interaction network
- **Branding**: Consistent school colors and theming

## 🎯 Usage

### For Students
1. **Request Email**: Click "E-posta Talebi Oluştur" to apply for a new student email
2. **Visit School Website**: Access official school information and announcements
3. **Join Network**: Connect with the school community through the interaction network

### For Administrators
- The portal serves as a central hub for student email management
- Easy navigation to external school systems
- Bilingual support for international students

## 🛡️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Responsiveness

The portal is fully responsive and optimized for:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🎨 Customization

### Colors
The school's primary color `#00a5d4` is used throughout the interface. To customize:

```css
/* Update in globals.css or component styles */
:root {
  --school-primary: #00a5d4;
}
```

### Translations
Add new languages by extending the `translations` object in `school-portal.tsx`:

```tsx
const translations = {
  tr: { /* Turkish translations */ },
  en: { /* English translations */ },
  de: { /* German translations */ }, // Add new language
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software belonging to Nevzat Ayaz Anatolian High School.

## 🏫 About Nevzat Ayaz Anatolian High School

Nevzat Ayaz Anatolian High School is committed to providing quality education and modern technological solutions for its students. This portal represents our dedication to digital transformation in education.

### Contact Information
- **Website**: [nevzatayazal.meb.k12.tr](https://nevzatayazal.meb.k12.tr/)
- **Network**: [naal.org.tr](https://naal.org.tr)
- **Email System**: [naal.org.tr/student-email](https://naal.org.tr/student-email)

---

**Made with ❤️ for Nevzat Ayaz Anatolian High School students and faculty**

*For technical support or questions about this portal, please contact the school's IT department.*
