import React from 'react';
import AllImagesTab from '../allImagesTab';
import './style.css';

const Tab = (props) =>{

  //Function to listen scroll page and change between two type of menu
  window.addEventListener('scroll', function(){
    let header = document.querySelector('.tabContainer');
    let bottom = document.querySelector('.tabContainerBottom');
    header.classList.toggle('disabled', this.window.scrollY > 0);
    bottom.classList.toggle('disabled', this.window.scrollY === 0);
    
  });

  return(
    <>
      {/* top tab menu */}
      <div className="tabContainer flex">
        <div className={props.actived === "all" ? "tab actived" : "tab deactivated"}onClick={props.changeTabs}>All Images</div>
        <div className={props.actived === "bookmark" ? "tab actived" : "tab deactivated"} onClick={props.changeTabs}>Bookmarked</div>
      </div>

     {/* bottom tab menu */}
      <div className="tabContainerBottom flex disabled">
        <div className={props.actived === "all" ? "tab bottom actived" : "tab bottom deactivated"}onClick={props.changeTabs}>All Images</div>
        <div className={props.actived === "bookmark" ? "tab bottom actived" : "tab bottom deactivated"} onClick={props.changeTabs}>Bookmarked</div>
      </div>
    </>
  );
}

export default Tab;

