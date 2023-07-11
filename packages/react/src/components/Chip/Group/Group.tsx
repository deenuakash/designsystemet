import type { HTMLAttributes } from 'react';
import React, { forwardRef } from 'react';
import cn from 'classnames';

import type { ChipProps } from '../Chip';

import classes from './Group.module.css';

export type ChipGroupProps = {
  /**
   * Changes padding, font-sizes and gap between chips.
   */
  size?: 'xsmall' | 'small';
} & HTMLAttributes<HTMLUListElement>;

export const Group = forwardRef<HTMLUListElement, ChipGroupProps>(
  ({ children, size = 'xsmall', ...rest }: ChipGroupProps, ref) => (
    <ul
      {...rest}
      ref={ref}
      className={cn(classes.groupContainer, classes[size], rest.className)}
    >
      {React.Children.toArray(children).map((child, index) =>
        React.isValidElement(child) ? (
          <li key={`${child.toString()}-${index}`}>
            {React.cloneElement(child as React.ReactElement<ChipProps>, {
              size,
            })}
          </li>
        ) : null,
      )}
    </ul>
  ),
);
