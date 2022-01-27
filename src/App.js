import React from 'react';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} y/o</p>
        </div>
    )
}

const Head = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.title} {props.exercise}</p>
    )
}

const NbEx = (props) => {
    const sum = props.course.parts[0].exercises
        + props.course.parts[1].exercises
        + props.course.parts[2].exercises;

    return (
        <p>Number of exercises {sum}</p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part title={props.course.parts[0].name} exercise={props.course.parts[0].exercises}/>
            <Part title={props.course.parts[1].name} exercise={props.course.parts[1].exercises}/>
            <Part title={props.course.parts[2].name} exercise={props.course.parts[2].exercises}/>
        </div>
    )
}

const App = () => {
    console.log('Hello from component')
    const now = new Date();
    const a = 10;
    const b = 20;
    const name = "Marlon";
    const course = {
        name: 'Half Stack application development',
        parts: [
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
            <Head course={course}/>
            <Content course={course}/>
            <NbEx course={course}/>
        </div>
    )
}

export default App;