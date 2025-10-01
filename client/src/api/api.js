import axios from "axios";

const API_URL = "http://localhost:3000/layouts";

export const getLayouts = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

export const saveLayouts = async (layouts) => {
    await axios.post(API_URL, { layouts });
};
