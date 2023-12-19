import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { Container, Box, Typography, Button } from "@mui/material";

export default function Page404() {
    const navigate = useNavigate();

    const fetchCompanies = async () => {
        try {
            const response = await axiosInstance.get("/Company/423055995");
            console.log(response.data);
        } catch (error : any) {
            console.error("Error fetching companies", error);
            if (error.response && error.response.status === 401) {
                navigate("/login");
            }
        }
    }

    return (
        <Container component="main" maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h2">
                    404
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Oups! La page que vous cherchez n'existe pas.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={(() => {
                        navigate("/dashboard");
                    })}
                >
                    Retour à l'accueil
                </Button>
            </Box>
        </Container>
    );
}