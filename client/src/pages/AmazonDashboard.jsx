const code = new URLSearchParams(window.location.search).get('code');

export default function AmazonDashboard() {
    return (
        code ? <div>{`Dashboard ${code}`}</div> :
        <div>load ho raha</div>
    )
}

