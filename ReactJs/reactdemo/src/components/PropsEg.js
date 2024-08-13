function PropsEg(props){
    return(
        <>
        {console.log(props)}
        <h1>Welcomeback {props.fname}</h1>
        <h3>Role:{props.role}</h3>
        <h5>Last login Time {props.logintime}</h5>
        </>
    )
}
export default PropsEg

