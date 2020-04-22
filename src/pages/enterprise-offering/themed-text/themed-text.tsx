import React from 'react';
import classNames from 'classnames';
import styles from './themed-text.module.scss';

export type ThemedTextProps = React.HTMLAttributes<HTMLSpanElement>;
/**
 * Text colored with the current base color.
 *
 * using css variable:
 * -   --base-color
 * @name ThemedText
 */
export function ThemedText(props: ThemedTextProps) {
	return (
		<span
			{...props}
			className={classNames(props.className, styles.themedText)}
			data-bit-id="bit.base-ui/text/themed-text"
		/>
	);
}
