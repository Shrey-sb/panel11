export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.username}</div>;
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Aman",
    email: "example1@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "rohan",
    email: "example2@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "akash",
    email: "example3@gmail.com",
    age: 45,
  },
  {
    id: 4,
    username: "Samarth",
    email: "example4@gmail.com",
    age: 16,
  },
  {
    id: 5,
    username: "sandeep",
    email: "example5@gmail.com",
    age: 22,
  },
  {
    id: 6,
    username: "manisha",
    email: "example6@gmail.com",
    age: 15,
  },
  {
    id: 7,
    username: "hunny",
    email: "example7@gmail.com",
    age: 44,
  },
  {
    id: 8,
    username: "raman",
    email: "example8@gmail.com",
    age: 36,
  },
  {
    id: 9,
    username: "ishan",
    email: "example9@gmail.com",
    age: 65,
  },
  {
    id: 10,
    username: "manav",
    email: "example10@gmail.com",
    age: 65,
  },
];
