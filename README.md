# pvz-shenanigans

# About
A site by [Kat](https://github.com/k1tk4t5) and [Drigo](https://github.com/DrigoDiaz) about the game Plants vs Zombies, built with Django,React, and data from the [PVZ API](https://pvz-2-api.vercel.app/docs#information).

## Visiting the live site
Our live site is located at https://pvz-website.onrender.com/.

## Locally running the frontend
### 1. Download repo
First, download this repo locally by running
```
git clone https://github.com/DrigoDiaz/pvz-shenanigans.git
```

### 2. Download dependencies and run
```
cd site
npm install
npm run dev
```
Then, the site's frontend should be accessible at http://localhost:5173/.

## Locally running the backend
Make sure you've cloned the repo locally!
### 1. Set up Python virtual environment and install Django
```
cd backend
python -m venv venv
```

Then, depending on whether you are running Powershell or Bash, run the following command:
#### Powershell
```
venv\Scripts\activate
```
#### Bash
```
source venv/Scripts/activate
```

Verify that `(venv)` appears in the terminal, then install Django.
```
pip install Django
```

### Change into pvz directory and run the backend
```
cd pvz
python manage.py runserver
```

Then, the backend will be available at http://127.0.0.1:8000/.