import { createBoard } from '@wixc3/react-board';
import classNames from 'classnames';
import styles from './services-section.board.module.scss';
import commonStylesStyles from '../../src/styles/common-styles.module.scss';
import LightningSvg from '../../src/assets/lightning.svg';
import AnchorSvg from '../../src/assets/anchor.svg';
import LeafSvg from '../../src/assets/leaf.svg';
import GlobeSvg from '../../src/assets/globe.svg';

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
            <div className={styles.allCards}>
                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <img src={AnchorSvg} alt="" className={styles.icon} />
                    </div>
                    <h6 className={styles.serviceCardTitle}>Service Title</h6>
                    <p className={styles.serviceCardDescription}>
                        This is the space to describe the service and explain how customers or
                        clients can benefit from it. It’s an opportunity to add a short description
                        that includes relevant details.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <img src={LightningSvg} alt="" className={styles.icon} />
                    </div>
                    <h6 className={styles.serviceCardTitle}>Service Title</h6>
                    <p className={styles.serviceCardDescription}>
                        This is the space to describe the service and explain how customers or
                        clients can benefit from it. It’s an opportunity to add a short description
                        that includes relevant details.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <img src={GlobeSvg} alt="" className={styles.icon} />
                    </div>
                    <h6 className={styles.serviceCardTitle}>Service Title</h6>
                    <p className={styles.serviceCardDescription}>
                        This is the space to describe the service and explain how customers or
                        clients can benefit from it. It’s an opportunity to add a short description
                        that includes relevant details.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <img src={LeafSvg} alt="" className={styles.icon} />
                    </div>
                    <h6 className={styles.serviceCardTitle}>Service Title</h6>
                    <p className={styles.serviceCardDescription}>
                        This is the space to describe the service and explain how customers or
                        clients can benefit from it. It’s an opportunity to add a short description
                        that includes relevant details.
                    </p>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 716,
    },
});
