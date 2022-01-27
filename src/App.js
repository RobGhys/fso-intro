import React from 'react';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} y/o</p>
        </div>
    )
}

const Course = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.title} {props.exercise}</p>
    )
}

const NbEx = (props) => {
    return (
        <p>Number of exercises {props.nbr}</p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part title={props.part1.name} exercise={props.part1.exercises}/>
            <Part title={props.part2.name} exercise={props.part2.exercises}/>
            <Part title={props.part3.name} exercise={props.part3.exercises}/>
        </div>
    )
}

const App = () => {
    console.log('Hello from component')
    const now = new Date();
    const a = 10;
    const b = 20;
    const name = "Marlon";
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <h1>Intro</h1>
            <p>Greetings</p>
            <p>
                {a} plus {b} = {a + b}
            </p>
            <Hello name={"Robin"} age={20}/>
            <Hello name={name} age={a + b}/>
            <Course course={course}/>
            <Content part1={part1} part2={part2} part3={part3}/>
            <NbEx nbr={part1.exercises + part2.exercises + part3.exercises}/>
        </div>
    )
}

export default App;