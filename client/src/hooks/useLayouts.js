import { useState, useEffect } from "react";
import { getLayouts, saveLayouts } from "../api/api";

export const useLayouts = () => {
    const [layouts, setLayouts] = useState({ lg: [], sm: [] });

    useEffect(() => {
        getLayouts().then((res) => {
            if (res.layouts) setLayouts(res.layouts);
        });
    }, []);

    const updateLayouts = (newLayouts) => {
        setLayouts(newLayouts);
        saveLayouts(newLayouts);
    };

    return [layouts, updateLayouts];
};
