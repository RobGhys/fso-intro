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
            <Part title={props.part1} exercise={props.exercises1}/>
            <Part title={props.part2} exercise={props.exercises2}/>
            <Part title={props.part3} exercise={props.exercises3}/>
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
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

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
            <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
            <NbEx nbr={exercises1 + exercises2 + exercises3}/>
        </div>
    )
}

export default App;