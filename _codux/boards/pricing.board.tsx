import { createBoard } from '@wixc3/react-board';
import './pricing.board.css';

export default createBoard({
    name: 'pricing',
    Board: () => (
        <div className="root">
            <h1 className="title">Pricing Plans</h1>
            <div className="pricings">
                <div className="priceCard">
                    <div className="contentBox">
                        <h2 className="header">New Client Trial</h2>
                        <h1 className="priceText">$150</h1>
                        <p className="description">Valid for 3 months</p>
                    </div>
                    <div className="content">
                        <div className="list">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="img"
                            />
                            <p className="list">Describe the above</p>
                        </div>
                        <div className="list">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="img"
                            />
                            <p className="list">Describe the above</p>
                        </div>
                        <div className="list">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="img"
                            />
                            <p className="list">Describe the above</p>
                        </div>
                        <div className="list">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="img"
                            />
                            <p className="list">Describe the above</p>
                        </div>
                        <button className="button">Buy Now</button>
                    </div>
                </div>
                <div className="premium">
                    <div className="contentBoxPremium">
                        <h2 className=" PricingBoard_title header">Weekly Consulting</h2>
                        <h1 className="priceText">$200</h1>
                        <p className="descriptionPremium">Valid for 12 months</p>
                    </div>
                    <div className="content">
                        <div className="list">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="img"
                            />
                            <p className="list">Describe the above</p>
                        </div>
                        <div className="list">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="img"
                            />
                            <p className="list">Describe the above</p>
                        </div>
                        <div className="list">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="img"
                            />
                            <p className="list">Describe the above</p>
                        </div>
                        <div className="list">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="img"
                            />
                            <p className="list">Describe the above</p>
                        </div>
                        <button className="button">Buy Now</button>
                    </div>
                </div>
                <div className="priceCard">
                    <div className="contentBox">
                        <h2 className="header">New Client Trial</h2>
                        <h1 className="priceText">$150</h1>
                        <p className="description">Valid for 3 months</p>
                    </div>
                    <div className="content">
                        <div className="list">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="img"
                            />
                            <p className="list">Describe the above</p>
                        </div>
                        <div className="list">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="img"
                            />
                            <p className="list">Describe the above</p>
                        </div>
                        <div className="list">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="img"
                            />
                            <p className="list">Describe the above</p>
                        </div>
                        <div className="list">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="img"
                            />
                            <p className="list">Describe the above</p>
                        </div>
                        <button className="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 832,
    },
});
