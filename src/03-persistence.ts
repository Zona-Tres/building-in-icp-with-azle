import { nat8, StableBTreeMap, text } from 'azle';

// Declaration
let map = StableBTreeMap<nat8, text>(0);

// Add a new element
map.insert(1, 'hello');

// Update an element
map.insert(1, 'bye');

// Delete an element
map.remove(1);
