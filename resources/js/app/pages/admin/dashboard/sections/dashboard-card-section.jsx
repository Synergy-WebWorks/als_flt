import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Link } from "@inertiajs/react";

export default function DasboardCardSection() {
    const { dashboard } = useSelector((store) => store.dashboard);
    console.log("dashboard", dashboard);
    return (
        <Box className="flex w-full gap-3" sx={{ minWidth: 275 }}>
            <Card className="w-full" variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        TOTAL NUMBER OF STUDENT
                    </Typography>
                    <div className="text-xl">
                        COUNT: {dashboard?.student_count ?? 0}
                    </div>
                </CardContent>
                <CardActions>
                    <Link href="/administrator/students">
                        <Button size="small">Show More</Button>
                    </Link>
                </CardActions>
            </Card>
            <Card className="w-full" variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        TOTAL NUMBER OF TEACHER
                    </Typography>
                    <div className="text-xl">
                        COUNT: {dashboard?.teacher_count ?? 0}
                    </div>
                </CardContent>
                <CardActions>
                    <Link href="/administrator/teachers">
                        <Button size="small">Show More</Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    );
}
