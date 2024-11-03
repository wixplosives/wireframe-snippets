import { createBoard } from '@wixc3/react-board';
import './pricing.board.css';

export default createBoard({
    name: 'pricing',
    Board: () => (
        <div className="pricing">
            <h1 className="pricing-title">Pricing Plans</h1>
            <div className="pricing-cards">
                <div className="pricing-card">
                    <div className="pricing-header">
                        <h2 className="pricing-header-title">New Client Trial</h2>
                        <h1 className="pricing-header-text">$150</h1>
                        <p className="pricing-header-description">Valid for 3 months</p>
                    </div>
                    <div className="pricing-content">
                        <div className="pricing-feature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="pricing-img"
                            />
                            <p className="pricing-feature">Describe the above</p>
                        </div>
                        <div className="pricing-feature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="pricing-img"
                            />
                            <p className="pricing-feature">Describe the above</p>
                        </div>
                        <div className="pricing-feature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="pricing-img"
                            />
                            <p className="pricing-feature">Describe the above</p>
                        </div>
                        <div className="pricing-feature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="pricing-img"
                            />
                            <p className="pricing-feature">Describe the above</p>
                        </div>
                        <button className="pricing-button">Buy Now</button>
                    </div>
                </div>
                <div className="pricing-premium">
                    <div className="pricing-premium-header">
                        <h2 className="pricing-header-title">Weekly Consulting</h2>
                        <h1 className="pricing-header-text">$200</h1>
                        <p className="pricing-premium-description">Valid for 12 months</p>
                    </div>
                    <div className="pricing-content">
                        <div className="pricing-feature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="pricing-img"
                            />
                            <p className="pricing-feature">Describe the above</p>
                        </div>
                        <div className="pricing-feature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="pricing-img"
                            />
                            <p className="pricing-feature">Describe the above</p>
                        </div>
                        <div className="pricing-feature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="pricing-img"
                            />
                            <p className="pricing-feature">Describe the above</p>
                        </div>
                        <div className="pricing-feature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="pricing-img"
                            />
                            <p className="pricing-feature">Describe the above</p>
                        </div>
                        <button className="pricing-button">Buy Now</button>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-header">
                        <h2 className="pricing-header-title">New Client Trial</h2>
                        <h1 className="pricing-header-text">$150</h1>
                        <p className="pricing-header-description">Valid for 3 months</p>
                    </div>
                    <div className="pricing-content">
                        <div className="pricing-feature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="pricing-img"
                            />
                            <p className="pricing-feature">Describe the above</p>
                        </div>
                        <div className="pricing-feature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="pricing-img"
                            />
                            <p className="pricing-feature">Describe the above</p>
                        </div>
                        <div className="pricing-feature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="pricing-img"
                            />
                            <p className="pricing-feature">Describe the above</p>
                        </div>
                        <div className="pricing-feature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="pricing-img"
                            />
                            <p className="pricing-feature">Describe the above</p>
                        </div>
                        <button className="pricing-button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 424,
        windowHeight: 832,
    },
});
