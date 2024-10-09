import { createBoard } from '@wixc3/react-board';
import classNames from 'classnames';
import styles from './services-section.board.module.scss';

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
                <button className={styles.button}>Button</button>
            </div>
            <div className={styles.allCards}>
                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_d9c1368c073d449fb7f70d1f27cdd94a.svg"
                            alt=""
                            className={styles.icon}
                        />
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
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_81a4aae870434124b16c503e6ed35e04.svg"
                            alt=""
                            className={styles.icon}
                        />
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
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_db3d5faaafdb48d8acc17eaa13c45dca.svg"
                            alt=""
                            className={styles.icon}
                        />
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
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_e55d51b82da445fd890f374888fd9bea.svg"
                            alt=""
                            className={styles.icon}
                        />
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
        windowWidth: 1350,
    },
});
