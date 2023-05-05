#Books and Reviews API
This is a simple RESTful API built using Node.js and Express.js for managing books and their reviews.

##Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

##Prerequisites
Node.js - JavaScript runtime
npm - Package manager for JavaScript
##Installation
Clone the repository
`git clone https://github.com/your_username/BooksAndReviewsAPI.git`
Navigate to the project folder

Install dependencies
`npm install`
Start the server
`npm run dev`
The server should be running on http://localhost:3000.

##API Endpoints
| HTTP Method | Endpoint | Description |
| -----------| -------- | ----------- |
| POST | /books | Create a new book |
| GET | /books | Get a list of all books |
| GET | /books/:bookId | Get a book by its ID |
| PUT | /books/:bookId | Edit a book's title |
| POST | /books/:bookId/reviews | Add a review for a book |
| DELETE | /books/:bookId/reviews/:reviewId | Delete a review by its ID |
| GET | /books/:bookId/reviews | Get a list of all reviews for a book |
