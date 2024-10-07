import { createBoard } from '@wixc3/react-board';
import commonStylesStyles from '../../src/styles/common-styles.module.scss';
import classNames from 'classnames';
import styles from './hero-flex.board.module.scss';

export default createBoard({
    name: 'HeroFlex',
    Board: () => (
        <div className={commonStylesStyles.heroHorizontal}>
            <div className={commonStylesStyles.image}>
                <img
                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                    alt=""
                />
            </div>
            <div className={classNames(commonStylesStyles.content)}>
                <div>
                    <h1 className={commonStylesStyles.titleLeft}>Write aTitle Here</h1>
                    <p>
                        This is a space to welcome visitors to the site. Grab their attention with
                        copy that clearly states what the site is about, and add an engaging image
                        or video.
                    </p>
                </div>
                <button className={commonStylesStyles.secondaryButton}>Explore</button>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1024,
    },
});
