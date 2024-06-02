# AskPDF Front end
> This project is a web application that allows users to upload PDF documents, ask questions related to the content of the PDFs, and receive answers. The backend is built using FastAPI, with natural language processing (NLP) capabilities powered by LangChain and LlamaIndex. The frontend is designed using React.js, and the application uses SQLite for database management and stores uploaded PDFs in the local filesystem.

You can view the live AskPDF Demo at [Demo](https://files.fm/u/yeprfswn8t)

## Folder Structure

The workspace contains two folders by default, where:

- `src`: the folder to maintain sources
- `public`: the folder to maintain public assets

Inside the `src` directory, the code is structured as follows:

- `components`: This directory will contain all the common component files, which can be reused throughout the project.
- `views`: This directory will contain all the domain-specific component files. Each domain will have a separate folder.
- `contexts`: This directory will contain all the context files.
- `services`: This directory will contain all the service files.

## Development Setup

To set up the development environment for AskPDF, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install all the necessary packages and dependencies using `npm install`.
4. Start the development server using `npm start`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Available Features
- **PDF Upload**: Users can upload PDF documents to the application.
- **Asking Questions**: Users can ask questions related to the content of uploaded PDFs.
- **Displaying Answers**: The application displays answers to user questions based on natural language processing.

## Design Preview
For an overview of the application's design, please refer to the [Figma design](https://www.figma.com/file/QHpASp7wGRRcjh0oxCuspL/FullStack-Engineer-Internship-Assignment?type=design&node-id=0-1&mode=design&t=geu9rfpXEecN8eFZ-0).

## Author

👤 **Isaac Pitwa**

- GitHub: [@isaacpitwa](https://github.com/isaacpitwa)
- Twitter: [@isaacpitwa](https://twitter.com/isaacpitwa)
- LinkedIn: [LinkedIn](https://linkedin.com/in/isaac-pitwa)

