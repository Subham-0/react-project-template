import React from 'react'
import vg from "../assets/2.webp"
import {
    AiFillGoogleCircle, AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
}
    from "react-icons/ai"
const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>SloutionGroup</h1>
                    <p>Solution for all your problem</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Grapics" />
                <div>
                    <p>
                        We are your one and only solution to texh problems you face
                        every day . We are leading tech company whose aim is to increase the
                        problem solving ability in children.


                    </p>
                </div>

            </div>
            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad dicta quisquam dolorem assumenda expedita mollitia ipsam, voluptate quibusdam eius itaque enim et tempore laborum impedit explicabo, architecto libero amet. Cupiditate, accusamus veniam praesentium nisi maxime vel soluta corporis labore et quod cum repudiandae distinctio illum fugiat eveniet ab animi dolorum rerum. Dolor fuga minima eius illum quidem repudiandae nisi ducimus minus officiis, quam vitae enim corrupti quisquam? Laudantium odit exercitationem mollitia iusto enim, pariatur quos perspiciatis quo velit adipisci, excepturi aliquid possimus sunt culpa optio doloremque beatae blanditiis nihil asperiores cupiditate iste voluptate consequuntur hic esse. Atque amet sequi sint tenetur voluptas animi. Dicta libero maiores nemo ex sint modi enim dolor quis vero! Provident culpa magni at nostrum neque doloribus consequuntur nisi. Praesentium officiis ex et, aperiam omnis animi dolorem? Tempora dicta omnis non voluptatem nesciunt expedita facere officiis. Perspiciatis odio nulla modi iste architecto harum sed eum labore quibusdam perferendis? Sunt esse adipisci quidem placeat animi accusamus commodi ea reprehenderit at a aspernatur, incidunt minima hic voluptatem sint soluta. Culpa magnam quibusdam totam sunt minima, quod dolore excepturi odio.

                    </p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={
                            {
                                animationDelay: "0.3s"
                            }
                        }>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={
                            {
                                animationDelay: "0.5s"
                            }
                        }>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={
                            {
                                animationDelay: "0.7s"
                            }
                        }>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={
                            {
                                animationDelay: "0.9s"
                            }
                        }>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>

                    </article>
                </div>
            </div>
        </>
    )
}

export default Home