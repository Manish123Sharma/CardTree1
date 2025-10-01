import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import "../styles/styles.css";

const SyncedGrid = () => {
    const numItems = 5; // dynamically increase items
    const cols = 12; // number of columns
    const items = Array.from({ length: numItems }, (_, i) => i.toString());

    const [layouts, setLayouts] = useState({ lg: [], sm: [] });
    const [shuffleId, setShuffleId] = useState(0); // to force re-render

    // Helper: check if a new item overlaps existing items
    const hasOverlap = (newItem, positions) => {
        return positions.some(
            (item) =>
                item.x < newItem.x + newItem.w &&
                item.x + item.w > newItem.x &&
                item.y < newItem.y + newItem.h &&
                item.y + item.h > newItem.y
        );
    };

    // Generate non-overlapping mosaic layout
    const generateMosaicLayout = () => {
        const positions = [];

        items.forEach((i) => {
            let w = Math.floor(Math.random() * 10) + 1; // 1–3 width
            let h = Math.floor(Math.random() * 15) + 1; // 1–3 height
            let x, y, attempts = 0;

            do {
                x = Math.floor(Math.random() * (cols - w + 1));
                y = Math.floor(Math.random() * (positions.length + 5)); // dynamic row space
                attempts++;
                if (attempts > 100) break; // safety fallback
            } while (hasOverlap({ x, y, w, h }, positions));

            positions.push({ i, x, y, w, h });
        });

        // Print positions
        console.log("=== Grid Positions ===");
        positions.forEach((pos) =>
            console.log(`Grid ${pos.i}: x=${pos.x}, y=${pos.y}, w=${pos.w}, h=${pos.h}`)
        );

        return positions;
    };

    const initializeLayouts = () => {
        const lgLayout = generateMosaicLayout();
        const smLayout = lgLayout.map((item, index) => ({
            ...item,
            x: 30,
            y: index,
            w: 50,
            h: 10,
        }));

        setLayouts({ lg: lgLayout, sm: smLayout });
        setShuffleId((id) => id + 1);
    };

    useEffect(() => {
        initializeLayouts();
        // eslint-disable-next-line
    }, []);

    const handleLayoutChange = (layout, allLayouts) => {
        setLayouts({ ...allLayouts });
    };

    return (
        <div style={{ textAlign: "center" }}>
            <button
                onClick={initializeLayouts}
                style={{ marginBottom: "20px", padding: "10px 20px", cursor: "pointer" }}
            >
                Shuffle Pattern
            </button>

            <GridLayout
                key={shuffleId}
                className="layout"
                layouts={layouts}
                cols={{ lg: cols, sm: 1 }}
                rowHeight={100}
                width={1200}
                onLayoutChange={handleLayoutChange}
                isResizable={true}
                isDraggable={true}
                compactType={null} // prevent auto compaction
            >
                {items.map((i) => (
                    <div key={i} className="grid-item">
                        <span>Item {i}</span>
                    </div>
                ))}
            </GridLayout>
        </div>
    );
};

export default SyncedGrid;
