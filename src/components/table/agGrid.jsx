// Install the Package - npm install ag-grid-react ag-grid-community
// Import the AgGridReact Component
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";
import Users from "../../data/db.json";

function AgGridTable() {
  const [data, setData] = useState(() => {
    return Users;
  });
  // Define AgGrid Column Definitions
  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "First Name", field: "first_name" },
    { headerName: "Last Name", field: "last_name" },
    { headerName: "Email", field: "email" },
    { headerName: "Gender", field: "gender" },
  ];
  return (
    <section>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          margin: "1rem 0",
          color: "#333",
        }}
      >
        Users in Database - Using Ag Grid
      </h1>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact rowData={data} columnDefs={columnDefs} />
      </div>
    </section>
  );
}

export default AgGridTable;
