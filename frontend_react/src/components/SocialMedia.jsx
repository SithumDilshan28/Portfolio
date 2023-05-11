import React from "react";
import {
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsMedium,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/sithum-dilshan/">
        {" "}
        <BsLinkedin />{" "}
      </a>
    </div>
    <div>
      <a href="https://github.com/SithumDilshan28">
        {" "}
        <BsGithub />{" "}
      </a>
    </div>
    <div>
      <a href="https://medium.com/@shanukasithum28">
        {" "}
        <BsMedium />{" "}
      </a>
    </div>
    <div>
      <a href="https://twitter.com/ShanuZaggy">
        {" "}
        <BsTwitter />{" "}
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/shanuka.sithum.75/">
        {" "}
        <FaFacebookF />{" "}
      </a>
    </div>
    <div>
      <a href="https://www.youtube.com/channel/UCuD7Cj5b-kOC7iNBK1karEw">
        {" "}
        <BsYoutube />{" "}
      </a>
    </div>
  </div>
);

export default SocialMedia;
