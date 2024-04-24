import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Home.css'; // Assuming you have your custom CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faSmile, faUpload } from '@fortawesome/free-solid-svg-icons';
import Plot from 'react-plotly.js';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import TextEditor from './TextEditor';
import HTMLReactParser from "html-react-parser";
import JoditEditor from "jodit-react";





function Home() {
    const [selectedTab, setSelectedTab] = useState('tab-1'); // Initialize the state with the ID of the initially selected tab
    const [selectedPostsTab, setSelectedPostTab] = useState('tabPost-1');
    const [isEmojiVisible, setEmojiVisible] = useState(false);
    const [getEmoji, setEmoji] = useState('');

    const handleTabChange = (event) => {
        setSelectedTab(event.target.id);
        console.log("main tab")
    };
    const handlePostsTabChange = (event) => {
        setSelectedPostTab(event.target.id);
        console.log("sub tab")
    };



    const [nearestDate, setNearestDate] = useState(null);

    useEffect(() => {
        // Function to get the nearest date and accompanying text from the list
        function getNearestDate(dateList) {
            // Get the current date
            const currentDate = new Date();

            // Convert the NodeList to an array and map over it
            const datesArray = Array.from(dateList);

            // Convert the dates in the array to Date objects and calculate the differences
            const dateDifferences = datesArray.map(item => {
                const itemDate = new Date(item.getAttribute('dateTime'));
                const difference = Math.abs(currentDate - itemDate);
                const text = item.nextSibling.textContent.trim(); // Get the text after the <time> element
                return { date: itemDate, difference, text };
            });

            // Sort the dates by difference in milliseconds
            dateDifferences.sort((a, b) => a.difference - b.difference);

            // Return the nearest date and accompanying text
            return dateDifferences[0];
        }

        // Fetch the list of date elements
        const dateList = document.querySelectorAll('time');

        // Set the nearest date state
        setNearestDate(getNearestDate(dateList));
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    const options = {
        weekday: 'short', // Short name of the day (e.g., Fri)
        day: '2-digit', // Two-digit day (e.g., 12)
        month: 'short', // Short name of the month (e.g., Apr)
        year: 'numeric' // Full year (e.g., 2024)
    };

    // State to hold the current time
    const [currentTime, setCurrentTime] = useState('');

    // Function to update the current time
    const updateTime = () => {
        const timeOptions = {
            hour: '2-digit', // Two-digit hour (e.g., 12)
            minute: '2-digit', // Two-digit minute (e.g., 05)
            second: '2-digit' // Two-digit second (e.g., 30)
        };
        setCurrentTime(new Date().toLocaleTimeString(undefined, timeOptions));
    };

    // Update the time initially and then every second
    useEffect(() => {
        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const [selectedImage, setSelectedImage] = useState();

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };

    const editor = useRef(null);
    const [content, setContent] = useState("");



    //   const [posterData,setPosterData]=useState({});
    const [posterDataList, setPosterDataList] = useState([]);

    useEffect(() => {
        console.log("posterData", posterDataList);
    }, [posterDataList]); // Log posterData whenever it changes

    const postPoster = () => {
        // var postercontaint = document.getElementById('poserDesc').value;
        var postercontaint = HTMLReactParser(content)
        var posterImage = selectedImage;
        // setPosterData({
        //     postercontaint: postercontaint,
        //     posterImage: posterImage
        //   });
        if (posterImage != undefined && postercontaint != "") {
            const newPosterData = {
                postercontaint: postercontaint,
                posterImage: posterImage
            };


            setPosterDataList([...posterDataList, newPosterData]);
            console.log("setPosterData", setPosterDataList)
        }
        else {

            alert("please enter details")
        }


    };


    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 50,
        },
        preview: {
            marginTop: 50,
            display: "flex",
            flexDirection: "column",
        },
        image: { maxWidth: "100%", maxHeight: 320 },
        delete: {
            cursor: "pointer",
            padding: 15,
            background: "red",
            color: "white",
            border: "none",
        },
    };




    return (
        <div className="tabs">
            <input
                className="input"
                name="tabs"
                type="radio"
                id="tab-1"
                checked={selectedTab === 'tab-1'}
                onChange={handleTabChange}
            />
            <label className="label" htmlFor="tab-1">
                DASH BOARD
            </label>
            <div className="panel">

                <h5 style={{ textAlign: "left" }}>Qick Access <span className='float-end'>Notification</span></h5>
                <div className='qickAccess'>


                    <div className='indexNotification shadow'>
                        <p>Index</p>
                    </div>
                    <div className='holidayNotification shadow'>
                        <p>Holidays</p>


                        <div className="section full-height">
                            <input className="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" />
                            <label htmlFor="modal-btn">View All
                                {/* <FontAwesomeIcon icon={faMaximize}/> */}
                            </label>

                            <div className="modal">
                                <div className="modal-wrap">

                                    {/* <!-- days sourced from: https://nationaldaycalendar.com/february/ --> */}
                                    <h1>Year 2024</h1>
                                    <p>Holidays and Daily Observances in the United States</p>
                                    <ul>
                                        <li><time dateTime="2024-04-14">1</time>Dark Chocolate Day</li>
                                        <li><time dateTime="2024-04-12">2</time>Groundhog Day</li>
                                        <li><time dateTime="2024-04-13">3</time>Carrot Cake Day</li>
                                        <li><time dateTime="2024-04-14">4</time>Wear Red Day</li>
                                        <li><time dateTime="2024-04-05">5</time>Weatherperson's Day</li>
                                        <li><time dateTime="2024-04-06">6</time>Chopsticks Day</li>
                                        <li><time dateTime="2024-04-07">7</time>Periodic Table Day</li>
                                        <li><time dateTime="2024-04-08">8</time>Kite Flying Day</li>
                                        <li><time dateTime="2024-04-09">9</time>Pizza Day</li>
                                        <li><time dateTime="2024-04-1">10</time>Umbrella Day</li>

                                    </ul>


                                    {/* <img src="https://assets.codepen.io/1462889/sl3.jpg" alt=""/>	
	      		<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>	          		 */}
                                </div>
                            </div>


                        </div>
                        <div className='holidayContaint'>

                            <h5>Up Coming Holiday</h5>
                            {nearestDate && nearestDate.date ? (
                                <>

                                    <h4>{nearestDate.text}</h4>
                                    <h6>{nearestDate.date.toLocaleDateString()}</h6>

                                </>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>

                    </div>
                    <div className='leaveNotification shadow'>
                        <p>On Leave Today</p>
                        <div className='leaveContaint'>
                            <div className="centered">
                                <a href="">
                                    <div className="badge-wrap">
                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                                        <div className="badge-without-number"></div>
                                        <br /><p>name</p>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="badge-wrap">
                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />

                                        <div className="badge-without-number" >
                                            <span className="badge " style={{ color: "black", fontSize: "17px" }}>4</span>
                                        </div>
                                        <br /><p>More</p>
                                    </div>
                                </a>

                            </div>
                        </div>

                    </div>
                    <div className='WFHNotification shadow'>
                        <p>Working Remotely</p>
                        <div className='leaveContaint'>
                            <div className="centered">
                                <a href="">
                                    <div className="badge-wrap">
                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                                        <div className="badge-without-number-WFH with-wave"></div>
                                        <br /><p>name</p>
                                    </div>
                                </a>
                            </div>
                        </div>


                    </div>
                    <div className='TimeNotification shadow'>
                        <p>Time Today : {new Date().toLocaleDateString(undefined, options)}</p>
                        <div className='leaveContaint'>
                            <div>
                                <p>Current Time </p><br />
                                <h6>{currentTime}</h6>
                            </div>

                        </div>
                    </div>
                    <div className='LeaveBalanceNotification shadow'>
                        <p>Leave Balances</p>
                        <div className='leaveContaint'>
                            <h2>00</h2>
                        </div>
                    </div>
                </div>
                <div className='homeNotifications'>
                    {/* <h1>notification</h1> */}

                    <div className='postBar'>

                        <div className="postTabs">
                            <input
                                className="input"
                                name="tabPost"
                                type="radio"
                                id="tabPost-1"
                                checked={selectedPostsTab === 'tabPost-1'}
                                onChange={handlePostsTabChange}
                            />
                            <label className="label" htmlFor="tabPost-1">
                                Post
                            </label>

                            {/* image */}
                            <div className="panel">

                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    onChange={(newContent) => setContent(newContent)}
                                />


                                <div>
                                    {selectedImage && (
                                        <div style={styles.preview}>
                                            <img
                                                src={URL.createObjectURL(selectedImage)}
                                                style={styles.image}
                                                alt="Thumb"
                                            />
                                            <button onClick={removeSelectedImage} style={styles.delete}>
                                                Remove This Image
                                            </button>
                                        </div>
                                    )}

                                </div>


                                <hr />
                                <div style={{ textAlign: "left", width: "100%" }}>
                                    <FontAwesomeIcon icon={faSmile} onClick={() => setEmojiVisible(!isEmojiVisible)} />
                                    <div className={isEmojiVisible ? 'd-block' : 'd-none'}>
                                        <Picker
                                            set='apple'
                                            data={data}
                                            previewPosition='none'
                                            onEmojiSelect={(emoji) => {
                                                setEmoji(emoji.native);
                                                setEmojiVisible(!isEmojiVisible);
                                                console.log(getEmoji)
                                            }}
                                        />

                                    </div>

                                    <div className="wrapper">
                                        <div className="file-upload">
                                            <input type="file" onChange={imageChange} />
                                            <FontAwesomeIcon icon={faUpload} />
                                        </div>
                                    </div>

                                    <FontAwesomeIcon icon={faAt} />


                                </div>
                                <hr />
                                <div >
                                    <button type="button" className="postBtn btn btn-outline-primary" onClick={postPoster}>Post</button>
                                    <button type="button" className="postBtn btn btn-outline-warning">Clear</button>
                                </div>
                            </div>

                            <input
                                className="input"
                                name="tabPost"
                                type="radio"
                                id="tabPost-2"
                                checked={selectedPostsTab === 'tabPost-2'}
                                onChange={handlePostsTabChange}
                            />
                            <label className="label" htmlFor="tabPost-2">
                                Announcement
                            </label>
                            <div className="panel">
                               <input type="text" placeholder='Enter Title' style={{width:"100%",border:"aliceblue",height:"50px"}} />
                               <hr />
                               <textarea name="" id="" placeholder='Enter Description' style={{width:"100%",border:"aliceblue",minHeight:"100px"}}></textarea>
                                <hr />
                                <div >
                                    <button type="button" className="postBtn btn btn-outline-primary" >Post</button>
                                    <button type="button" className="postBtn btn btn-outline-warning">Clear</button>
                                </div>
                           
                            </div>


                            <input
                                className="input"
                                name="tabPost"
                                type="radio"
                                id="tabPost-3"
                                checked={selectedPostsTab === 'tabPost-3'}
                                onChange={handlePostsTabChange}
                            />
                            <label className="label" htmlFor="tabPost-3">
                                Poll
                            </label>
                            <div className="panel">
                                <h1>hi</h1>
                            </div>


                            <input
                                className="input"
                                name="tabPost"
                                type="radio"
                                id="tabPost-4"
                                checked={selectedPostsTab === 'tabPost-4'}
                                onChange={handlePostsTabChange}
                            />
                            <label className="label" htmlFor="tabPost-4">
                                Praise
                            </label>
                            <div className="panel">
                                <h1>Praise</h1>
                            </div>


                        </div>


                    </div>
                    <div>
                        {/* <h2>Poster Data List:</h2> */}
                        {posterDataList.length > 0 && (
                            posterDataList.map((posterData, index) => (
                                <div key={index} className='posterSection'>
                                    <h5>{posterData.postercontaint}</h5>
                                    {posterData.posterImage && (
                                        <img src={URL.createObjectURL(posterData.posterImage)} style={{ maxWidth: "100%" }} />
                                    )}
                                </div>
                            ))
                        )}

                    </div>


                </div>
            </div>
            <input
                className="input"
                name="tabs"
                type="radio"
                id="tab-2"
                checked={selectedTab === 'tab-2'}
                onChange={handleTabChange}
            />
            <label className="label" htmlFor="tab-2">
                WELCOME
            </label>
            <div className="panel">
                <TextEditor />
                <h1>Idntheme</h1>
                <p>Idntheme (Citrus tangerina) is an orange-colored citrus fruit that is closely related to, or possibly a type of, mandarin orange (Citrus reticulata).</p>
                <p>The name was first used for fruit coming from Tangier, Morocco, described as a mandarin variety. Under the Tanaka classNameification system, Citrus tangerina is considered a separate species.</p>
            </div>

        </div>
    );
}

export default Home;
