import {
  getRawPaintListByRange,
  getRawTechniques,
  fetchAllPaints,
  fetchPaintById,
  fetchAllTechniques,
  fetchTechniqueById,
} from '../src/index';

describe('getRawPaintListByRange', () => {
  it('will return an empty array if invalid paint range provided', () => {
    expect(getRawPaintListByRange('fake')).toEqual([]);
  });

  it('will return a paint range', () => {
    expect(getRawPaintListByRange('citadel').length).toBe(205);
  });
});

describe('getRawTechniques', () => {
  it('will return a list of techniques', () => {
    const techniques = getRawTechniques();

    expect(techniques.find((item) => item.name === 'Stipple'));
    expect(techniques.length).toBe(12);
  });
});

describe('fetchAllPaints', () => {
  it('will return a list of all paints', () => {
    expect(fetchAllPaints().length).toBe(205);
  });
});

describe('fetchPaintById', () => {
  it('will return null if not paint is found', () => {
    expect(fetchPaintById('1')).toBe(null);
  });

  it('will return a paint object if paint is found', () => {
    const paint = fetchPaintById('056ae058-1bcc-45ee-bca7-0a53a242680e');
    expect(paint.name).toBe('Liberator Gold');
  });
});

describe('fetchAllTechniques', () => {
  it('will return a list of techniques', () => {
    const techniques = fetchAllTechniques();

    expect(techniques.find((item) => item.name === 'Stipple'));
    expect(techniques.length).toBe(12);
  });
});

describe('fetchTechniqueById', () => {
  it('will return a specific technique', () => {
    const technique = fetchTechniqueById('4d2f4902-6f7e-47be-9a94-11d655b31d0f');

    expect(technique.name).toBe('Dry Brush');
  });
});
