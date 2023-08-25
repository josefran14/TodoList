import { Button } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";

export const ButtonDelete = ({handleDelete, item}) => {

  return (
    <>
      <Button onClick={() => handleDelete(item)} color="error" sx={{marginTop: "8px"}}>
            <DeleteIcon />
      </Button>
    </>
  )
}
