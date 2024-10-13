import { createBoard } from '@wixc3/react-board';
import './hero-header.board.css';

export default createBoard({
    name: 'HeroFlex',
    Board: () => (
        <div className="root">
            <article className="recipe">
                <div className="pizza-box">
                    <img
                        src="https://static.wixstatic.com/media/0f2899b6eec14a0c867d375285c4f316.jpg/v1/fill/w_746,h_496,fp_0.52_0.27,q_85,usm_0.66_1.00_0.01,enc_auto/Fashion%20Art%20Model.jpg"
                        alt=""
                    />
                </div>
                <div className="recipe-content">
                    <h1 className="recipe-title">
                        <a href="#">Gluten Free Pan Pizza</a>
                    </h1>
                    <p className="recipe-desc">
                        It really is possible to make excellent gluten free pizza at home in your
                        own oven with our recipes and techniques.
                    </p>
                </div>
            </article>
        </div>
    ),
    environmentProps: {
        windowWidth: 1315,
        windowHeight: 726,
    },
});
