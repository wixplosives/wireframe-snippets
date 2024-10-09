import { createBoard } from '@wixc3/react-board';
import commonStyles from '../../src/styles/common-styles.module.scss';
import classNames from 'classnames';
import styles from './hero-flex.board.module.scss';

export default createBoard({
    name: 'HeroFlex',
    Board: () => (
        <div className={commonStyles.heroHorizontal}>
            <div className={commonStyles.image}>
                <img
                    src="https://static.wixstatic.com/media/8586f3_c98b193548784753bb357eeb03615da5~mv2.jpg/v1/fill/w_1728,h_1378/Image%20by%20Johannes%20Plenio.jpg"
                    alt=""
                    className={styles.image}
                />
            </div>
            <div className={commonStyles.content}>
                <div>
                    <h1 className={commonStyles.titleLeft}>Write aTitle Here</h1>
                    <p className={styles.p1}>
                        This is a space to welcome visitors to the site. Grab their attention with
                        copy that clearly states what the site is about, and add an engaging image
                        or video.
                    </p>
                </div>
                <button className={commonStyles.secondaryButtonWidth}>Explore</button>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 430,
    },
});
