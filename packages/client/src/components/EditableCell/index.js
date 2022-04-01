import { Form } from 'antd';
import React, { useRef, useState } from 'react';

const EditableCell = (props) => {
  const [editing] = useState(true);
  const [form, setForm] = useState(null);
  const input = useRef();
  const {
    record,
    handleSave,
    children,
    dataIndex,
    title,
    editable,
    FieldType,
    index,
    disabled,
    EditableContext,
    placeholder,
    ...restProps
  } = props;

  const save = (e) => {
    form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      handleSave({ ...record, ...values });
    });
  };

  const renderCell = (form) => {
    setForm(form);
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex] ? record[dataIndex] : '',
        })(
          <FieldType
            ref={input}
            placeholder={placeholder}
            disabled={disabled}
            onPressEnter={save}
            onBlur={save}
          />
        )}
      </Form.Item>
    ) : (
      <div className='editable-cell-value-wrap' style={{ paddingRight: 24 }}>
        {children}
      </div>
    );
  };

  return (
    <td {...restProps}>
      {editable ? (
        <EditableContext.Consumer>{renderCell}</EditableContext.Consumer>
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;
