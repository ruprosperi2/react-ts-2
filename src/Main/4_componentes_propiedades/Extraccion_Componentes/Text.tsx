function Text(props:any) {
    console.log(props);
    return (
        <div className="Comment-text">
            <p>{props.text}</p>
        </div>
    );
}

export default Text;