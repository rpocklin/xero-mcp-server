import React, { useState } from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import customerData from "./customerData";

const CustomerSegmentation = () => {
  // State for view mode
  const [viewMode, setViewMode] = useState('spending');
  const [selectedSegment, setSelectedSegment] = useState(null);
  
  // Select which segments to display based on view mode
  const getSegmentData = () => {
    const data = (() => {
      switch(viewMode) {
        case 'spending':
          return customerData.spendingSegments;
        case 'frequency':
          return customerData.frequencySegments;
        case 'industry':
          return customerData.industrySegments;
        case 'payment':
          return customerData.paymentSegments;
        default:
          return customerData.spendingSegments;
      }
    })();
    console.log('Segment Data:', data);
    return data;
  };

  // Render customer list for the selected segment
  const renderCustomerList = (segment) => {
    return (
      <div className="mt-2 p-4 bg-gray-50 rounded-md max-h-60 overflow-y-auto">
        <Typography variant="h6" gutterBottom>Customers in this segment:</Typography>
        <List>
          {segment.customers.map((customer, index) => (
            <ListItem key={index}>
              <ListItemText primary={customer} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <Typography variant="h3" align="center" gutterBottom>Customer Segmentation Dashboard</Typography>
      
      <div className="flex justify-center space-x-4">
        {['spending', 'frequency', 'industry', 'payment'].map((mode) => (
          <Button
            key={mode}
            onClick={() => setViewMode(mode)}
            variant={viewMode === mode ? "contained" : "outlined"}
            color="primary"
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </Button>
        ))}
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Typography variant="h5" align="center" gutterBottom>
            {viewMode.charAt(0).toUpperCase() + viewMode.slice(1)} Segments
          </Typography>
          <div className="h-80" style={{ minHeight: '320px' }}>
            <div style={{ width: '600px', height: '600px', margin: '0 auto' }}>
              <PieChart width={600} height={600}>
                <Pie
                  data={getSegmentData()}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  onClick={(data) => setSelectedSegment(data.name)}
                >
                  {getSegmentData().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} customers`, 'Count']} />
              </PieChart>
            </div>
          </div>
        </div>
    
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Typography variant="h5" align="center" gutterBottom>Segment Details</Typography>
          {getSegmentData().map((segment, index) => (
            <div
              key={index}
              className="mb-4 p-4 border-l-4 rounded-lg cursor-pointer hover:bg-gray-50"
              style={{ borderLeftColor: segment.color }}
              onClick={() => setSelectedSegment(selectedSegment === segment.name ? null : segment.name)}
            >
              <div className="flex justify-between items-center">
                <Typography variant="h6">{segment.name}</Typography>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {segment.value} customers
                </span>
              </div>
              {(selectedSegment === segment.name) && renderCustomerList(segment)}
            </div>
          ))}
        </div>
      </div>
    
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Typography variant="h5" align="center" gutterBottom>Top Customers by Spending</Typography>
        <div className="h-80" style={{ minHeight: '320px' }}>
          <div style={{ width: '800px', height: '800px', margin: '0 auto' }}>
            <BarChart
              width={800}
              height={800}
              data={(console.log('Top Customers Data:', customerData.topCustomers), customerData.topCustomers)}
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis
                label={{ value: 'Amount (AUD)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, 'Amount']} />
              <Bar dataKey="amount" fill="#3b82f6" />
            </BarChart>
          </div>
        </div>
      </div>
    
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Typography variant="h5" align="center" gutterBottom>Key Insights</Typography>
        <List>
          <ListItem><ListItemText primary="Enterprise Clients: High revenue, low volume. Focus on personalized service." /></ListItem>
          <ListItem><ListItemText primary="Regular Clients: Stable revenue base. Retain with consistent quality." /></ListItem>
          <ListItem><ListItemText primary="Government/Education: High-value contracts, longer cycles. Ensure compliance." /></ListItem>
          <ListItem><ListItemText primary="Payment Behavior: Improve collections for delayed payments." /></ListItem>
          <ListItem><ListItemText primary="Cross-Selling: Mid-market clients show potential for expanded services." /></ListItem>
        </List>
      </div>
    </div>
  );
};
export default CustomerSegmentation;
