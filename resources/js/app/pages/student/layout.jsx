import React, { useEffect } from "react";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { router as route } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { setPathname } from "@/app/redux/app-slice";
import {
    AccountCircle,
    AssignmentInd,
    Diversity1,
    Diversity3,
    Engineering,
    FolderShared,
    Groups,
    Groups2,
    HistoryEdu,
    PowerSettingsNew,
    School,
    SupervisedUserCircle,
} from "@mui/icons-material";
import LogoutSection from "../_sections/logout-section";
import store from "../store/store";
import { get_user_login_thunk } from "@/app/redux/app-thunk";
import TimerSection from "./examination/id/sections/timer-section";

const NAVIGATION = [
    {
        kind: "header",
        title: "Main items",
    },
    {
        segment: "dashboard",
        title: "Dashboard",
        icon: <DashboardIcon />,
    },

    {
        segment: "examination",
        title: "Examinations",
        icon: <HistoryEdu />,
    },
    {
        segment: "profile",
        title: "Profile",
        icon: <AccountCircle />,
    },
    // {
    //     segment: "subjects",
    //     title: "Subjects",
    //     icon: <HistoryEdu />,
    // },
    {
        kind: "divider",
    },
    {
        kind: "header",
        title: "Sub Navigation",
    },
    // {
    //     segment: "settings",
    //     title: "Settings",
    //     icon: <Engineering />,
    // },
    {
        segment: "logout",
        title: "Logout",
        icon: <PowerSettingsNew />,
    },
];

const demoTheme = createTheme({
    // cssVariables: {
    //     colorSchemeSelector: "data-toolpad-color-scheme",
    // },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});
function StudentLayout({ children }, props) {
    const { pathname, timeLeft, timerActive } = useSelector(
        (state) => state.app,
    );
    const { window: windows } = props;
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        store.dispatch(get_user_login_thunk());
    }, []);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => {
                if (path == "/logout") {
                    setOpen(true);
                } else {
                    if (
                        path == "/student" ||
                        path == "/students/registered" ||
                        path == "/students/enrollment"
                    ) {
                        route.visit(String("/student" + path + "?page=1"));
                    } else {
                        route.visit(String("/student" + path));
                    }
                    dispatch(setPathname(path));
                }
            },
        };
    }, [pathname]);
    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    // Remove this const when copying and pasting into your project.
    const demoWindow = windows !== undefined ? window() : undefined;
    // localStorage.clear()
    return (
        // preview-start
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
            branding={{
                logo: <img src="/images/logo.png" />,
                title: (
                    <div className="flex w-full items-center justify-between">
                        {timerActive && timeLeft ? (
                            <>Examination Timer: {formatTime(timeLeft)}</>
                        ) : (
                            <div>Alternative Learning System</div>
                        )}
                    </div>
                ),
            }}
        >
            <DashboardLayout>
              <TimerSection />
                <LogoutSection open={open} setOpen={setOpen} />
                <div className="p-4">{children}</div>
            </DashboardLayout>
        </AppProvider>
        // preview-end
    );
}

StudentLayout.propTypes = {
    window: PropTypes.func,
};

export default StudentLayout;
