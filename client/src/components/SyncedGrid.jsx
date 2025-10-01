import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "../styles/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const SyncedGrid = () => {
    const numItems = 5;
    const cols = 12;
    const items = Array.from({ length: numItems }, (_, i) => i.toString());

    const [layouts, setLayouts] = useState({ lg: [], sm: [] });
    const [shuffleId, setShuffleId] = useState(0);

    // Helper: check overlap
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
            let w, h, x, y, attempts = 0;
            do {
                w = Math.floor(Math.random() * 2) + 1; // width 1-2
                h = Math.floor(Math.random() * 2) + 1; // height 1-2
                x = Math.floor(Math.random() * (cols - w));
                y = Math.floor(Math.random() * (positions.length + 5));
                attempts++;
                if (attempts > 100) break;
            } while (hasOverlap({ x, y, w, h }, positions));

            positions.push({ i, x, y, w, h });
        });

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
            x: 0,
            y: index,
            w: 1,
            h: 1,
        }));

        setLayouts({ lg: lgLayout, sm: smLayout });
        setShuffleId((id) => id + 1);
    };

    useEffect(() => {
        initializeLayouts();
    }, []);

    const handleLayoutChange = (_, allLayouts) => {
        setLayouts(allLayouts);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <button
                onClick={initializeLayouts}
                style={{ marginBottom: "20px", padding: "10px 20px", cursor: "pointer" }}
            >
                Shuffle Pattern
            </button>

            <ResponsiveGridLayout
                key={shuffleId}
                className="layout"
                layouts={layouts}
                cols={{ lg: cols, sm: 1 }}
                rowHeight={100}
                width={1200}
                onLayoutChange={handleLayoutChange}
                isResizable={true}
                isDraggable={true}
                compactType={null}
            >
                {items.map((i) => (
                    <div key={i} className="grid-item">
                        <span>Item {i}</span>
                    </div>
                ))}
            </ResponsiveGridLayout>
        </div>
    );
};

export default SyncedGrid;
