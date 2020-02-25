import React from "react";
import MaterialTable from "material-table";
import "./style.css";

export default function Table() {
  const [state, setState] = React.useState({
    columns: [
      {
        field: "first",
        title: "First Name"
      },
      {
        field: "last",
        title: "Last Name"
      },
      {
        field: "department",
        title: "Department",
        lookup: {
          1: "Administration",
          2: "Research & Development",
          3: "Contractors"
        }
      },
      {
        field: "role",
        title: "Role",
        lookup: {
          1: "O.G.",
          2: "Scientist",
          3: "Engineer",
          4: "Soldier"
        }
      },
      {
        field: "salary",
        title: "Salary",
        type: "numeric"
      }
    ],

    data: [
      {
        first: "Nick",
        last: "Fury",
        department: 1,
        role: 1,
        salary: 750000
      },
      {
        first: "Tony",
        last: "Stark",
        department: 2,
        role: 3,
        salary: 1000000
      },
      {
        first: "Bruce",
        last: "Banner",
        department: 2,
        role: 2,
        salary: 500000
      },
      {
        first: "Thor",
        last: "Son of Odin",
        department: 3,
        role: 4,
        salary: 50000
      },
      {
        first: "Captain",
        last: "America",
        department: 3,
        role: 4,
        salary: 50000
      },
      {
        first: "Natasha",
        last: "Romanoff",
        department: 3,
        role: 4,
        salary: 50000
      },
      {
        first: "Peter",
        last: "Quill",
        department: 3,
        role: 4,
        salary: 50000
      }
    ]
  });

  return (
    <MaterialTable
      title="Employee Directory"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
