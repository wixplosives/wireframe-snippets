import { createBoard } from '@wixc3/react-board';
import './pricing.board.css';

export default createBoard({
    name: 'pricing',
    Board: () => (
        <div className="pricing">
            <h1 className="pricingTitle">Pricing Plans</h1>
            <div className="pricingCards">
                <div className="pricingCard">
                    <div className="pricingHeader">
                        <h2 className="pricingHeaderTitle">New Client Trial</h2>
                        <h1 className="pricingHeaderCost">$150</h1>
                        <p className="pricingHeaderDescription">Valid for 3 months</p>
                    </div>
                    <div className="pricingContent">
                        <div className="pricingFeature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt="V Logo on Dark Background"
                                className="pricingImage"
                            />
                            <p>Describe the above</p>
                        </div>
                        <div className="pricingFeature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt="V Logo on Dark Background"
                                className="pricingImage"
                            />
                            <p>Describe the above</p>
                        </div>
                        <div className="pricingFeature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt="V Logo on Dark Background"
                                className="pricingImage"
                            />
                            <p>Describe the above</p>
                        </div>
                        <div className="pricingFeature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt="V Logo on Dark Background"
                                className="pricingImage"
                            />
                            <p>Describe the above</p>
                        </div>
                        <button className="pricingButton">Buy Now</button>
                    </div>
                </div>
                <div className="pricingPremium">
                    <div className="pricingPremiumHeader">
                        <h2 className="pricingHeaderTitle">Weekly Consulting</h2>
                        <h1 className="pricingHeaderCost">$200</h1>
                        <p className="pricingPremiumDescription">Valid for 12 months</p>
                    </div>
                    <div className="pricingContent">
                        <div className="pricingFeature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt="V Logo on Dark Background"
                                className="pricingImage"
                            />
                            <p>Describe the above</p>
                        </div>
                        <div className="pricingFeature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt="V Logo on Dark Background"
                                className="pricingImage"
                            />
                            <p>Describe the above</p>
                        </div>
                        <div className="pricingFeature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt="V Logo on Dark Background"
                                className="pricingImage"
                            />
                            <p>Describe the above</p>
                        </div>
                        <div className="pricingFeature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt="V Logo on Dark Background"
                                className="pricingImage"
                            />
                            <p>Describe the above</p>
                        </div>
                        <button className="pricingButton">Buy Now</button>
                    </div>
                </div>
                <div className="pricingCard">
                    <div className="pricingHeader">
                        <h2 className="pricingHeaderTitle">New Client Trial</h2>
                        <h1 className="pricingHeaderCost">$150</h1>
                        <p className="pricingHeaderDescription">Valid for 3 months</p>
                    </div>
                    <div className="pricingContent">
                        <div className="pricingFeature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt="V Logo on Dark Background"
                                className="pricingImage"
                            />
                            <p>Describe the above</p>
                        </div>
                        <div className="pricingFeature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt="V Logo on Dark Background"
                                className="pricingImage"
                            />
                            <p>Describe the above</p>
                        </div>
                        <div className="pricingFeature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt="V Logo on Dark Background"
                                className="pricingImage"
                            />
                            <p>Describe the above</p>
                        </div>
                        <div className="pricingFeature">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt="V Logo on Dark Background"
                                className="pricingImage"
                            />
                            <p>Describe the above</p>
                        </div>
                        <button className="pricingButton">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1110,
        windowHeight: 832,
    },
});
