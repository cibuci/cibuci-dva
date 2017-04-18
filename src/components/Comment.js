import React from 'react';
import { Media, MediaLeft, Image, MediaContent, Content, MediaRight, Button } from 're-bulma';

const Comment = () => {
  return (
    <div>
      <Media>
        <MediaLeft>
          <Image src="http://placehold.it/128x128" />
        </MediaLeft>
        <MediaContent>
          <Content>
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </Content>
        </MediaContent>
        <MediaRight>
          <Button delete />
        </MediaRight>
      </Media>
    </div>
  );
};

Comment.propTypes = {
};

export default Comment;
