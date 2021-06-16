import React, { useEffect } from 'react';

function MapCanvas(props) {
    let hexsize = 8;
    function drawHex(canvasID, center) {
        for (let i=0; i<=5; i++) {
            let a = getHexCorner(center, hexsize, i);
            let b = getHexCorner(center, hexsize, i+1);
            drawLine(canvasID, a, b);
        }
    }

    function drawHexLine(canvasID, center, length = 3) {
        for (let i = 0; i < length; i++) {
            drawHex(canvasID, center);
            let neoX = center.x + (2*hexsize-2);
            center = {...center, x: neoX};

        }
    }

    function drawHexMap(canvasID, center, radius = 3) {
        let neoX = center.x - (radius*2*hexsize-2);
        center = {...center, x: neoX};
        let reps = 2* radius + 1;
        drawHexLine(canvasID, center, reps);
        let neoCenter = {x: center.x, y: center.y};
        let neoReps = reps;
        for (let i = 0; i < radius; i++) {    
            let neoX = neoCenter.x + hexsize;
            let neoY = neoCenter.y + (hexsize+4)*Math.sin(30);
            neoCenter = {x: neoX, y: neoY};
            neoReps--;
            drawHexLine(canvasID, neoCenter, neoReps);
        }
        neoCenter = center;
        neoReps = reps;
        for (let i = 0; i < radius; i++) {    
            let neoX = neoCenter.x + hexsize;
            let neoY = neoCenter.y - (hexsize+4)*Math.sin(30);
            neoCenter = {x: neoX, y: neoY};
            neoReps--;
            drawHexLine(canvasID, neoCenter, neoReps);
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
        drawHexMap(canvasHex, core);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <canvas id="RMmap" className="rm-map" >
            This is the map
        </canvas>
    )
}

export {
    MapCanvas
}