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
    const sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;

    return (
        <p>Number of exercises {sum}</p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part title={props.parts[0].name} exercise={props.parts[0].exercises}/>
            <Part title={props.parts[1].name} exercise={props.parts[1].exercises}/>
            <Part title={props.parts[2].name} exercise={props.parts[2].exercises}/>
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
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

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
            <Content parts={parts}/>
            <NbEx parts={parts}/>
        </div>
    )
}

export default App;