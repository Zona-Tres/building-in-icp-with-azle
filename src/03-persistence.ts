import { nat8, Record, StableBTreeMap, text, Vec } from 'azle';

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

// Declaration
let map = StableBTreeMap<nat8, Student>(0);

// Add a new element
let student: Student = {
    id: 100,
    firstname: 'John',
    lastname: 'Doe',
    subjects: [],
};
map.insert(student.id, student);

// Update an element
student = {
    ...student,
    subjects: [math, physics],
};
map.insert(student.id, student);

// Delete an element
map.remove(100);

// Find an element
map.get(100);
