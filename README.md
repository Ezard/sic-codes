# SIC Codes

## Installation

`npm i sic-codes -S`

### Usage

To get the description of a SIC code, use the `getCode` function:

```typescript
import { getCode } from 'sic-codes';

const description = getCode('62020'); // 'Information technology consultancy activities'
```

To get the SIC code of a description, use the `getDescription` function:

```typescript
import { getDescription } from 'sic-codes';

const description = getDescription('Information technology consultancy activities'); // '62020'
```

To get a list of all SIC code data, use the `getData` function:

```typescript
import { getData } from 'sic-codes';

const data = getData();
/** data is in the format [code: string, description: string][], e.g.
 * [
 *   ['01110', 'Growing of cereals (except rice), leguminous crops and oil seeds'],
 *   ['01120', 'Growing of rice'],
 *   ...etc
 * ]
 */
```

### Notes

The SIC code data is only loaded when it requested for the first time, and is cached in-memory for all future function calls
