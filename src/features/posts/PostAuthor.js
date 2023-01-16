
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = (props) => {

    const users = useSelector(selectAllUsers);
    console.log(users);
    const author = users.find((user) => {
        return user.id === props.userId;
    })
    console.log(author);
    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor;