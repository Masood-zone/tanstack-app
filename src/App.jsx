import TableComponent from "./components/table";
import AgGridTable from "./components/table/agGrid";

function App() {
  return (
    <>
      {/* React Tanstack Table */}
      <TableComponent />
      {/* Ag Grid Table Component */}
      <AgGridTable />
    </>
  );
}

export default App;
