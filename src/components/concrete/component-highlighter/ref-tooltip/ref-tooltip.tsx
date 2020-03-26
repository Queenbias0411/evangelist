import React, { Component } from 'react';
import classNames from 'classnames';

//@ts-ignore
import createRef from 'react-create-ref';
import { createPopper, Instance, Options } from '@popperjs/core';

import styles from './ref-tooltip.module.scss';

export type RefTooltipProps = {
	/**
	 * dom element to attach to
	 */
	targetElement?: HTMLElement;
	/**
	 * options for the underlying Popper.js position engine
	 */
	popperOptions?: Partial<Options>;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A [Popper.js](https://popper.js.org/) react wrapper that repositions children to be adjacent to a target element.  
 * This component is a container only, with no visual styling.
 */
export class RefTooltip extends Component<RefTooltipProps> {
	private ref = createRef();
	private popperInstance?: Instance;

	componentWillUnmount() {
		this.destroy();
	}

	componentDidUpdate(prevProps: RefTooltipProps) {
		const nextProps = this.props;

		if (prevProps.targetElement !== nextProps.targetElement) {
			this.reposition(nextProps.targetElement);
		}
	}

	private reposition = (targetElement?: HTMLElement) => {
		const { popperOptions = popperDefaultOptions } = this.props;
		const popperElement = this.ref.current;

		if (!targetElement) {
			this.destroy();
		}

		if (!targetElement || !popperElement) return;

		this.popperInstance = createPopper(targetElement, popperElement, popperOptions);
	};

	private destroy() {
		if (!this.popperInstance) return;

		this.popperInstance.destroy();
		this.popperInstance = undefined;
	}

	render() {
		const { className, targetElement, ...rest } = this.props;
		return (
			<div
				{...rest}
				ref={this.ref}
				className={classNames(styles.tooltipWrapper, className)}
				data-ignore-component-highlight
			/>
		);
	}
}

const popperDefaultOptions: Partial<Options> = {
	placement: 'top',
	modifiers: [
		{
			name: 'flip',
			enabled: false,
		},
	],
};
