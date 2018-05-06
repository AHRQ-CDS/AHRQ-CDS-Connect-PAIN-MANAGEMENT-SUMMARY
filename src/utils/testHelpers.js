import React from 'react';
import PropTypes from 'prop-types';
import { mount, shallow, ReactWrapper } from 'enzyme';
import createRouterContext from 'react-router-test-context';

/**
 * Render a component with props, mocking the router context
 */
function fullRender(ComponentClass, props = {}) {
  const context = createRouterContext();
  ComponentClass.contextTypes = { // eslint-disable-line no-param-reassign
    router: PropTypes.object
  };
  return mount(
    <ComponentClass id="root" {...props} />,
    { context }
  );
}

function shallowRender(ComponentClass, props = {}) {
  const context = createRouterContext();
  return shallow(
    <ComponentClass id="root" {...props} />,
    { context }
  );
}

export {
  fullRender,
  shallowRender,
  ReactWrapper
};
