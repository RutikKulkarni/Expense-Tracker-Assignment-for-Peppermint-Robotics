# Expense Tracker

An expense tracker application that allows users to manage their finances effectively. The application enables users to add, delete, and track their expenses and incomes, ultimately helping them to see their net balance.

- Live URL: [Expense Tracker](https://expense-tracker-assignment-for-peppermint-robotics.vercel.app/)

## Features

- **Add Expense/Income**: Users can add entries for both expenses and incomes.
- **Delete Expense/Income**: Users can remove any existing entry.
- **Show Net Balance**: The application calculates and displays the net balance based on the total income and expenses.
- **Notifications**: Users receive alerts (using Notistack) whenever they add or delete a transaction, ensuring they are informed of the changes.
- **Theme Selection**: Users can select between light and dark themes based on their preferences.

## Requirements

### Add Expense/Income
Users should be able to add an expense or income entry, which includes:
- **Amount**: The monetary value of the entry.
- **Description**: A brief description of the entry.
- **Date**: The date of the transaction.
- **Type**: Specify whether the entry is an Expense or Income.

### Delete Expense/Income
Users should be able to delete any existing expense or income entry from the list.

### Show Net Balance
The application should calculate and display the net balance as follows:
- **Net balance = Total Income - Total Expenses**

## Installation

To get started with the Expense Tracker application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/RutikKulkarni/Expense-Tracker-Assignment-for-Peppermint-Robotics.git
   ```

2. Navigate into the project directory:
   ```bash
   cd Expense-Tracker-Assignment-for-Peppermint-Robotics
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Screenshot

![image](https://github.com/user-attachments/assets/b5d50db1-8453-43a9-8448-03cb074188ae)

### Key Additions:
- **Notifications**: Highlighted the use of Notistack for alerts when transactions are added or deleted.
- **Theme Selection**: Mentioned that users can select between light and dark themes.
