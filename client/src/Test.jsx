import { Button, Container } from 'react-bootstrap'
import { useState } from 'react'
const testFunction = () => console.log('test');

export default function Test() {
    testFunction();
    const [count, setCount] = useState(0);
    const btnHandler = () => setCount(count + 1);
    return (
        <Container className='d-flex-column align-items-center' fluid>
            <Button onClick={btnHandler}>click me</Button>
            <h2>count is {count}</h2>
        </Container>
    )
}
