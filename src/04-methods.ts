import { Canister, update, query, text, Void } from 'azle';

let name: text = 'No Name';

Canister({
    setName: update([text], Void, (name) => {
        name = name;
    }),
    getName: query([], text, () => {
        return name;
    }),
});
