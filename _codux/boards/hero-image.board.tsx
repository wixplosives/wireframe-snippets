import './hero-image.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => (
        <div className="root">
            <div className="imgBox">
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_800/Frame%206.png"
                    alt="Delicious Margherita Pizza"
                    className="img"
                />
            </div>
            <div className="contentBox">
                <h1 className="title">Authentic Margherita Delight</h1>
                <p className="description">
                    Savor the taste of Italy with our classic Margherita pizza. Made with fresh
                    mozzarella, ripe tomatoes, and fragrant basil on a perfectly crisp crust,
                    it&apos;s a timeless favorite that captures the essence of traditional
                    Neapolitan pizza-making.
                </p>
                <button className="addToCartButton">Add to Cart</button>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 851,
        windowHeight: 1014,
    },
});
