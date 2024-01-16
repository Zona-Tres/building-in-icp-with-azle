import { bool, Canister, Err, nat8, Ok, query, Record, Result, StableBTreeMap, text, update, Variant, Vec } from 'azle';

const Student = Record({
    id: nat8,
    firstname: text,
    lastname: text
});

type Student = typeof Student.tsType;

const students = StableBTreeMap<nat8, Student>(0);

const AddStudentErrors = Variant({
    StudentIdAlreadyTaken: nat8,
});

const RemoveStudentErrors = Variant({
    StudentDoesNotExist: nat8,
});

export default Canister({
    add: update([nat8, text, text], Result(bool, AddStudentErrors), (id, firstname, lastname) => {
        let student: Student | undefined = students.get(id).Some;

        if (student) {
            return Err({ StudentIdAlreadyTaken: id });
        }

        student = {
            id,
            firstname,
            lastname,
        };

        students.insert(student.id, student);

        return Ok(true);
    }),
    remove: update([nat8], Result(bool, RemoveStudentErrors), (id) => {
        const student = students.get(id);

        if ('None' in student) {
            return Err({ StudentDoesNotExist: id });
        }

        students.remove(id);

        return Ok(true);
    }),
    getAll: query([], Vec(Student), () => {
        return students.values();
    }),
});
