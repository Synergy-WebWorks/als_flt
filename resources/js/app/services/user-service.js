import axios from "axios";


export async function approved_account_service(data) {
    try {
        const res = await axios.post('/api/approved_account', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function create_account_service(data) {
    try {
        const res = await axios.post('/register', data);
        return res;
    } catch (error) {
        return error;
    }
}


export async function search_students_service(data) {
    try {
        const res = await axios.post('/api/search_students', data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function get_user_login_service() {
    try {
        const res = await axios.get("/api/user");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function get_user_service() {
    try {
        const res = await axios.get("/api/account");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function get_user_by_id_service(id) {
    try {
        const res = await axios.get(`/api/account/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function store_user_service(data) {
    try {
        const res = await axios.post('/api/account', data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function update_user_service(data) {
    try {
        const res = await axios.put(`/api/account/${data.id}`, data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function delete_user_service(id) {
    try {
        const res = await axios.delete(`/api/account/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}