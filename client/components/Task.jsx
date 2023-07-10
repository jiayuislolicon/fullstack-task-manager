import React, { useState } from 'react';
import clsx from 'clsx';
import { Button, Checkbox, Input } from 'antd';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';

const Task = ({
  _id,
  done,
  name,
  className,
  handleDelete,
  handleEdit,
  handleFinish,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(name);

  return (
    <div
      className={clsx('flex justify-between', className)}
      key={`task-${_id}`}
    >
      <Checkbox
        checked={done}
        onChange={(e) => {
          handleFinish && handleFinish(e.target.checked);
        }}
        className={clsx('text-xl', done && 'line-through')}
      >
        {isEditing ? (
          <Input
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            maxLength={20}
          />
        ) : (
          name
        )}
      </Checkbox>
      <div className='flex'>
        <Button
          onClick={() => {
            setIsEditing(!isEditing);

            if (isEditing && handleEdit) handleEdit(editContent);
          }}
        >
          {isEditing ? 'submit' : <EditOutlined />}
        </Button>
        <Button className='ml-2' onClick={handleDelete}>
          <CloseOutlined />
        </Button>
      </div>
    </div>
  );
};

export default Task;
