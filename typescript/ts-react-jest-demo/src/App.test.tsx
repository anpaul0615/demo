import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const renderComponent = ({ header, footer, children }) => render((
    <App header={header} footer={footer}>
      {children}
    </App>
  ));

  describe('with header & footer', () => {
    const header = <div>HEADER</div>;
    const footer = <div>FOOTER</div>;

    describe('with children', () => {
      const children = (
        <>
          <div>CHILD1</div>
          <div>CHILD2</div>
          <div>CHILD3</div>
        </>
      );

      it('renders header, footer, children', () => {
        const { container } = renderComponent({ header, footer, children });
        expect(container).toHaveTextContent('HEADER');
        expect(container).toHaveTextContent('FOOTER');
        expect(container).toHaveTextContent('CHILD1');
        expect(container).toHaveTextContent('CHILD2');
        expect(container).toHaveTextContent('CHILD3');
      });
    });

    describe('without children', () => {});
  });

  describe('without header & footer', () => {});
});
