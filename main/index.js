import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {css, CacheProvider} from '@emotion/core';
import createCache from '@emotion/cache';
import LibraryComponent from 'emotion-cache-test-lib';

const localStyle = css`
  color: red;
`;

const LocalComponent = ({children}) => (
  <div css={localStyle}>{children}</div>
);

class Main extends Component {
  constructor(props) {
    super(props);
    this.t1Ref = React.createRef();
    this.t2Ref = React.createRef();
    this.state = {
      isReady: false,
    };
  }

  componentDidMount() {
    this.t1Cache = createCache({
      key: 'aaa',
      container: this.t1Ref.current,
    });
    this.t2Cache = createCache({
      key: 'bbb',
      container: this.t2Ref.current,
    });
    this.setState({isReady: true});
  }

  render() {
    const {isReady} = this.state;
    return (
      <div>
        <div ref={this.t1Ref}>
          {isReady &&
            <CacheProvider value={this.t1Cache}>
              <LocalComponent>
                LocalComponent
              </LocalComponent>
            </CacheProvider>
          }
        </div>
        <div ref={this.t2Ref}>
          {isReady &&
            <CacheProvider value={this.t2Cache}>
              <LibraryComponent>
                LibraryComponent
              </LibraryComponent>
            </CacheProvider>
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

