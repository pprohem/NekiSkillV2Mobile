import { api } from "../api";

const getAll = () => {
    return api.get("skills");
};

const get = (id) => {
    return api.get(`skills/${id}`);
};

const create = (data) => {
    return api.post("skills", data);
};

const update = (id, data) => {
    return api.put(`skills/${id}`, data);
};

const remove = (id) => {
    return api.delete(`skills/${id}`);
};
const skillsService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default skillsService;

