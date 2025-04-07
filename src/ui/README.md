# Customer Segmentation Dashboard

This React application provides visualizations of customer segmentation based on purchasing behavior from Xero data.

## Features

- View customer segments by spending levels
- View customer segments by purchase frequency
- View customer segments by industry
- View customer segments by payment behavior
- View top customers by total spending
- Insights about customer behavior

## Installation

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Dependencies

- React 18
- Recharts (for data visualization)
- Tailwind CSS (for styling)

## Data Structure

Customer data is stored in the `data/customerData.js` file, structured as:

- spendingSegments: Customer segments based on spending levels
- frequencySegments: Customer segments based on purchase frequency
- industrySegments: Customer segments based on industry
- paymentSegments: Customer segments based on payment behavior
- topCustomers: List of top customers by spending
- invoices: Raw invoice data (sample)

## How to Use

- Click on the different segment buttons to switch between views
- Click on a segment in the list to view customers in that segment
- Hover over chart elements to see tooltips with more information
