import { createBoard } from '@wixc3/react-board';
import styles from './hero-center.board.module.scss';
import commonStylesStyles from '../../src/styles/common-styles.module.scss';
import classNames from 'classnames';

export default createBoard({
    name: 'HeroCenter',
    Board: () => (
        <div className={commonStylesStyles.heroSection}>
            <h1 className={commonStylesStyles.title}>
                Title Goes Here.<br />Click to Edit and Add<br />Your Own Text.
                
            </h1>
            <div className={commonStylesStyles.btnSection}>
                <button>Contact Us</button>
                <button>Learn More</button>
            </div>
        </div>
    ),
    environmentProps: {
        windowHeight: 640,
    },
});
