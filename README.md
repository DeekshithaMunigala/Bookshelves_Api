# Book App

This is a simple RESTful API for managing a collection of books.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed on your machine

### Installing

1. Clone the repository to your local machine:
git clone <https://github.com/DeekshithaMunigala/Simple_Restful_Api>

2. Navigate to the project directory:
cd book-app

3. Install dependencies:
npm install

### Running the Application

To start the server, run the following command:
node app.js

The server will start running at `http://localhost:3000`.

## Endpoints

### GET /

- Description: Welcome message.
- Example: `http://localhost:3000/`

### GET /api/books

- Description: Get all books.
- Example: `http://localhost:3000/api/books`

### GET /api/books/:id

- Description: Get a book by ID.
- Example: `http://localhost:3000/api/books/123`

### POST /api/books

- Description: Create a new book.
- Example Request Body:

{
"title": "New Book Title",
"author": "Author Name"
}

### PUT /api/books/:id

- Description: Update a book by ID.
- Example Reques

{
"title": "Updated Book Title",
"author": "Updated Author Name"
}

### DELETE /api/books/:id

- Description: Delete a book by ID.
- Example: `http://localhost:3000/api/books/123`

## Contributions

Contributions to improve this project are welcomed and encouraged! If you find any issues, bugs, or have suggestions for enhancements, feel free to open an issue or submit a pull request.

## Built With

- Node.js
- Express
- uuid

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
