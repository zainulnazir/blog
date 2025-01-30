# My Blog

This is a simple blog application hosted on your own server. It allows users to create, read, update, and delete blog posts.

## Project Structure

```
my-blog
├── src
│   ├── index.js               # Entry point of the application
│   ├── controllers
│   │   └── blogController.js   # Handles blog-related operations
│   ├── models
│   │   └── blogModel.js        # Defines the schema for blog posts
│   ├── routes
│   │   └── blogRoutes.js       # Sets up the routes for the blog application
│   └── views
│       └── index.ejs           # Template for rendering the main page
├── public
│   ├── css
│   │   └── styles.css          # Styles for the blog
│   ├── js
│   │   └── scripts.js          # Client-side JavaScript for interactivity
│   └── images                  # Directory for storing images
├── package.json                # Configuration file for npm
├── .env                        # Environment variables for configuration
└── README.md                   # Documentation for the project
```

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Create a `.env` file and add your environment variables.
5. Start the server using `node src/index.js`.

## Usage

- Access the blog at `http://localhost:3000`.
- Use the provided routes to manage blog posts.