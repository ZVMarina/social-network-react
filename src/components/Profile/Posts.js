function Posts(props) {
    return (
        <li className="posts__item">
            <span className="posts__text">{props.post}</span>
        </li>
    )
}

export default Posts;