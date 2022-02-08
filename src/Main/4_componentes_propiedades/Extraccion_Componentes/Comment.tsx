import User from './User';
import Text from './Text';

function Comment(props:any) {
    return (
        <div className="Comment">
            <User author={props.info.user} />
            <Text text={props.info.text}/>
        </div>
    );
}

export default Comment;