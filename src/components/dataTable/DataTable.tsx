import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import type {} from "@mui/x-data-grid/themeAugmentation";
// import { DeleteOutline, EditNoteOutlined } from "@mui/icons-material";

type Props = {
  columns: GridColDef[];
  rows: object[];
  route: string;
};

const DataTable = (props: Props) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            backgroundColor: "#2a3447",
          },
          columnHeader: {
            backgroundColor: "#2a3447",
          },
        },
      },
    },
  });

  function handleDelete(id: string) {
    //delete the item
    console.log(id + "has been deleted");
  }

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: params => {
      return (
        <div className='actions'>
          <Link to={`/${props.route}/${params.row.id}`}>
            <img src='view.svg' alt='' />
            {/* <EditNoteOutlined /> */}
          </Link>
          <div className='delete' onClick={() => handleDelete(params.row.id)}>
            <img src='delete.svg' alt='' />
            {/* <DeleteOutline /> */}
          </div>
        </div>
      );
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          "& .MuiDataGrid-filler": {
            backgroundColor: "#2a3447",
          },
        }}
      >
        <DataGrid
          className='dataGrid'
          sx={{
            "& .MuiDataGrid-cell": {
              alignItems: "center", // Center-align content vertically if needed
            },
          }}
          rowHeight={80}
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          // disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
      </Box>
    </ThemeProvider>
  );
};

export default DataTable;
