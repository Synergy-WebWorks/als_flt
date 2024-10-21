import axios from "axios";

export async function get_student_service(user_type) {
    try {
        const res = await axios.get(`/api/account?${window.location.search.substring(1)}&user_type=${user_type}`);
        return res;
    } catch (error) {
        return error;
    }
}



export async function get_student_by_id_service(id) {
    try {
        const res = await axios.get(`/api/account/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_student_service(data) {
    try {
        const res = await axios.post('/api/account', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_student_service(data) {
    try {
        const res = await axios.put(`/api/account/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_student_service(id) {
    try {
        const res = await axios.delete(`/api/account/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}