import React from 'react';

const App = () => {
    console.log('Hello from component')
    const now = new Date();
    const a = 10;
    const b = 20;

    return (
        <div>
            <p>Hello world</p>
            <p>
                {a} plus {b} = {a + b}
            </p>
        </div>
    )
}

export default App;