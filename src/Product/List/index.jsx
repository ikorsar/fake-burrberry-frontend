import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet';

import Categories from '../Categories';
import Description from './Description';
import SubCategory from './SubCategory';
import ShowMore from './ShowMore';
import Filter from './Filter';

const CategoryHeader = styled.section`
  background-color: #f3f3f3;
  padding-top: 2rem;

  @media screen and (min-width: 48rem) {
    padding-top: 4rem;
  }
`;

const Filters = styled.div`
  margin-right: -.5rem;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: visible;

  @media screen and (min-width: 48rem) {
    flex-basis: 100%;
    justify-content: space-between;
    overflow: visible;
  }
`;

const Group = styled.div`
  display: flex;

  &:last-child {
    button {
      margin-right: 0.5rem;
    }
  }
`;

const ListContent = styled.section`
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -4rem;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -10;
    opacity: 0;
    transition: all 0.15s ease-in-out;

    ${props =>
    props.filterOpened &&
      css`
        opacity: 1;
        z-index: 10;
      `};
  }
`;

class List extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    filterOpened: false,
  };

  handleClick() {
    this.setState(() => ({
      filterOpened: !this.state.filterOpened,
    }));
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Men’s Clothing</title>
        </Helmet>

        <Categories />

        <CategoryHeader>
          <div className="container">
            <Description />

            <Filters>
              <Wrapper>
                <Group>
                  <Filter
                    title="Category"
                    filterOpened={this.state.filterOpened}
                    onClick={this.handleClick}
                  >
                    Content content content content content content content<br />
                    content content content content content content content<br />
                    content content content content content content content<br />
                    content content content content content content content
                  </Filter>
                  <Filter
                    title="Colour"
                    filterOpened={this.state.filterOpened}
                    onClick={this.handleClick}
                  >
                    <input type="checkbox" />
                    <span>Example checkbox</span>
                  </Filter>
                  <Filter
                    title="Size"
                    filterOpened={this.state.filterOpened}
                    onClick={this.handleClick}
                  >
                    Content content content content content content content<br />
                    content content content content content content content<br />
                    content content content content content content content<br />
                    content content content content content content content<br />
                    content content content content content content content<br />
                    content content content content content content content content
                  </Filter>
                </Group>
                <Group>
                  <Filter
                    title="Sort by price"
                    right
                    filterOpened={this.state.filterOpened}
                    onClick={this.handleClick}
                  >
                    high or<br />
                    low<br />
                    it’s medium length of<br />
                    content
                  </Filter>
                </Group>
              </Wrapper>
            </Filters>
          </div>
        </CategoryHeader>

        <ListContent filterOpened={this.state.filterOpened}>
          <div className="container">
            <SubCategory />

            <ShowMore />
          </div>
        </ListContent>
      </div>
    );
  }
}
export default List;
