import React, { useState } from 'react';


function Buttons() {
  
  const listImg=[
    "",
    "https://www.elcato.org/sites/default/files/images/stories/el-principito.jpg",
    "https://steamuserimages-a.akamaihd.net/ugc/1460808097036933622/004E7D219B42C10DFDBE43837EAEB100476A7E98/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    "https://w0.peakpx.com/wallpaper/683/867/HD-wallpaper-zelda-and-link.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/738/126/desktop-wallpaper-tanjiro-x-nezuko-nezuko-thumbnail.jpg",
    "http://oyster.ignimgs.com/wordpress/stg.ign.com/2015/03/ori_030715_1600.jpg",
    
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