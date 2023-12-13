import path from "path";
import fs from 'fs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const jsonData = JSON.parse(
    fs.readFileSync(path.join(__dirname, './../files/query2_ref.txt'), 'utf-8')
);

export { jsonData };
