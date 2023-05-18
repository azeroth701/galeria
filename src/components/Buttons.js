import React, { useState } from 'react';


function Buttons() {
  
  const listImg=[
    "https://i.pinimg.com/originals/a4/e8/5a/a4e85aada79e7f2e901a7eec69de2cc8.jpg",
    "https://www.elcato.org/sites/default/files/images/stories/el-principito.jpg",
    "https://steamuserimages-a.akamaihd.net/ugc/1460808097036933622/004E7D219B42C10DFDBE43837EAEB100476A7E98/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    "https://w0.peakpx.com/wallpaper/683/867/HD-wallpaper-zelda-and-link.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/738/126/desktop-wallpaper-tanjiro-x-nezuko-nezuko-thumbnail.jpg",
    "http://oyster.ignimgs.com/wordpress/stg.ign.com/2015/03/ori_030715_1600.jpg",
    "https://i0.wp.com/gamelx.es/wp-content/uploads/2021/01/thumb-1920-121645.jpg?resize=1024%2C640&ssl=1",
    "https://e1.pxfuel.com/desktop-wallpaper/88/715/desktop-wallpaper-cloud-strife-and-tifa-lockhart-final-fantasy-cloud-tifa.jpg",
    "https://media.nichegamer.com/wp-content/uploads/2021/07/monster-hunter-stories-2-wings-of-ruin-7-10-2021-1.jpg",
    "https://wallpaperaccess.com/full/3300037.png",
    "https://e1.pxfuel.com/desktop-wallpaper/880/301/desktop-wallpaper-100-gochi-trending-gochi.jpg",

    
  ]

  
  const [src, setSrc] = useState(
          listImg[0]

          
        );
 
  const handleButtonClick = () => {
   const index=listImg.findIndex((element)=>element == src)
    setSrc(listImg[index + 1]);
  };

  return (
    <div>
      <button className="h-16 w-32 border-4 border-black m-32 justify-center " onClick={handleButtonClick}>Next</button>
    <img src={src} alt=""></img>
    </div>

  );
}

export default Buttons;