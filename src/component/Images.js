import { Paper } from "@mui/material";
function Images({ item }) {
  return (
    <Paper>
      <img
        src={item.image}
        alt="..."
        style={{ width: "100%", height: "50vh" }}
      />
    
    </Paper>
  );
}
export default Images;