import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '.';

describe('<Button />', () => {
  it('should render with text', () => {
    const text = 'Button Test';
    render(<Button text={text} onClick={jest.fn} />);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: text });
    expect(button).toBeInTheDocument();
  });
  it('should call function on button click', () => {
    const text = 'Button Test';
    const fn = jest.fn();
    render(<Button text={text} onClick={fn} />);
    const button = screen.getByRole('button', { name: text });
    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('should be disabled when button is true', () => {
    const text = 'Button Test';
    const fn = jest.fn();
    const disabled = true;
    render(<Button text={text} onClick={fn} disabled={disabled} />);
    const button = screen.getByRole('button', { name: text });
    expect(button).toBeDisabled();
  });
  it('should match snapshot', () => {
    const text = 'Button Test';
    const fn = jest.fn();
    const disabled = true;
    const { container } = render(<Button text={text} onClick={fn} disabled={disabled} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
