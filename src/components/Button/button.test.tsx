import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './button'

const defaultProps = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: 'primary',
    size: 'lg',
    className: 'testclass'
}

const linkProps: ButtonProps={
    btnType: 'link',
    href: 'http://google.com'
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

describe('test Button component', () => {
    it('should render a correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Button</Button>)
        const element = wrapper.getByText('Button') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual("BUTTON")
        expect(element).toHaveClass('btn btn-default')
        expect(element.disabled).toBeFalsy()
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled
    })
    it('should render the correct comopent according to props', () => {
        const wrapper = render(<Button {...testProps}>Button</Button>)
        const element = wrapper.getByText('Button') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual("BUTTON")
        expect(element).toHaveClass('btn btn-primary btn-lg testclass')
        expect(element.disabled).toBeFalsy()
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled
    })
    it('should render a link when btnType is link and href is provided', () => {
        const wrapper = render(<Button {...linkProps}>Link</Button>) 
        const element = wrapper.getByText('Link') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual("A")
        expect(element).toHaveClass('btn btn-link')
    })
    it('should disable a button when disabled is set to true', ()=>{
        const wrapper = render(<Button {...linkProps}>Disable</Button>) 
        const element = wrapper.getByText('Disable') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})
