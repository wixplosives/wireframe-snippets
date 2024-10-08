import { createBoard } from '@wixc3/react-board';
import styles from './hero-center.board.module.scss';
import commonStylesStyles from '../../src/styles/common-styles.module.scss';
import classNames from 'classnames';

export default createBoard({
    name: 'HeroCenter',
    Board: () => (
        <div className={styles.root}>
            <h1 className={styles.title}>
                Title Goes Here.
                <br />
                Click to Edit and Add Your Own Text.
            </h1>
            <div className={styles.buttons}>
                <button className={styles.secondaryButton}>Contact Us</button>
                <button className={styles.primaryButton}>Learn More</button>
            </div>
        </div>
    ),
    environmentProps: {
        windowHeight: 768,
        windowWidth: 1007,
    },
});
