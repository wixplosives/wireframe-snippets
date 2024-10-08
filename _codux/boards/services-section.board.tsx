import { createBoard } from '@wixc3/react-board';
import classNames from 'classnames';
import styles from './services-section.board.module.scss';
import commonStylesStyles from '../../src/styles/common-styles.module.scss';

export default createBoard({
    name: 'ServicesSection',
    Board: () => (
        <div className={styles.servicesSection}>
            <div className={styles.content}>
                <h2 className={styles.servicesTitle}> Write a Title Here</h2>
                <p className={styles.servicesDescription}>
                    This is the space to introduce visitors to the business or brand. Briefly
                    explain who&apos;s behind it, what it does and what makes it unique. Share its
                    core values and what this site has to offer.
                </p>
                <button className={commonStylesStyles.secondaryButtonWidth}>Explore</button>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 701,
    },
});
