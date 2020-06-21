import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { VersionBlock } from '../../sections/workspace-sections/version-block/version-block';
import styles from './workspace-page.module.scss';
import { versionsArray } from '../workspace-page/change-log.data';
import { DocsSection } from '../../sections/workspace-sections/docs-section';

export type WorkSpacePageProps = {} & HTMLAttributes<HTMLDivElement>;
/**
 * A full, responsive page, detailing Bit's offering for support.
 * @name WorkSpacePage
 */
export function WorkSpacePage(props: WorkSpacePageProps) {
	return (
		<div>
			<DocsSection {...docsMock} />
			{versionsArray.map((version, index) => (
				<VersionBlock key={index} version={version} className={styles.marginBottom} />
			))}

		</div>
	);
}


const docsMock = {
	title: 'Radio',
	subTitle: 'Radio Buttons are graphical interface elements that allow user to choose only one of a predefined set of mutually exclusive options.',
	labels: ['chart', 'graph', 'ui-components', 'react'],
}