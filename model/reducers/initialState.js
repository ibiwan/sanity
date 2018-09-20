export default {
  entries: [
    {
      id: 51,
      description: "blah",
      amount: 27,
      highlightColor: "#FFF",
      resetBalance: false,
      completed: false,
      canceled: false,
      seriesId: 51
    },
    {
      id: 52,
      description: "blah",
      amount: 27,
      highlightColor: "#FFF",
      resetBalance: false,
      completed: false,
      canceled: false,
      seriesId: 51
    },
    {
      id: 53,
      description: "blah",
      amount: 27,
      highlightColor: "#FFF",
      resetBalance: false,
      completed: false,
      canceled: false,
      seriesId: 51
    }
  ],
  accounts: [
    { name: "Cash", primary: false },
    { name: "Paycheck", primary: false },
    { name: "Vendor", primary: false },
    { name: "Checking", primary: true },
    { name: "Savings", primary: false }
  ],
  templates: [
    {
      name: "blank",
      isDefaultIncome: false,
      isDefaultExpense: false
    },
    {
      name: "credit",
      from: "Paycheck",
      to: "Checking",
      isDefaultIncome: true,
      isDefaultExpense: false
    },
    {
      name: "debit",
      from: "Checking",
      to: "Vendor",
      isDefaultIncome: false,
      isDefaultExpense: true
    }
  ],
  user: {
    logged_in: false,
    username: null,
    passhash: null
  },
  current_date: null, // now
  series_list: {
    sort_order: [
      { field: "date", dir: "asc" },
      { field: "description", dir: "asc" },
      { field: "amount", dir: "desc" }
    ],
    filters: []
  },
  ledger: {
    view_date: null, // current_date
    sort_order: [
      { field: "date", dir: "asc" },
      { field: "amount", dir: "desc" }
    ]
  }
};
