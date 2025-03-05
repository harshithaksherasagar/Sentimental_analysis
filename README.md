# Sentiment Analysis Web Application

This is a Flask-based web application that performs sentiment analysis using the `transformers` library. It analyzes user-provided text and visualizes sentiment results with pie charts using Matplotlib and Pandas.

## Features
- Sentiment analysis using Hugging Face's `pipeline('sentiment-analysis')`
- Web-based form to submit text for analysis
- Pie chart visualization of sentiment results
- Flask routing for different pages
- JSON-based sentiment analysis for multiple inputs

## Prerequisites
Make sure you have Python installed. You also need to install the required dependencies.

### Install Dependencies
```sh
pip install flask transformers pandas matplotlib
```

## How to Run the Application
```sh
python app.py
```

The application will start at `http://127.0.0.1:5000/`.

## API Endpoints
- `/` - Registration page
- `/slog.html` - Login page
- `/sreg.html` - Registration page
- `/form.html` - Text sentiment analysis form
- `/submit` - Handles text submission for sentiment analysis
- `/show` - Handles JSON-based sentiment analysis
- `/admin.html` - Admin page
- `/admindata.html` - Displays results with pie charts
- JavaScript files (`firebase.js`, `data.js`, `fetch.js`) are also served

## How to Upload Your Code to GitHub

### Step 1: Initialize the Repository (If Not Already Done)
If you haven't initialized your local folder as a Git repository, run:
```sh
git init
```

### Step 2: Add Remote Repository
If you haven’t added the GitHub remote yet, add it with:
```sh
git remote add origin <your-repo-URL>
```
Example:
```sh
git remote add origin https://github.com/your-username/your-repo.git
```

### Step 3: Pull the Existing `README.md` File
Since you already have a README file in your repository, pull the latest changes first:
```sh
git pull origin main --allow-unrelated-histories
```

### Step 4: Add Your Files
```sh
git add .
```

### Step 5: Commit Your Changes
```sh
git commit -m "Added Flask sentiment analysis application"
```

### Step 6: Push to GitHub
```sh
git push origin main
```

## Future Enhancements
- Improve UI/UX for better user experience
- Add a database to store sentiment results
- Implement user authentication
- Optimize code and error handling

---
