import React from 'react';
import { Link } from 'react-router-dom';
import FeedPostItemContainer from './feed_post_item_container.js'

class FeedPosts extends React.Component {
    
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchAllPosts();
        this.props.fetchAllUsers();
    }

    render() {

        let posts = this.props.posts.map(post =>
            <FeedPostItemContainer
            post={post}
            key={ post.id }
            />)

        return(
            <div className="feed-posts">
                Hello!
                <div className='landing-feed'>
                    { posts }
                </div>
            </div>
        )
    }
};

export default FeedPosts;
