import { CircularProgress } from "@mui/material";
import "./style.scss";
export function Loader() {
  return (
    <div className="Loader">
      <CircularProgress />
    </div>
  );
}
