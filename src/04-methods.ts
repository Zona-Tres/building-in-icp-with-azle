import { Canister, update, query, text, Void, StableBTreeMap, Vec } from 'azle';

const names = StableBTreeMap<string, string>(0);

export default Canister({
    addName: update([text], Void, (name) => {
        names.insert(name, name);
    }),
    getName: query([], Vec(text), () => {
        return names.values();
    }),
});
