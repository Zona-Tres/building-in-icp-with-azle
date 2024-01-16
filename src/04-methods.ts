import { Canister, update, query, text, Void, StableBTreeMap, Vec, Record, nat8 } from 'azle';

const Student = Record({
    id: nat8,
    firstname: text,
    lastname: text,
});

type Student = typeof Student.tsType;

const students = StableBTreeMap<nat8, Student>(0);

export default Canister({
    addStudent: update([nat8, text, text], Void, (id, firstname, lastname) => {
        const student: Student = {
            id,
            firstname,
            lastname,
        };

        students.insert(student.id, student);
    }),
    getAll: query([], Vec(Student), () => {
        return students.values();
    }),
});
