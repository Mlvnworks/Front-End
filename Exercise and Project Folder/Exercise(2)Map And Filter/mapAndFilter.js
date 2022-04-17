const students=
[
    {
        learner:1,
        mname:'Melvin Agustin',
        gradeAv:95.5
    },
    {
        learner:2,
        mname:'Nica Gacusan',
        gradeAv:87.5
    },
    {
        learner:3,
        mname:'Alex Mananghala',
        gradeAv:84
    },
    {
        learner:4,
        mname:'Nick Reglos',
        gradeAv:86
    },
    {
        learner:5,
        mname:'Julius Noma',
        gradeAv:83.6
    },
    {
        learner:6,
        mname:'Erica Sinuto',
        gradeAv:79.5
    },
    {
        learner:7,
        mname:'Hazel Linon',
        gradeAv:96
    }
];
const honorsGradeAv=85;

const failGradeAv=80;


// filter and map

const withHonors=students.filter
(function(student){
    return student.gradeAv > honorsGradeAv
}).map(
    function(student){
        return student.mname;
    }
);

// display
// withHonors
const honorsList=document.querySelector('#withHonors');

const hList=document.createElement('li')
hList.appendChild(document.createTextNode(withHonors));

honorsList.appendChild(hList);

//passers

const passers=students.filter(
    function(student){
        return student.gradeAv < honorsGradeAv

    }
).map(
    function(student){
        return student.mname;
    }
)
// display
const passersList=document.querySelector('#passers');
const pList=document.createElement('li');
pList.appendChild(document.createTextNode(passers));

passersList.appendChild(pList);

// failed
const failed=students.filter(
    function(student){
        return student.gradeAv < failGradeAv;
    }
).map(
    function (student){
        return student.mname;
    }
)
// display
const failedList=document.querySelector('#failed');


const fList=document.createElement('li');
fList.appendChild(document.createTextNode(failed));

failedList.appendChild(fList);

