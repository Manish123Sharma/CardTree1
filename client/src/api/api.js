import axios from "axios";

const API_URL = "https://cardtree1-2.onrender.com/layouts";

export const getLayouts = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

export const saveLayouts = async (layouts) => {
    await axios.post(API_URL, { layouts });
};
