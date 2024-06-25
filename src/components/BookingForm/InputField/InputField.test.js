// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import InputField from './InputField';

// test('renders InputField component', () => {
//   render(<InputField selectedValue="" />);
//   const inputElement = screen.getByRole('textbox');
//   expect(inputElement).toBeInTheDocument();
// });
import React from 'react'

import { render, screen, act } from '@testing-library/react';
import user from '@testing-library/user-event'
import InputField from './InputField'
import '@testing-library/jest-dom/extend-expect'

describe('Input value', () => {
    it('updates on change', async () => {
      const fieldName = 'name';
      const onChangeMock = jest.fn();
      render(<InputField onChange={onChangeMock} fieldName={fieldName} />);
      const input = screen.getByTestId(`${fieldName}-input-field`);
      act(() => {
        user.type(input, 'text');
      })
      expect(input.value).toBe('text');
    });

    it('email input is invalid', async () => {
      const fieldName = 'email';
      const onChangeMock = jest.fn();
      render(<InputField onChange={onChangeMock} fieldName={fieldName} type='email' />);
      const input = screen.getByTestId(`${fieldName}-input-field`);
      act(() => {
        user.click(input);
      })
      expect(input).toHaveFocus();
      act(() => {
            user.type(input, 'textgmail.com');
      })
      expect(input.value).toBe('textgmail.com');
      expect(input).toBeInvalid();
    });

    it('email input is valid', async () => {
      const fieldName = 'email';
      const onChangeMock = jest.fn();
      render(<InputField onChange={onChangeMock} fieldName={fieldName} type='email' />);
      const input = screen.getByTestId(`${fieldName}-input-field`);
      act(() => {
        user.click(input);
      })
      expect(input).toHaveFocus();
      act(() => {
        user.type(input, 'text@gmail.com');
      })
      expect(input.value).toBe('text@gmail.com');
      expect(input).toBeValid();
    });

    // it('updates on change', async () => {
    //   const onChangeMock = jest.fn();
    //   render(<InputField onChange={onChangeMock} fieldName={fieldName} />);
    //   const input = screen.getByTestId(`${fieldName}-input-field`);
    //   user.click(input, 'text');
    //   expect(input).toHaveFocus();
    //   user.type(input, 'text');
    //   expect(input.value).toBe('text');
    // });

  });

