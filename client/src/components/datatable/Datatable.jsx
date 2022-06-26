import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat()}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        // components={{ Toolbar: CustomToolbar }}
      />
    </div>
  );
};

export default Datatable;
