# Car Garage — Requirements

## Goal

Build a small React application for managing cars in a garage.

This is a demo application that will later be used for learning:
- Git
- GitHub
- CI/CD
- GitHub Actions
- Docker
- deployments
- DEV / QA / PROD environments

Keep the application simple. Do not overengineer it.

---

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- localStorage

Do NOT use:

- TypeScript
- Backend
- Database
- Redux
- Authentication
- External APIs
- UI component libraries

---

## Main Page

Create a simple page titled:

# Car Garage

Display a list/table of cars.

Each car should contain:

- Brand
- Model
- Year
- Mileage
- Status

Possible statuses:

- Available
- Service
- Sold

Example:

| Brand | Model | Year | Mileage | Status |
|------|------|------|------|------|
| BMW | 320d | 2020 | 85000 | Available |
| Audi | A4 | 2019 | 120000 | Service |

---

## CRUD

The user must be able to:

### Add a car

Form fields:

- Brand
- Model
- Year
- Mileage
- Status

### Edit a car

Allow editing all fields.

### Delete a car

Provide a Delete button for every car.

Ask for confirmation before deleting.

---

## Local Storage

All cars must be persisted in browser localStorage.

Use the key:

`cars`

When the application starts:

1. Read cars from localStorage.
2. If cars exist, display them.
3. If no cars exist, start with a few demo cars.

Whenever a car is:

- added
- edited
- deleted

update localStorage.

Refreshing the browser must NOT delete the cars.

---

## UI

Keep the UI simple and clean.

Suggested layout:

Car Garage

[ Add Car ]

--------------------------------------------

BMW 320d
2020 | 85,000 km
Status: Available

[ Edit ] [ Delete ]

--------------------------------------------

Audi A4
2019 | 120,000 km
Status: Service

[ Edit ] [ Delete ]

--------------------------------------------

No advanced design is required.

The application should work well on desktop.

---

## Suggested Components

Keep the component structure small.

Example:

src/
├── components/
│   ├── CarForm.jsx
│   ├── CarList.jsx
│   └── CarItem.jsx
├── App.jsx
├── main.jsx
└── styles.css

Do not create unnecessary abstractions.

---

## Code Requirements

- Use functional React components.
- Use React hooks.
- Use `useState`.
- Use `useEffect` only where appropriate.
- Keep components easy to understand.
- Prefer simple code over clever abstractions.
- No unnecessary dependencies.

---

## Important

This project is intentionally small.

Do NOT add features that are not described in this document.

The main purpose of this project is to have a small working React application that can later be used to practice CI/CD and deployments.