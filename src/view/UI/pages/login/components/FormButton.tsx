import { Button } from "@mui/material";
import { IFormButton } from "../types";

function FormButton({ loading }: IFormButton) {
  return (
    <Button
      type="submit"
      size="large"
      disabled={loading}
      fullWidth
      variant="outlined"
      aria-label="login"
    >
      {loading ? "СЕКУНДОЧКУ" : "ВОЙТИ"}
    </Button>
  );
}

export default FormButton;
