# Virtual Pet Adoption Center

A React-based frontend application for managing a virtual pet adoption center. This application allows users to view, add, edit, and delete pets, as well as mark them as adopted.

## Features

- View all pets in an attractive card layout
- Filter pets by mood (Happy, Excited, Sad)
- Filter pets by adoption status
- Add new pets to the system
- Edit existing pet details
- Mark pets as adopted
- Delete pets from the system
- Visual indicators for pet moods using both colors and emojis
- Responsive design for all device sizes
- Animated UI elements for better user experience

## Tech Stack

- Express.js (Backend library)
- Mongoose (Database)
- Cors

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/razorisuru/Virtual-Pet-Adoption-Center-Backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your postaman and navigate to:
```
http://localhost:5000/api
```

## API Endpoints

The frontend communicates with the following backend endpoints:

- `GET /api/pets` - Get all pets
- `GET /api/pets/:id` - Get a single pet
- `POST /api/pets` - Add a new pet
- `PUT /api/pets/:id` - Update a pet
- `PATCH /api/pets/:id/adopt` - Mark a pet as adopted
- `DELETE /api/pets/:id` - Delete a pet
- `GET /api/pets/filter?mood=<mood>` - Filter pets by mood



## Future Improvements

- Add user authentication
- Implement pet personality quiz
- Generate adoption certificates
- Implement pet categories and more detailed filtering