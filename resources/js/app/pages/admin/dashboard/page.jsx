import React from "react";
import AdminLayout from "../layout";
import DasboardCardSection from "./sections/dashboard-card-section";
import { useEffect } from "react";
import store from "../../store/store";
import { get_administrator_dashboard_thunk } from "./redux/dashboard-thunk";

export default function AdminDashboardPage() {
    useEffect(() => {
        store.dispatch(get_administrator_dashboard_thunk());
    }, []);
    return (
        <AdminLayout>
            <DasboardCardSection />

            <div className="relative flex-col w-full h-full flex items-center justify-center">
                <div className="w-2/3 -mt-36">
                    <lottie-player
                        src="/images/admin.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoPlay
                    ></lottie-player>
                </div>
                <div className="w-full flex gap-5">
                    <div className="flex-1">
                        <img
                            alt="Animated loading icon"
                            src="/images/mission.jpg"
                            className="w-full h-96 max-w-full max-h-full"
                        />
                    </div>
                    <div className="flex-1">
                        <img
                            alt="Animated loading icon"
                            src="/images/vision.jpg"
                            className="w-full h-96 max-w-full max-h-full"
                        />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
