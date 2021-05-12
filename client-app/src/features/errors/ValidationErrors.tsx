import React from 'react';
import { Message } from 'semantic-ui-react';

interface Props {
  errors: string[] | undefined;
}

export default function ValidationErrors({errors}: Props) {
  return (
    <Message error>
      {errors && (
        <Message.List>
          {errors.map((err: any, i) => {
            return <Message.Item key={i}>{err}</Message.Item>
          })}
        </Message.List>)}
    </Message>
  )
}