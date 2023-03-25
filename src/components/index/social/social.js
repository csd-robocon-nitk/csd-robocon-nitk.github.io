import React from 'react'
import './social.css'
import axios from 'axios';
import { useEffect,useRef } from 'react';

export default function SocialSection () {

let posts= useRef();
useEffect(()=>{
const apiUrl = "https://graph.instagram.com/me/media";
//console.log(process.env.REACT_APP_IG_KEY);
const accessToken = window.ig_token;
const params = new URLSearchParams({
  fields: "id,caption,media_type,media_url,thumbnail_url,permalink",
  access_token: accessToken,
});
    // console.log("inside useEffect");
    axios.get(apiUrl + "?" + params).then(response=>{
        posts.current = response.data.data;
    }).then(()=>{
        console.log(posts.current);
    }).catch(error => {
        console.log(error);
    });
},
[]
);



    return (
        <div id="social" className="light">
            <h1>VIDEOS</h1>
            <h2>A Glimpse into Our Work</h2>
            <div id="videos">
                <iframe src="https://www.youtube.com/embed/B3DctwOAsaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe src="https://www.youtube.com/embed/eEnqrpgW8jU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}