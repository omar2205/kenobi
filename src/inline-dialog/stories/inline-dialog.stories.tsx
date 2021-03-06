import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from '../../button';
import styled from 'styled-components';
import InlineDialog from '../src/InlineDialog';
import { Paragraph, Text } from '../../typography';
import { Input } from '../../input';
import Component from '@reach/component-component';

storiesOf('inline dialog', module)
  .add('Positions', () => (
    <Wrapper>
      <InnerWrapper>
        <SectionWrapper>
          <InlineDialog
            placement="top"
            width={240}
            height={240}
            trigger={<Button>Top</Button>}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Text>Learn more about a feature</Text>
            </div>
          </InlineDialog>
          <InlineDialog
            placement="bottom"
            width={240}
            height={240}
            trigger={<Button>Bottom</Button>}>
            <Button>Learn more about a feature</Button>
          </InlineDialog>
        </SectionWrapper>
        <SectionWrapper>
          <InlineDialog
            placement="left"
            width={240}
            height={240}
            trigger={<Button>Left</Button>}>
            <Input />
            <Input data-autofocus />
          </InlineDialog>
          <InlineDialog
            placement="right"
            width={240}
            height={240}
            trigger={<Button>Right</Button>}>
            Learn more about a feature
          </InlineDialog>
        </SectionWrapper>
      </InnerWrapper>
    </Wrapper>
  ))
  .add('Manual state', () => (
    <Wrapper>
      <Component initialState={{ isOpen: false }}>
        {({ setState, state }) => (
          <InlineDialog
            show={state.isOpen}
            placement="top"
            width={240}
            height={240}
            trigger={
              <Button onClick={() => setState({ isOpen: !state.isOpen })}>
                Manual
              </Button>
            }>
            <Paragraph>
              The only way to close me right now is to tickle the button
            </Paragraph>
          </InlineDialog>
        )}
      </Component>
    </Wrapper>
  ));

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const InnerWrapper = styled.div`
  height: 280px;
  width: 400px;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
