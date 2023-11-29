import {hexToRgb} from "./hexToRgb";

const calculateGradientColor = (index, totalCards, startColor, endColor) => {
    const startRgb = Array.isArray(startColor) ? startColor : hexToRgb(startColor);
    const endRgb = Array.isArray(endColor) ? endColor : hexToRgb(endColor);

    const color = startRgb.map((start, i) => {
        const end = endRgb[i];
        return Math.floor(start + (end - start) * (index / (totalCards - 1)));
    });

    return `rgb(${color.join(',')})`;
};

export default calculateGradientColor;