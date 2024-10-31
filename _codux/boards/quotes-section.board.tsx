import './quotes-section.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'QuotesSection',
    Board: () => (
        <div className="quotesSection">
            <h2 className="quotesSectionTitle">What our customers say</h2>
            <div className="quotesCardsContainer">
                <div className="quoteCard">
                    <div className="quotePerson">
                        <img
                            src="https://static.wixstatic.com/media/11062b_2f4734e9d65b4847925a2a44148fe382~mv2.jpg/v1/fill/w_1620,h_1080,fp_0.49_0.48,q_85,usm_0.66_1.00_0.01,enc_pavif,quality_auto/Portrait%20with%20Beanie.jpg"
                            alt=""
                            className="customerImage"
                        />
                        <div className="customerDetails">
                            <p className="customerName">John Johnny</p>
                            <p className="customerTitle">Product Manager, Startup</p>
                        </div>
                    </div>
                    <div className="quoteRating">
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                    </div>
                    <p className="quoteText">
                        &quot;I&apos;ve been using it for 3 years already! It changed the way I work
                        and I can only recommend it! and this is just a little longer text&quot;
                    </p>
                </div>
                <div className="quoteCard">
                    <div className="quotePerson">
                        <img
                            src="https://static.wixstatic.com/media/9f02946fed104b4890d595af25220904.jpg/v1/fill/w_1620,h_1080,fp_0.49_0.33,q_85,usm_0.66_1.00_0.01,enc_pavif,quality_auto/Smiling%20Girl.jpg"
                            alt=""
                            className="customerImage"
                        />
                        <div className="customerDetails">
                            <p className="customerName">Jaine Jenna</p>
                            <p className="customerTitle">Customer Success, Startup</p>
                        </div>
                    </div>
                    <div className="quoteRating">
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                    </div>
                    <p className="quoteText">
                        &quot;We can&apos;t imagine a better thing than this! A true lifesaver&quot;
                    </p>
                </div>
                <div className="quoteCard">
                    <div className="quotePerson">
                        <img
                            src="https://static.wixstatic.com/media/11062b_2f4734e9d65b4847925a2a44148fe382~mv2.jpg/v1/fill/w_1620,h_1080,fp_0.49_0.48,q_85,usm_0.66_1.00_0.01,enc_pavif,quality_auto/Portrait%20with%20Beanie.jpg"
                            alt=""
                            className="customerImage"
                        />
                        <div className="customerDetails">
                            <p className="customerName">John Johnny</p>
                            <p className="customerTitle">Product Manager, Startup</p>
                        </div>
                    </div>
                    <div className="quoteRating">
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                    </div>
                    <p className="quoteText">
                        &quot;I&apos;ve been using it for 3 years already! It changed the way I work
                        and I can only recommend it! and this is just a little longer text&quot;
                    </p>
                </div>
                <div className="quoteCard">
                    <div className="quotePerson">
                        <img
                            src="https://static.wixstatic.com/media/9f02946fed104b4890d595af25220904.jpg/v1/fill/w_1620,h_1080,fp_0.49_0.33,q_85,usm_0.66_1.00_0.01,enc_pavif,quality_auto/Smiling%20Girl.jpg"
                            alt=""
                            className="customerImage"
                        />
                        <div className="customerDetails">
                            <p className="customerName">Jaine Jenna</p>
                            <p className="customerTitle">Customer Success, Startup</p>
                        </div>
                    </div>
                    <div className="quoteRating">
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                    </div>
                    <p className="quoteText">
                        &quot;We can&apos;t imagine a better thing than this! A true lifesaver&quot;
                    </p>
                </div>
                <div className="quoteCard">
                    <div className="quotePerson">
                        <img
                            src="https://static.wixstatic.com/media/11062b_2f4734e9d65b4847925a2a44148fe382~mv2.jpg/v1/fill/w_1620,h_1080,fp_0.49_0.48,q_85,usm_0.66_1.00_0.01,enc_pavif,quality_auto/Portrait%20with%20Beanie.jpg"
                            alt=""
                            className="customerImage"
                        />
                        <div className="customerDetails">
                            <p className="customerName">John Johnny</p>
                            <p className="customerTitle">Product Manager, Startup</p>
                        </div>
                    </div>
                    <div className="quoteRating">
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                    </div>
                    <p className="quoteText">
                        &quot;I&apos;ve been using it for 3 years already! It changed the way I work
                        and I can only recommend it! and this is just a little longer text&quot;
                    </p>
                </div>
                <div className="quoteCard">
                    <div className="quotePerson">
                        <img
                            src="https://static.wixstatic.com/media/9f02946fed104b4890d595af25220904.jpg/v1/fill/w_1620,h_1080,fp_0.49_0.33,q_85,usm_0.66_1.00_0.01,enc_pavif,quality_auto/Smiling%20Girl.jpg"
                            alt=""
                            className="customerImage"
                        />
                        <div className="customerDetails">
                            <p className="customerName">Jaine Jenna</p>
                            <p className="customerTitle">Customer Success, Startup</p>
                        </div>
                    </div>
                    <div className="quoteRating">
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                        <img
                            src="https://static.wixstatic.com/media/27eba2_94cc08057c4a418cb015d71e8787618a~mv2.png"
                            alt=""
                            className="ratingStarIcon"
                        />
                    </div>
                    <p className="quoteText">
                        &quot;We can&apos;t imagine a better thing than this! A true lifesaver&quot;
                    </p>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1291,
        windowHeight: 892,
    },
});
