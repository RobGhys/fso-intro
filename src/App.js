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

const App = () => {
    console.log('Hello from component')
    const now = new Date();
    const a = 10;
    const b = 20;
    const name = "Marlon";
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <p>Greetings</p>
            <p>
                {a} plus {b} = {a + b}
            </p>
            <Hello name={"Robin"} age={20}/>
            <Hello name={name} age={a + b}/>
            <Course course={course}/>
            <Part title={part1} exercise={exercises1}/>
            <Part title={part2} exercise={exercises2}/>
            <Part title={part3} exercise={exercises3}/>
            <NbEx nbr={exercises1 + exercises2 + exercises3}/>
        </div>
    )
}

export default App;