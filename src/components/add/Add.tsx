import { Close } from "@mui/icons-material";
import "./add.scss";
import { GridColDef } from "@mui/x-data-grid";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //add new item
  }

  return (
    <div className='add'>
      <div className='modal'>
        <Close onClick={() => props.setOpen(false)} className='close' />
        <h2>Add new {props.slug}</h2>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter(col => col.field !== "image" && col.field !== "id")
            .map(column => (
              <div className='item' key={column.field}>
                <label htmlFor={column.field}>{column.headerName}</label>
                <input
                  type={column.type}
                  name={column.field}
                  id={column.field}
                  placeholder={column.field}
                />
              </div>
            ))}
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
