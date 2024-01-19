import { Canister, ic, query, text } from 'azle';

export default Canister({
    greet: query([text], text, (name) => {
        return `Hello ${name}!`;
    }, {
        guard: () => {
            const isAuthenticated = !ic.caller().isAnonymous();

            if (!isAuthenticated) {
                throw new Error('You must be authenticated to call this method.');
            }
        }
    })
});
