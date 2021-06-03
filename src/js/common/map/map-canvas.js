import React, { useEffect } from 'react';

function MapCanvas(props) {
    function drawHex(canvasID, center) {
        for (let i=0; i<=5; i++) {
            let a = getHexCorner(center, 10, i);
            let b = getHexCorner(center, 10, i+1);
            drawLine(canvasID, a, b);
        }
    }

    function drawLine(canvasID, start, end) {
        const context = canvasID.getContext("2d");
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();
        context.closePath();
    }

    function getHexCorner(center, size, i) { 
        let angle_deg = 60 * i - 30;
        let angle_rad = Math.PI / 180 * angle_deg;
        let neoX = center.x + (size * Math.cos(angle_rad));
        let neoY = center.y + (size * Math.sin(angle_rad));
        return (
            point(neoX, neoY)
        )
    }

    function point(x, y) {
        return ({x: x, y: y});
    }

    useEffect(() => {
        let core = point(150, 70);
        let canvasHex = document.querySelector("#RMmap");
        drawHex(canvasHex, core);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <canvas id="RMmap" class="rm-map" >
            This is the map
        </canvas>
    )
}

export {
    MapCanvas
}