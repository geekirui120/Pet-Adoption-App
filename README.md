# Pet Adoption App

## Description
The Pet Adoption App is a React-based web application that allows users to browse, filter, and favorite pets available for adoption. The app fetches pet data from a local server and provides features such as filtering by type and breed, viewing pet details, and adding/removing pets from the favorites list.

## Features
- View a list of pets available for adoption
- Filter pets by type (male or female) and breed
- Mark pets as favorites
- View details of individual pets
- Persist favorite status using a backend API

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (https://nodejs.org/)
- npm 

### Steps
1. Clone the repository:
   
   git clone https://github.com/yourusername/pet-adoption-app.git
   
2. Navigate to the project directory:
   
   cd pet-adoption-app
   
3. Install dependencies:
   
   npm install
   
4. Start the development server:
   
   npm run dev
   

## Backend Setup
This app fetches data from a local JSON server. To set up the backend:
1. Install `json-server` globally (if not already installed):
   
   npm install -g json-server
   
2. Create a `db.json` file with the following structure:
   json
   {
     "pets": [
       {
         "id": 1,
         "name": "Buddy",
         "type": "Dog",
         "breed": "Golden Retriever",
         "isFavorite": false
       }
     ]
   }
   
3. Start the JSON server:
   
   json-server --watch db.json --port 8001
   

## Project Structure

pet-adoption-app/
│── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── PetList.js
│   │   ├── PetDetail.js
│   │   ├── FilterPanel.js
│   │   ├── Favorites.js
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── README.md


## Technologies Used
- React.js
- React Router
- JSON Server (for local backend)
- Fetch API

## Usage
1. Navigate to `http://localhost:3000/pets` to browse available pets.
2. Use the filter panel to refine your search by type (male or female) or breed.
3. Click on a pet to view more details.
4. Add pets to your favorites list by clicking the favorite button.
5. View your favorite pets by navigating to `http://localhost:3000/favorites`.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

