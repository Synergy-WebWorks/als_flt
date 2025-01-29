import React from "react";
import AdminLayout from "../layout";
import { useEffect } from "react";
import store from "../../store/store";
import { get_district_thunk } from "./redux/district-thunk";
import DisctrictTableSection from "./sections/district-table-section";
import CreateDistrictSection from "./sections/create-district-section";

export default function DistrictPage() {
    
    return (
        <AdminLayout>
            <div className="py-3">
                <CreateDistrictSection />
            </div>
            <DisctrictTableSection />
        </AdminLayout>
    );
}
