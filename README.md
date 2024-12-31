# Task Manager

This project is a simple Task Management application built with **Node.js**, **Express**, and **EJS**. It allows users to create tasks with a title and description, and view them in a list. Each task can be viewed in detail by clicking "Read more."

## Features

- Add tasks with a title and description.
- View a list of all tasks.
- Read detailed task information.
- Tasks are saved as `.txt` files in the `files` directory.

## Tech Stack

- **Node.js**: Backend server framework.
- **Express**: Web framework for Node.js.
- **EJS**: Templating engine for rendering HTML pages.
- **Tailwind CSS**: For styling the UI.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node package manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/task-manager.git
   ```

2. Navigate into the project directory:

   ```bash
   cd task-manager
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the application:

   ```bash
   node index.js
   ```

2. Open your browser and visit `http://localhost:3000` to view the task manager.

3. You can create tasks by filling in the form with a title and task details.

4. Tasks will be displayed on the home page, and you can click "read more" to view detailed information about each task.

## Project Structure

```
├── public
│   └── javascripts
│       └── script.js  # Add any custom JavaScript here
├── views
│   ├── index.ejs      # Main page with form and task list
│   └── task.ejs       # Detailed task view page
├── files              # Directory where tasks are saved as .txt files
├── index.js           # Main server file
├── package.json       # Project configuration and dependencies
└── README.md          # This readme file
```

## Adding Tasks

1. Open the home page.
2. Enter a task title and task description.
3. Click "Add Task."
4. The task will be saved, and you can view the task on the same page.

## Viewing Tasks

- On the home page, all tasks will be displayed in a list.
- Click on "read more" to see the full details of each task.

## Known Issues

- Make sure the `files` directory exists in the root of the project for task creation to work.
- No data persistence beyond the session; tasks are stored as text files.

## License

This project is licensed under the MIT License.

---
