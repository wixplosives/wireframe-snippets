import { createBoard } from '@wixc3/react-board';
import commonStylesStyles from '../../src/styles/common-styles.module.scss';
import classNames from 'classnames';
import styles from './services-section.board.module.scss';

export default createBoard({
    name: 'ServicesSection',
    Board: () => (
        <div className={commonStylesStyles.servicesSection}>
            <h2 className={commonStylesStyles.servicesTitle}> Write a Title Here</h2>
            <p className={commonStylesStyles.servicesDescription}>
                This is the space to introduce visitors to the business or brand. Briefly explain
                who&apos;s behind it, what it does and what makes it unique. Share its core values
                and what this site has to offer.
            </p>
        </div>
    ),
});
