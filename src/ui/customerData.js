// data/customerData.js
const customerData = {
  // Customer spending segments based on total invoice amounts
  spendingSegments: [
    { name: 'Enterprise (>$5000)', value: 5, color: '#1e40af', customers: ['DIISR - Small Business Services', 'Ridgeway University', 'ABC Furniture', 'Maddox Publishing Group'] },
    { name: 'Mid-Market ($1000-$5000)', value: 4, color: '#3b82f6', customers: ['Bayside Club', 'Truxton Property Management', 'Boom FM', 'PC Complete'] },
    { name: 'Small Business ($500-$1000)', value: 7, color: '#93c5fd', customers: ['Basket Case', 'Central Copiers', 'City Limousines', 'Rex Media Group', 'Yarra Transport', 'Hamilton Smith Pty', 'Port Phillip Freight'] },
    { name: 'Occasional (<$500)', value: 6, color: '#dbeafe', customers: ['Noah Pocklington', 'Melrose Parking', 'Qantas', 'Gateway Motors', 'MCO Cleaning Services', 'Capital Cab Co', 'PowerDirect'] }
  ],

  // Customer frequency segments based on purchasing patterns
  frequencySegments: [
    { name: 'Regular (Monthly)', value: 6, color: '#15803d', customers: ['DIISR - Small Business Services', 'Hamilton Smith Pty', 'Yarra Transport', 'Port Phillip Freight', 'Rex Media Group', 'Truxton Property Management'] },
    { name: 'Periodic (Quarterly)', value: 4, color: '#22c55e', customers: ['Bayside Club', 'City Limousines', 'Ridgeway University', 'Boom FM'] },
    { name: 'Occasional', value: 8, color: '#86efac', customers: ['ABC Furniture', 'PC Complete', 'Maddox Publishing Group', 'Basket Case', 'MCO Cleaning Services', 'PowerDirect', 'Central Copiers', 'Gateway Motors'] },
    { name: 'One-time', value: 4, color: '#dcfce7', customers: ['Noah Pocklington', 'Melrose Parking', 'Qantas', 'Capital Cab Co'] }
  ],

  // Industries based on customer types
  industrySegments: [
    { name: 'Government/Education', value: 2, color: '#7e22ce', customers: ['DIISR - Small Business Services', 'Ridgeway University'] },
    { name: 'Professional Services', value: 5, color: '#a855f7', customers: ['Hamilton Smith Pty', 'Boom FM', 'Rex Media Group', 'Maddox Publishing Group', 'Truxton Property Management'] },
    { name: 'Transport/Logistics', value: 4, color: '#c084fc', customers: ['Yarra Transport', 'Port Phillip Freight', 'City Limousines', 'Gateway Motors'] },
    { name: 'Retail/Hospitality', value: 4, color: '#e9d5ff', customers: ['ABC Furniture', 'Basket Case', 'Bayside Club', 'Central Copiers'] },
    { name: 'Utilities/Facilities', value: 3, color: '#faf5ff', customers: ['MCO Cleaning Services', 'PowerDirect', 'PC Complete'] },
    { name: 'Other', value: 3, color: '#d1d5db', customers: ['Noah Pocklington', 'Melrose Parking', 'Qantas', 'Capital Cab Co'] }
  ],

  // Payment behavior segments
  paymentSegments: [
    { name: 'Early Payment', value: 5, color: '#b91c1c', customers: ['Qantas', 'Gateway Motors', 'Melrose Parking', 'ABC Furniture', 'Hamilton Smith Pty'] },
    { name: 'On-time Payment', value: 7, color: '#ef4444', customers: ['Port Phillip Freight', 'Rex Media Group', 'Yarra Transport', 'DIISR - Small Business Services (some invoices)', 'Truxton Property Management', 'Maddox Publishing Group'] },
    { name: 'Partial Payment', value: 3, color: '#fca5a5', customers: ['City Limousines', 'Central Copiers', 'DIISR - Small Business Services (some invoices)'] },
    { name: 'Delayed Payment', value: 6, color: '#fee2e2', customers: ['Bayside Club', 'Ridgeway University', 'PC Complete', 'Basket Case', 'MCO Cleaning Services', 'PowerDirect', 'Capital Cab Co'] }
  ],

  // Top customers based on spending
  topCustomers: [
    { name: 'DIISR - Small Business Services', amount: 18011.6 },
    { name: 'ABC Furniture', amount: 6930 },
    { name: 'Ridgeway University', amount: 6187.5 },
    { name: 'Maddox Publishing Group', amount: 4620 },
    { name: 'Bayside Club', amount: 3564 },
    { name: 'PC Complete', amount: 2166.99 },
    { name: 'Boom FM', amount: 1650 },
    { name: 'Truxton Property Management', amount: 1181.25 },
    { name: 'City Limousines', amount: 1760 },
    { name: 'Central Copiers', amount: 1063.56 }
  ],

  // Raw invoice data (sample format)
  invoices: [
    {
      id: 'ORC1041',
      contactId: '860b99a9-0958-4c8d-a98f-bb1f092b16bb',
      contactName: 'DIISR - Small Business Services',
      date: '2025-04-03',
      dueDate: '2025-04-27',
      amount: 4200,
      status: 'AUTHORISED'
    },
    {
      id: 'ORC1040',
      contactId: '3e776c4b-ea9e-4bb1-96be-6b0c7a71a37f',
      contactName: 'Bayside Club',
      date: '2025-04-01',
      dueDate: '2025-04-15',
      amount: 3200,
      status: 'AUTHORISED'
    },
    // Additional invoices would be included here
  ]
};

export default customerData;
