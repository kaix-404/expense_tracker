# Expense Tracker Dashboard

A modern and responsive Expense Tracker Dashboard built with React and Tailwind CSS.  
This application allows users to manage expenses, visualize spending patterns, and convert totals into multiple currencies using live exchange rates.

---

## Live Demo

**[View Live Project](https://expense-tracker-sable-eight.vercel.app/)**

---

## Features

### Expense Management
- Add new expenses with:
  - Name
  - Amount
  - Category
- Delete expenses instantly
- Automatic running total calculation

### Analytics Dashboard
- Interactive donut chart visualization
- Category-wise expense breakdown
- Real-time financial overview

### Currency Conversion
- Live exchange rate conversion
- Multiple currency support:
  - USD
  - EUR
  - GBP
  - JPY
- Dynamic conversion updates

### UI & UX
- Modern dark dashboard design
- Glassmorphism-inspired cards
- Smooth hover animations
- Responsive layout for desktop and mobile
- Custom dropdown interactions
- Persistent local storage support

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Libraries
- Recharts
- Lucide React

### API
- ExchangeRate API

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/kaix-404/expense_tracker
```

Navigate into the project directory:

```bash
cd expense-tracker-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Build for Production

```bash
npm run build
```

---

## Project Structure

```bash
src/
│
├── components/
│   ├── CurrencyConverter.jsx
│   ├── ExpenseCard.jsx
│   ├── ExpenseChart.jsx
│   ├── ExpenseForm.jsx
│   ├── ExpenseList.jsx
│   └── SummaryPanel.jsx
│
├── data/
│   └── categories.js
│
├── App.jsx
└── main.jsx
```

---

## Key Highlights

- Component-based architecture
- React Hooks state management
- Real-time API integration
- Fully responsive UI
- Persistent data using localStorage
- Modern dashboard-inspired design

---

## Future Improvements

- Expense filtering & search
- Export expenses to CSV
- Authentication system
- Monthly analytics
- Light/Dark mode toggle
- Budget tracking system

---

## Author

Developed by Kai