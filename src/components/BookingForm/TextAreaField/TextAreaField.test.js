
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import TextAreaField from './TextAreaField'
import '@testing-library/jest-dom/extend-expect'

describe('text area value', () => {
    const fieldName = 'occasion';
    it('updates on change', async () => {
      const onChangeMock = jest.fn();
      render(<TextAreaField onChange={onChangeMock} fieldName={fieldName} />);
      const textarea = screen.getByTestId(`${fieldName}-textarea-field`);
      user.click(textarea, 'text');
      expect(textarea).toHaveFocus();
      user.type(textarea, 'text');
      expect(textarea.value).toBe('text');
    });
  });