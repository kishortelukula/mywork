import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './FCR_Header.css';
import axios from "axios";

export default function FCRHeader({ reviewId }) {
    const [headerDetails, setHeaderDetails] = useState([]);

    useEffect(() => {
        getHeaderData();
    }, [reviewId]); // Dependency array to fetch data when reviewId changes

    const getHeaderData = async () => {
        if (reviewId) {
            try {
                const response = await axios.get('http://10.0.0.24:8088/fcr/fetchByReviewId', {
                    params: { reviewId }
                });
                console.log("Header Details :", response.data);
                setHeaderDetails(response.data);
            } catch (error) {
                console.log("Header Details failed:", error);
            }
        }
    };

    return (
        <div className="HeaderPanel">
            <div className="HeaderName">
                <h3>Case Details</h3>
            </div>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <h5>
                        <span>Review Id :</span> {reviewId}
                    </h5>
                </Grid>
                <Grid item xs={3}>
                    <h5>
                        <span>Group Name :</span> {headerDetails[0]?.portfolio || 'N/A'}
                    </h5>
                </Grid>
                <Grid item xs={3}>
                    <h5>
                        <span>Division :</span> {headerDetails[0]?.division || 'N/A'}
                    </h5>
                </Grid>
                <Grid item xs={3}>
                    <h5>
                        <span>FCR initiator :</span> {headerDetails[0]?.initiator || 'N/A'}
                    </h5>
                </Grid>
            </Grid>
        </div>
    );
}
