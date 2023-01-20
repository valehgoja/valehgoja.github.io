import React from "react";
import web1 from "../images/web1.jpg";
import web2 from "../images/web2.jpg";
import web3 from "../images/web3.jpg";
import web4 from "../images/web4.jpg";
import web5 from "../images/web7.jpg";
import web6 from "../images/web6.jpg";


const Services = () => {
  return (
    <div className="mainServicesDiv">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.css"
        integrity="sha512-KXol4x3sVoO+8ZsWPFI/r5KBVB/ssCGB5tsv2nVOKwLg33wTFP3fmnXa47FdSVIshVTgsYk/1734xSk9aFIa4A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="ui card">
        <div className="ui slide masked reveal image">
          <img src={web3} className="visible content" />
          <img src={web4} className="hidden content" />
        </div>
        <div className="content">
          <a className="header cardHeader">Responsive Website</a>
        </div>
      </div>

      <div className="ui card">
        <div className="ui slide masked reveal image">
          <img src={web1} className="visible content" />
          <img src={web5} className="hidden content" /> 
        </div>
        <div className="content">
          <a className="header cardHeader">Web Development</a>
        </div>
      </div>

      <div className="ui card">
        <div className="ui slide masked reveal image">
          <img src={web2} className="visible content" />
          <img src={web6} className="hidden content" />
        </div>
        <div className="content">
          <a className="header cardHeader">UI Design</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
