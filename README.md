# 🏞️ National Park Explorer

A React web app for discovering U.S. National Parks — search by name, browse park cards, and view detailed information including hours, fees, address, and more. Powered by the official [National Park Service (NPS) API](https://www.nps.gov/subjects/developer/api-documentation.htm).

## ✨ Features

- 🔍 **Search parks by name** — client-side filtering across all NPS units for fast, accurate results
- 🗂️ **Park cards grid** — responsive layout with images, names, and quick links
- 📄 **Park detail pages** — full description, operating hours (including holiday exceptions), entrance fees, and address
- 🌓 **Dark-themed sticky navbar** — stays pinned to the top while scrolling
- 📱 **Fully responsive** — works across mobile, tablet, and desktop screen sizes

## 🛠️ Built With

- [React](https://react.dev/) — UI library
- [React Router](https://reactrouter.com/) — client-side routing
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [NPS API](https://www.nps.gov/subjects/developer/api-documentation.htm) — official National Park Service data

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/national-park-explorer.git
   cd national-park-explorer
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up your NPS API key

   Get a free API key from the [NPS Developer Portal](https://www.nps.gov/subjects/developer/get-started.htm), then create a `.env` file in the project root:
   ```
   VITE_NPS_API_KEY=your_api_key_here
   ```

   > **Note:** Update `fetchParks`/`fetchPark` calls to read from `import.meta.env.VITE_NPS_API_KEY` instead of a hardcoded key before deploying.

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
src/
├── Components/
│   ├── Navbar.jsx        # Sticky dark-themed navigation bar
│   ├── Park_List.jsx     # Grid wrapper for park cards
│   └── Park_Cards.jsx    # Individual park card (image, name, link)
├── Pages/
│   ├── Home.jsx          # Search + park grid
│   └── Detail_page.jsx   # Single park details view
├── App.jsx                # Route definitions
└── main.jsx                # App entry point
```

## 🔑 API Reference

This project uses the following NPS API endpoints:

| Endpoint | Purpose |
|---|---|
| `GET /parks?q={query}` | Search parks by keyword |
| `GET /parks?parkCode={code}` | Fetch a single park's full details |
| `GET /parks?limit={n}` | Fetch the full parks list for local filtering |

Full API docs: [https://www.nps.gov/subjects/developer/api-documentation.htm](https://www.nps.gov/subjects/developer/api-documentation.htm)
