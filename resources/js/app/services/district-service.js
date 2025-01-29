import axios from "axios";

export async function get_district_service() {
    try {
        const res = await axios.get("/api/district");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_district_by_id_service(id) {
    try {
        const res = await axios.get(`/api/district/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_district_service(data) {
    try {
        const res = await axios.post('/api/district', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_district_service(data) {
    try {
        const res = await axios.put(`/api/district/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_district_service(id) {
    try {
        const res = await axios.delete(`/api/district/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}