import './card-collection-1.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Card Collection 1',
    Board: () => (
        <div className="card-collection">
            <h1 className="card-collection-title">
                Write a Title Here.
                <br /> Click to Edit and Add Your Own Text.
            </h1>
            <div className="card-collection-items">
                <div className="card">
                    <div className="card-image-box">
                        <img
                            src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                            alt="Add a description of the image"
                            className="card-image"
                        />
                    </div>
                    <div className="card-content">
                        <h2 className="card-title">Item Title</h2>
                        <p className="card-description">
                            Use this space to promote the business, its products or its services.
                        </p>
                        <button className="card-button">Explore</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image-box">
                        <img
                            src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                            alt="Delicious Margherita Pizza"
                            className="card-image"
                        />
                    </div>
                    <div className="card-content">
                        <h2 className="card-title">Item Title</h2>
                        <p className="card-description">
                            Use this space to promote the business, its products or its services.
                        </p>
                        <button className="card-button">Explore</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image-box">
                        <img
                            src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                            alt="Delicious Margherita Pizza"
                            className="card-image"
                        />
                    </div>
                    <div className="card-content">
                        <h2 className="card-title">Item Title</h2>
                        <p className="card-description">
                            Use this space to promote the business, its products or its services.
                        </p>
                        <button className="card-button">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 480,
        windowHeight: 768,
    },
});
