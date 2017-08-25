import React, { Component } from 'react';
import styled from 'styled-components';

import Filter from './Filter';

const FiltersStyled = styled.div`
  display: flex;
  white-space: nowrap;
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

  toggleChildMenu() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <FiltersStyled>
        <Wrapper>
          <Group>
            <Filter title="Category" open={this.state.open} onClick={this.toggleChildMenu}>
              <p>
                Content content content content content content content content content content
                content content content content content content content content content content
                content content content content content content content content content content
                content content content content content content content content content content
                content content
              </p>
            </Filter>
            <Filter title="Colour" open={this.state.open} onClick={this.toggleChildMenu}>
              <p>test</p>
            </Filter>
            <Filter title="Size" open={this.state.open} onClick={this.toggleChildMenu}>
              <p>test</p>
            </Filter>
          </Group>
          <Group>
            <Filter
              title="Sort by price"
              right
              open={this.state.open}
              onClick={this.toggleChildMenu}
            >
              <p>test</p>
            </Filter>
          </Group>
        </Wrapper>
      </FiltersStyled>
    );
  }
}

export default Filters;
