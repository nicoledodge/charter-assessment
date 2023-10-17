const fetchCustomers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { customerId: 1, month: 1, amount: 120 },
          { customerId: 2, month: 1, amount: 70 },
          { customerId: 3, month: 1, amount: 130 },
          { customerId: 4, month: 1, amount: 70 },
          { customerId: 5, month: 1, amount: 80 },
          { customerId: 6, month: 1, amount: 90 },
        ]);
      }, 1000); 
    });
  };
  
  export default fetchCustomers;