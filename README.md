# BelmontCragin.com

BelmontCragin.com is a digital hub celebrating local workers, small businesses, schools, and families in Chicago's Belmont Cragin neighborhood. It provides a resource directory, community stats, and easy ways to submit local listings or volunteer.

## Features

- **Resource Directory**: Searchable directory of local small businesses, schools, and organizations.
- **Modern UI/UX**: Frosted glassmorphism, responsive navigation drawer, and deep forest green accents.
- **Light/Dark Mode Support**: Respects system preferences and switches seamlessly.
- **Legal Compliance**: Full Privacy Policy and Terms of Service documents.

## Tech Stack

- **Frontend**: HTML5, Vanilla CSS3, Vanilla JavaScript (ES6)
- **Icons**: FontAwesome
- **Build System**: Node.js build script (`build.js`)
- **Hosting**: Firebase Hosting

## Getting Started

### Prerequisites

You need Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/belmontcragin.git
   cd belmontcragin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To run the application locally or build it:

- **Build**:
  ```bash
  npm run build
  ```
  The production-ready assets will be bundled into the `dist/` directory.

### Deployment

This project is deployed using Firebase Hosting. To deploy updates:

1. Build the production files:
   ```bash
   npm run build
   ```
2. Deploy to Firebase:
   ```bash
   firebase deploy --only hosting
   ```

<!-- CI/CD Test Push: Active and verified via GitHub Actions -->

