# Mini Paint
A fun package that keeps track of popular minature painting paint ranges as well as some useful painting techniques.

## Contribution
Contributions are welcome!  Please take a look at issues for ideas on how to contribute to the package.

## API
| Method   | Description   |  Returns |
|----------|:-------------:|------:|
| getRawPaintListByRange |  returns an array of specified paint range | Array |
| getRawTechniques |  returns an array of painting techniques | Array |
| fetchAllPaints |  returns an array of all paints | Array |
| fetchAllTechniques |  returns an array of all painting techniques | Array |
| fetchPaintById |  returns an object containing paint information | Object |
| fetchTechniqueById |  returns an object containing technique information | Object |

## Example

```javascript
import { fetchPaintById } from '@paintgist/minipaint';

const paint = fetchPaintById('7c235d3a-1fc5-4753-b81c-bf8c6aed021d');

console.log(paint.name);

// Troll Slayer Orange
```