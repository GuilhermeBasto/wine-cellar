# wine-cellar

This repository contains the Angular frontend application for wine cellar application

## Setup

### Clone repository

Clone the repository by running the following command:

```sh

# With SSH.

git  clone  git@github.com:GuilhermeBasto/wine-cellar.git && cd  wine-cellar


# Or with HTTPS.

git  clone  https://github.com/GuilhermeBasto/wine-cellar.git && cd  wine-cellar

```

### Install dependencies

Once you've cloned the repository install the required dependencies:

```sh

npm  i

```

## Run

### Development server

Two steps are required to run the project:

#### Run mock json server

```sh

npm run mock:server

```

#### Run development angular server

```sh

ng s

```

## Project structure

The directory structure is the following:

```sh
movies.fe
  ├──app
  │ ├──dashboard-module
  │ │  └──pages
  │ │  │   ├──dashboard
  │ │  │   ├──add-wine
  │ │  │   └──wine-details
  │ │  └──routing-module
  │ │
  │ ├──shared-module
  │ │  └──components
  │ │  │   ├──button
  │ │  │   ├──card
  │ │  │   └──...
  │ │  └──icons
  │ │  │   ├──add-icon
  │ │  │   ├──back-icon
  │ │  │   └──...
  │ │  └──components
  │ │  │   ├──button
  │ │  │   ├──card
  │ │  │   └──...
  │ │  └──interceptors
  │ │  │
  │ │  └──models
  │ │  │
  │ │  └──services
  │ └──app.module
  ├──package.json
  └──...
```

## Tools

- [Angular]: v14.2.4
- Node.js > v16.13.2

## Main Features

### Dashboard

- **List of Bottles:** View a list of wine bottles with a customizable page size. You can load more bottles by clicking the "Load More" button, allowing for easy pagination.

- **Search Functionality:** Easily find wine information using the search bar. The app will query the database and display relevant results.

- **Set Wine as Favorite:** Mark your favorite wines by clicking on the star icon in the wine card. This feature helps you keep track of wines you love.

- **Add New Wine Shortcut:** Access the "Add New Wine" page quickly using the plus sign located in the navigation bar.

- **Wine Details Shortcut:** Quickly navigate to the details page of a wine directly from the dashboard.

### Details Page

- **Wine Details:** View detailed information and images of the selected wine on this page.

- **Delete Wine:** Delete a wine from the database using a confirmation modal to prevent accidental deletions.

- **Homepage Shortcut:** Easily return to the dashboard with a shortcut button provided on the details page.

- **Edit Wine Shortcut:** Access the wine editing page directly from the details page.

### Add Wine

- **Form:** Populate the wine database with custom wine information using a user-friendly form.

- **Cancel Addition:** Have the flexibility to cancel the wine addition process without saving the changes.

- **Save Wine:** Once you've entered the wine details, save the wine to the database effortlessly.

- **Homepage Shortcut:** Conveniently return to the dashboard after adding a new wine.

### Edit Wine

- **Preloaded Data:** Edit wine details with ease as the form comes preloaded with data specific to the selected wine.

- **Cancel Editing:** If needed, you can cancel the editing process without saving the changes.

- **Save Wine:** After making the desired changes, save the updated wine details to the database.

- **Homepage Shortcut:** Quickly navigate back to the dashboard after finishing the editing process.
