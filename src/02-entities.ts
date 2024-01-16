import { nat, Record, text, Vec } from 'azle';

const Subject = Record({
    id: nat,
    name: text,
});

type Subject = typeof Subject.tsType;

const Student = Record({
    id: nat,
    name: text,
    subjects: Vec(Subject),
});

type Student = typeof Student.tsType;

const arreglo: text = 'hello';

// Subjects

const math: Subject = {
    id: 1n,
    name: 'Math',
};

const physics: Subject = {
    id: 2n,
    name: 'Physics',
};

const chemistry: Subject = {
    id: 3n,
    name: 'Chemistry',
};

const geography: Subject = {
    id: 4n,
    name: 'Geography',
};

// Students

const student1: Student = {
    id: 100n,
    name: 'John',
    subjects: [math, chemistry],
};

const student2: Student = {
    id: 101n,
    name: 'Mary',
    subjects: [physics, geography],
};

const students: Array<Student> = [student1, student2];
