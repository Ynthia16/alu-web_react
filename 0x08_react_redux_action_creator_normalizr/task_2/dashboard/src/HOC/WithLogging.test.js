import React, { Component } from 'react';
import { mount } from 'enzyme';
import Login from '../../Login/Login';
import WithLogging from './WithLogging';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

describe('<WithLogging /> HOC', () => {
    it('verifies console.log output when mounting and umounting pure HTML', () => {
        const spy = jest.spyOn(console, 'log');
        const Component = WithLogging(() => <p />);

        const wrapper = mount(<Component />);

        expect(spy).toHaveBeenCalledWith('Component Component is mounted');
        wrapper.unmount();
        expect(spy).toHaveBeenCalledWith('Component Component is going to unmount');
        spy.mockRestore();
    });

    it('verifies console.log output when mounting and umounting Login component', () => {
        const spy = jest.spyOn(console, 'log');
        const Component = WithLogging(Login);

        const wrapper = mount(<Component />);

        expect(spy).toHaveBeenCalledWith('Component Login is mounted');
        wrapper.unmount();
        expect(spy).toHaveBeenCalledWith('Component Login is going to unmount');
        spy.mockRestore();
    });
});