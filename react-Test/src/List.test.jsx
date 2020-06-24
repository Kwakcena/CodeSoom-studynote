import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import List from './List';

// describe - it => describe('List') => it('renders tasks')

// with tasks
// - List tenders tasks...
// - List renders "delete" button to delete a task

// without tasks
// - List render no tasks message.

describe('List', () => {
  const handleClickDelete = jest.fn();

  function renderList(tasks) {
    return render((
      // List 컴포넌트를 사용하는 방법을 서술한다.
      <List
        tasks={tasks}
        onClickDelete={handleClickDelete}
      />
    ));
  }

  describe('with tasks', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];
    it('render tasks', () => {
      const { getByText } = renderList(tasks);

      expect(getByText(/Task-1/)).not.toBeNull();
      expect(getByText(/Task-2/)).not.toBeNull();
    });

    it('renders "완료" button to delete a task', () => {
      const { getAllByText } = renderList(tasks);

      const buttons = getAllByText('완료');
      fireEvent.click(buttons[0]);
      expect(handleClickDelete).toBeCalledWith(1);
    });
  });

  describe('without tasks', () => {
    it('renders no task message', () => {
      const tasks = [];
      const { getByText } = renderList(tasks);
      expect(getByText(/할 일이 없어요!/)).not.toBeNull();
    });
  });
});
