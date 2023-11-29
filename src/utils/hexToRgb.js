export const hexToRgb = (hex) => {
    // Remove the hash if it exists
    hex = hex.replace(/^#/, '');

    // Parse the hex values
    const bigint = parseInt(hex, 16);

    // Extract RGB values
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
};