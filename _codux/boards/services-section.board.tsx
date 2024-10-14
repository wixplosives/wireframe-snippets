import { createBoard } from '@wixc3/react-board';
import './services-section.board.css';

export default createBoard({
    name: 'ServicesSection',
    Board: () => (
        <div className="servicesSection">
            <div className="servicesContent">
                <h2 className="servicesTitle"> Write a Title Here</h2>
                <p className="servicesDescription ServicesSectionBoard_p2">
                    This is the space to introduce visitors to the business or brand. Briefly
                    explain who&apos;s behind it, what it does and what makes it unique. Share its
                    core values and what this site has to offer.
                </p>
                <button className="servicesButton">Button</button>
            </div>
            <div className="servicesCards">
                <div className="servicesCard">
                    <div className="servicesCardIconContainer ">
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_d9c1368c073d449fb7f70d1f27cdd94a.svg"
                            alt=""
                            className="servicesCardIcon"
                        />
                    </div>
                    <h6 className="serviceCardTitle">Service Title</h6>
                    <p className="serviceCardDescription">
                        This is the space to describe the service and explain how customers or
                        clients can benefit from it. It’s an opportunity to add a short description
                        that includes relevant details.
                    </p>
                </div>
                <div className="servicesCard">
                    <div className="servicesCardIconContainer ">
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_81a4aae870434124b16c503e6ed35e04.svg"
                            alt=""
                            className="servicesCardIcon"
                        />
                    </div>
                    <h6 className="serviceCardTitle">Service Title</h6>
                    <p className="serviceCardDescription">
                        This is the space to describe the service and explain how customers or
                        clients can benefit from it. It’s an opportunity to add a short description
                        that includes relevant details.
                    </p>
                </div>
                <div className="servicesCard">
                    <div className="servicesCardIconContainer ">
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_db3d5faaafdb48d8acc17eaa13c45dca.svg"
                            alt=""
                            className="servicesCardIcon"
                        />
                    </div>
                    <h6 className="serviceCardTitle">Service Title</h6>
                    <p className="serviceCardDescription">
                        This is the space to describe the service and explain how customers or
                        clients can benefit from it. It’s an opportunity to add a short description
                        that includes relevant details.
                    </p>
                </div>
                <div className="servicesCard">
                    <div className="servicesCardIconContainer ">
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_e55d51b82da445fd890f374888fd9bea.svg"
                            alt=""
                            className="servicesCardIcon"
                        />
                    </div>
                    <h6 className="serviceCardTitle">Service Title</h6>
                    <p className="serviceCardDescription">
                        This is the space to describe the service and explain how customers or
                        clients can benefit from it. It’s an opportunity to add a short description
                        that includes relevant details.
                    </p>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1306,
        windowHeight: 687,
    },
});
