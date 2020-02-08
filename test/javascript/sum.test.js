/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../app/javascript/components/home';

// eslint-disable-next-line no-undef
test('Check Content', () => {
  const component = renderer.create(
    <Home />,
  );
  const tree = component.toJSON();
  console.log(tree);
  expect(tree.children).toContain('Hello!');
});
