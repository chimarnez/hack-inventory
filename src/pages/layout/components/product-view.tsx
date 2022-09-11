import {
  Button,
  Paper,
  Modal,
  Typography,
  Grid,
  TextField,
  Container,
  Box,
  Divider,
} from "@mui/material";

import addImage from "./image.png";

export const ProductView = (props: any) => {
  const { open, onClose } = props;
  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      open={open}
    >
      <Container maxWidth="xs">
        <Paper sx={{ padding: 2 }}>
          <Typography sx={{ mb: 2 }} variant="body1">
            Producto
          </Typography>
          <Divider />

          <Box sx={{ mt: 1 }}>
            <img
              style={{ display: "block" }}
              src={addImage}
              alt="add-product"
            />
            <Typography
              sx={{ mt: 1, color: (theme) => theme.palette.primary.dark }}
              variant="caption"
            >
              Seleccionar archivo
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                size="small"
                required
                id="description"
                name="description"
                label="Descripción"
                variant="filled"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="brand"
                name="brand"
                label="Marca"
                fullWidth
                variant="filled"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="category"
                name="category"
                label="Categoría"
                fullWidth
                variant="filled"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                id="code"
                name="code"
                label="Código"
                fullWidth
                variant="filled"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="price"
                name="price"
                label="Precio"
                fullWidth
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-evenly",
                }}
              >
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={onClose} variant="contained">
                  Agregar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Modal>
  );
};
