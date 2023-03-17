import { api } from "../api";

const getAll = () => {
    return api.get("userSkills");
};

const get = (id) => {
    return api.get(`userSkills/${id}`);
};

const create = (data) => {
    return api.post("userSkills", data);
};

const update = (id, data) => {
    return api.put(`userSkills/${id}`, data);
};

const remove = (id) => {
    return api.delete(`userSkills/${id}`);
};
const userSkillsService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default userSkillsService;

