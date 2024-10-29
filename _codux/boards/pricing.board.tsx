import { createBoard } from '@wixc3/react-board';
import './pricing.board.css';

export default createBoard({
    name: 'pricing',
    Board: () => (
        <div>
            <div className="PricingBoard_teams">
                <div className="priceCard">
                    <div className="PricingBoard_imgBox">
                        <img
                            src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                            alt="Delicious Margherita Pizza"
                            className="PricingBoard_img"
                        />
                    </div>
                    <div className="PricingBoard_contentBox">
                        <h2 className="teamTitle ">Basic</h2>
                        <h1>$19/mo</h1>
                        <p className="description">Billed monthly</p>
                    </div>
                    <div className="PricingBoard_contentBox">
                        <h2 className="teamTitle "></h2>
                        <p className="PricingBoard_description">
                            Use this space to promote the business, its products or its services.
                        </p>
                        <button className="exploreButton">Buy Now</button>
                    </div>
                </div>
                <div className="PricingBoard_teamCard">
                    <div className="PricingBoard_imgBox">
                        <img
                            src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                            alt="Delicious Margherita Pizza"
                            className="PricingBoard_img"
                        />
                    </div>
                    <div className="PricingBoard_contentBox">
                        <h2 className="teamTitle ">Growth</h2>
                        <p className="PricingBoard_description">
                            Use this space to promote the business, its products or its services.
                        </p>
                        <button className="PricingBoard_exploreButton">Explore</button>
                    </div>
                </div>
                <div className="PricingBoard_teamCard">
                    <div className="PricingBoard_imgBox">
                        <img
                            src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                            alt="Delicious Margherita Pizza"
                            className="PricingBoard_img"
                        />
                    </div>
                    <div className="PricingBoard_contentBox">
                        <h2 className="teamTitle ">Item Title</h2>
                        <p className="PricingBoard_description">
                            Use this space to promote the business, its products or its services.
                        </p>
                        <button className="PricingBoard_exploreButton">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    ),
});
