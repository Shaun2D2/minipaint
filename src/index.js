import citadel from './data/paints/citadel';
import techniques from './data/techniques';

const PAINT_RANGES = {
  citadel,
};

export const getRawPaintListByRange = (range) => {
  const paints = PAINT_RANGES[range];

  if (!paints) return [];

  return paints;
};

export const getRawTechniques = () => techniques;

// eslint-disable-next-line max-len
export const fetchAllPaints = () => Object.entries(PAINT_RANGES).reduce((acc, { 1: val }) => [...acc, ...val], []);

export const fetchAllTechniques = () => getRawTechniques();

export const fetchItemById = (id, arry) => {
  const item = arry.find((paint) => paint.id === id);

  return item ?? null;
};

export const fetchPaintById = (id) => fetchItemById(id, fetchAllPaints());

export const fetchTechniqueById = (id) => fetchItemById(id, fetchAllTechniques());
