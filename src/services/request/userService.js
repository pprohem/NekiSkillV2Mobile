import { api } from "../api";

const getAll = () => {
    return api.get("users");
};

const get = (id) => {
    return api.get(`users/${id}`);
};

const create = (data) => {
    return api.post("users", data);
};

const update = (id, data) => {
    return api.put(`users/${id}`, data);
};

const remove = (id) => {
    return api.delete(`users/${id}`);
};
const userService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default userService;

