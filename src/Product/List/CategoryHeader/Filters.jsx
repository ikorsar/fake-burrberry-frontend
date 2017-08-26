import React, { Component } from 'react';
import styled from 'styled-components';

import Filter from './Filter';

const FiltersStyled = styled.div`
  display: flex;
  align-items: center;
  margin-right: -.5rem;
`;

const Wrapper = styled.div`
  overflow-x: scroll;
  display: flex;

  @media screen and (min-width: 48rem) {
    flex-basis: 100%;
    justify-content: space-between;
    overflow-x: visible;
  }
`;

const Group = styled.div`
  display: flex;

  &:last-child {
    button {
      margin-right: .5rem;
    }
  }
`;

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleChildMenu = this.toggleChildMenu.bind(this);
  }

  toggleChildMenu(toggledOn) {
    if (toggledOn) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
  }

  render() {
    return (
      <FiltersStyled>
        <Wrapper>
          <Group>
            {['Category', 'Colour', 'Size'].map(category =>
              (<Filter title={category} open={this.state.open} onClick={this.toggleChildMenu}>
                Content content content content content content content<br />
                content content content content content content content<br />
                content content content content content content content<br />
                content content content content content content content<br />
                content content content content content content content<br />
                content content content content content content content
              </Filter>),
            )}
          </Group>
          <Group>
            <Filter
              title="Sort by price"
              right
              open={this.state.open}
              onClick={this.toggleChildMenu}
            >
              high or<br />
              low<br />
              it’s medium length of<br />
              content
            </Filter>
          </Group>
        </Wrapper>
      </FiltersStyled>
    );
  }
}

export default Filters;
