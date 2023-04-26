import { Button } from "@mui/material"
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const ButtonDelete = ({handleDelete, item}) => {
  return (
    <>
      <Button onClick={() => handleDelete(item)} color="error">
              {" "}
            <HighlightOffIcon />{" "}
      </Button>
    </>
  )
}
