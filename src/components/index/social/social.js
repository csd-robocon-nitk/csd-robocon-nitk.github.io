/*import React from 'react'
import './social.css'
import axios from 'axios';
import { useEffect,useState } from 'react';
import Post from './Post'

export default function SocialSection () {

const [ posts, setPosts ] = useState([]);

useEffect(() => {
    const apiUrl = "https://graph.instagram.com/me/media";
    const accessToken = window.ig_token
    const params = new URLSearchParams({
        fields: "id,caption,media_type,media_url,thumbnail_url,permalink",
        access_token: accessToken,
    })
        axios.get(apiUrl + "?" + params).then(response=>{
            setPosts(response.data.data)
        }).catch(error => {
            console.log(error);
        });
    },
    []
)



    return (
        <div id="social" className="light">
            <h1>VIDEOS</h1>
            <h2>A Glimpse into Our Work</h2>
            <div id="videos">
                <iframe src="https://www.youtube.com/embed/B3DctwOAsaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe src="https://www.youtube.com/embed/eEnqrpgW8jU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
            <br/><br/><br/>

            <h1>SOCIAL</h1>
            <h2>Keep up with our Updates</h2>
            <div id="instagram">
                {
                    posts.map(post => post.media_type == "IMAGE" ? <Post details={post} /> : null)
                }
            </div>
        </div>
    )
}*/

/*import React from 'react';
import './social.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from './Post';

export default function SocialSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://graph.instagram.com/me/media';
    const accessToken = window.ig_token;
    const params = new URLSearchParams({
      fields:
        'id,caption,media_type,media_url,thumbnail_url,permalink,children',
      access_token: accessToken,
    });
    axios
      .get(apiUrl + '?' + params)
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="social" className="light">
      <h1>VIDEOS</h1>
      <h2>A Glimpse into Our Work</h2>
      <div id="videos">
        <iframe
          src="https://www.youtube.com/embed/B3DctwOAsaM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/eEnqrpgW8jU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <br />
      <br />
      <br />

      <h1>SOCIAL</h1>
      <h2>Keep up with our Updates</h2>
      <div id="instagram">
        {posts.map((post) =>
          post.media_type === 'IMAGE' ? (
            <Post details={post} />
          ) : post.media_type === 'CAROUSEL_ALBUM' ? (
            post.children.data.map((child) => <Post details={child} />)
          ) : post.media_type === 'VIDEO' ? (
            <video src={post.media_url} controls />
          ) : null
        )}
      </div>
    </div>
  );
}*/

import React from 'react';
import './social.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from './Post';

export default function SocialSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://graph.instagram.com/me/media';
    const accessToken = window.ig_token;
    const params = new URLSearchParams({
      fields:
        'id,caption,media_type,media_url,thumbnail_url,permalink,children',
      access_token: accessToken,
    });
    axios
      .get(apiUrl + '?' + params)
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="social" className="light">
      <h1>VIDEOS</h1>
      <h2>A Glimpse into Our Work</h2>
      <div id="videos">
        <iframe
          src="https://www.youtube.com/embed/B3DctwOAsaM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/eEnqrpgW8jU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <br />
      <br />
      <br />

      <h1>SOCIAL</h1>
      <h2>Keep up with our Updates</h2>
      <div id="instagram">
        {posts.map((post) =>
          post.media_type === 'IMAGE' ? (
            <Post details={post} key={post.id} />
          ) : post.media_type === 'CAROUSEL_ALBUM' ? (
            post.children.data.map((child) => (
              <Post details={child} key={child.id} />
            ))
          ) : post.media_type === 'VIDEO' ? (
            <video src={post.media_url} controls key={post.id} />
          ) : null
        )}
      </div>
    </div>
  );
}