import { nat8, Record, text, Vec } from 'azle';

const Subject = Record({
    id: nat8,
    name: text,
});

type Subject = typeof Subject.tsType;

const Student = Record({
    id: nat8,
    firstname: text,
    lastname: text,
    subjects: Vec(Subject),
});

type Student = typeof Student.tsType;

// Subjects

const math: Subject = {
    id: 1,
    name: 'Math',
};

const physics: Subject = {
    id: 2,
    name: 'Physics',
};

// Students

const student: Student = {
    id: 100,
    firstname: 'John',
    lastname: 'Doe',
    subjects: [math, physics],
};
