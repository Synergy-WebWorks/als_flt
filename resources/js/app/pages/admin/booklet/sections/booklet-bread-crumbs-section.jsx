import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "@inertiajs/react";
import { Book } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import { get_booklet_by_id_thunk } from "../redux/booklet-thunk";

function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
}

export default function BookletBreadCrumbsSection() {
    const { booklet } = useSelector((store) => store.booklets);
    const questionnaire_id = window.location.pathname.split("/")[4];
    const booklet_id = window.location.pathname.split("/")[3];
    console.log("booklet", booklet?.title);

    useEffect(()=>{
        if (questionnaire_id) {
            store.dispatch(get_booklet_by_id_thunk(booklet_id))
        }
    },[])
    return (
        <div className="py-5" role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                    color="inherit"
                    href="/administrator/booklet"
                >
                    <Book sx={{ mr: 0.5 }} fontSize="inherit" />
                    Booklet
                </Link>
                {booklet_id && (
                    <Link
                        className="flex"
                        underline="hover"
                        sx={{ display: "flex", alignItems: "center" }}
                        color="inherit"
                        href={`/administrator/booklet/${booklet.id}`}
                    >
                        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        <div className="capitalize">{booklet?.title}</div>
                    </Link>
                )}

                {questionnaire_id && (
                    <Typography
                        sx={{
                            color: "text.primary",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Questionnaire
                    </Typography>
                )}
            </Breadcrumbs>
        </div>
    );
}
