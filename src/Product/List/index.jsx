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
    props.open &&
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
    open: false,
  };

  handleClick() {
    this.setState(() => ({
      open: !this.state.open,
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
                  {['Category', 'Colour', 'Size'].map(category => (
                    <Filter
                      key={category.toString()}
                      title={category}
                      open={this.state.open}
                      onClick={this.handleClick}
                    >
                      Content content content content content content content<br />
                      content content content content content content content<br />
                      content content content content content content content<br />
                      content content content content content content content<br />
                      content content content content content content content<br />
                      content content content content content content content
                    </Filter>
                  ))}
                </Group>
                <Group>
                  <Filter
                    title="Sort by price"
                    right
                    open={this.state.open}
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

        <ListContent open={this.state.open}>
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
