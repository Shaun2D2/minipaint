import citadel from './data/paints/citadel';
import techniques from './data/techniques';

const PAINT_RANGES = {
    citadel,
}

// get a list of paints by range
export const getRawPaintListByRange = (range) => {
    const paints = PAINT_RANGES[range];

    if (!paints) return [];

    return paints;
}

// get raw paint techniques
export const getRawTechniques = () => techniques;

// fetch all paints across all the pain ranges
export const fetchAllPaints = () => Object.entries(PAINT_RANGES).reduce((acc, [key, val]) => [...acc, ...val], []);

export const fetchAllTechniques = () => getRawTechniques();

// fetch an item in an array by the id prop
export const fetchItemById = (id, arry) => {
    const item = arry.find(paint => paint.id === id);

    return item ?? null;
}

// fetch a paint by ID
export const fetchPaintById = (id) => fetchItemById(id, fetchAllPaints());

// fetch a technique by ID
export const fetchTechniqueById = (id) => fetchItemById(id, fetchAllTechniques());