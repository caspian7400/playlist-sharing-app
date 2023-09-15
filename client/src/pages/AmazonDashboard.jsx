import useAuth from "../auth/AmazonAuth";

const code = new URLSearchParams(window.location.search).get('code');

export default function AmazonDashboard() {
    const accessToken = useAuth(code);
    console.log(accessToken);
    return (
        accessToken ? <div>{`Dashboard ${accessToken}`}</div> :
        <div>loading</div>
    )
}

