const Layout = require("../models/Layout");

// Get layout
const getLayout = async (req, res) => {
    try {
        const layout = await Layout.findOne();
        if (!layout) return res.json({ layouts: { lg: [], sm: [] } });
        res.json(layout);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Save layout
const saveLayout = async (req, res) => {
    try {
        const { layouts } = req.body;
        let layout = await Layout.findOne();
        if (layout) {
            layout.layouts = layouts;
        } else {
            layout = new Layout({ layouts });
        }
        await layout.save();
        res.json(layout);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getLayout, saveLayout };
