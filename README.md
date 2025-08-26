# Pokémon Application

A React + Vite application to browse and search Pokémon using the PokéAPI.

## Features
- Fetches the full Pokédex dataset from PokéAPI
- Displays Pokémon names and sprites
- Search/filter Pokémon by name
- Animated gradient background and interactive button styles
- Responsive UI with Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/MohitBidwai/PokemonApplication.git
   cd PokemonApplication
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage
- Click the **Fetch Full Pokedex Dataset** button to load all Pokémon.
- Use the search box to filter Pokémon by name.
- Browse the list with images and names.

## Technologies Used
- React
- Vite
- Redux Toolkit
- Tailwind CSS
- PokéAPI

## Folder Structure
```
PokemonApplication/
├── public/
├── src/
│   ├── components/
│   │   └── FetchPokedex.jsx
│   ├── store/
│   │   ├── index.js
│   │   └── pokemonSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── ...
├── package.json
├── README.md
└── ...
```

## License
MIT
