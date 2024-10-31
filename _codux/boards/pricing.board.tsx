import { createBoard } from '@wixc3/react-board';
import './pricing.board.css';

export default createBoard({
    name: 'pricing',
    Board: () => (
        <div>
            <div className="pricings">
                <div className="priceCard">
                    <div className="contentBox">
                        <h2 className="teamTitle header">Basic Plan</h2>
                        <h1 className="priceText">$19/mo</h1>
                        <p className="description">Billed monthly</p>
                    </div>
                    <div className="content">
                        <div className="PricingBoard_div1">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="PricingBoard_img1"
                            />
                            <p className="list">This is a text for a feature plan</p>
                        </div>
                        <div className="PricingBoard_div1">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="PricingBoard_img1"
                            />
                            <p className="list">This is a text for a feature plan</p>
                        </div>
                        <div className="PricingBoard_div1">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="PricingBoard_img1"
                            />
                            <p className="list">This is a text for a feature plan</p>
                        </div>
                        <div className="PricingBoard_div1">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="PricingBoard_img1"
                            />
                            <p className="list">This is a text for a feature plan</p>
                        </div>
                        <button className="button">Buy Now</button>
                    </div>
                </div>
                <div className="premium">
                    <div className="contentBoxPremium">
                        <h2 className="teamTitle header">Basic Plan</h2>
                        <h1 className="priceText">$19/mo</h1>
                        <p className="descriptionPremium">Billed monthly</p>
                    </div>
                    <div className="content">
                        <div className="PricingBoard_div1">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="PricingBoard_img1"
                            />
                            <p className="list">This is a text for a feature plan</p>
                        </div>
                        <div className="PricingBoard_div1">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="PricingBoard_img1"
                            />
                            <p className="list">This is a text for a feature plan</p>
                        </div>
                        <div className="PricingBoard_div1">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="PricingBoard_img1"
                            />
                            <p className="list">This is a text for a feature plan</p>
                        </div>
                        <div className="PricingBoard_div1">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="PricingBoard_img1"
                            />
                            <p className="list">This is a text for a feature plan</p>
                        </div>
                        <button className="button">Buy Now</button>
                    </div>
                </div>
                <div className="priceCard">
                    <div className="contentBox">
                        <h2 className="teamTitle header">Basic Plan</h2>
                        <h1 className="priceText">$19/mo</h1>
                        <p className="description">Billed monthly</p>
                    </div>
                    <div className="content">
                        <div className="PricingBoard_div1">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="PricingBoard_img1"
                            />
                            <p className="list">This is a text for a feature plan</p>
                        </div>
                        <div className="PricingBoard_div1">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="PricingBoard_img1"
                            />
                            <p className="list">This is a text for a feature plan</p>
                        </div>
                        <div className="PricingBoard_div1">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="PricingBoard_img1"
                            />
                            <p className="list">This is a text for a feature plan</p>
                        </div>
                        <div className="PricingBoard_div1">
                            <img
                                src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                alt=""
                                className="PricingBoard_img1"
                            />
                            <p className="list">This is a text for a feature plan</p>
                        </div>
                        <button className="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1191,
        windowHeight: 1080,
    },
});
