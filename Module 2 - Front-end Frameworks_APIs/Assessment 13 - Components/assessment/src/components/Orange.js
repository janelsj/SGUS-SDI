function Image (props) {
    return(<>
        <div className="pictures"><img src={props.url} alt={props.alt}/></div>
    </>)
}

export default Image;