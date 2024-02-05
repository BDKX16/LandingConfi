import React from 'react'
import MobileImage from "../assets/screenCaptureMobileApp.png"
import MobileImage2 from "../assets/screenCaptureMobileApp2.png"
import MobileImage3 from "../assets/screenCaptureMobileApp3.jpg"
import MobileImage4 from "../assets/screenCaptureMobileApp4.jpg"

const Card = ({index,isPrev,isNext,isSelected,isPrevValue}) => {
  console.log(isNext)
  let imageLink;
  if(index===0){
    imageLink=MobileImage
  } else if(index===1){ 
    imageLink=MobileImage2
  } else if(index===2){
    imageLink=MobileImage3
  } else {
    imageLink=MobileImage4
  }  
  return (
    <a className={'mobile-image-showup ' + (isNext?" sendBack":"")+(isPrev?" sendBackRigth":"")} style={{cursor:"pointer",opacity:(isSelected||isPrevValue)?1:0,zIndex:isSelected?3:2}}>
              <img src={imageLink} alt={"Confi Plant App nro "+index}></img>
    </a>
  )
}

export default Card