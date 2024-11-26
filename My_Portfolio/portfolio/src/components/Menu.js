import React, { useState } from 'react'

function Menu() {
    const [displayImg, setDisplayImg] = useState("")
    const [showImageView, setShowImageView] = useState(false)

    const images = ["android1.jpg",
        "android2.jpg",
        "AWS.jpg",
        "SE1.jpg",
        "SE2.jpg",
        "IP1.jpg",
        "IP2.jpg",
        "IP3.jpg",
        "IP4.jpg"]


    function FullView(ImgLink) {
        setDisplayImg(ImgLink)
        setShowImageView(true)
        // document.getElementById("FullImage").src=ImgLink;
        // document.getElementById("FullImageView")?.style.display="flex";
    }
    function CloseFullView() {
        setShowImageView(false)
        // document.getElementById("FullImageView")?.style.display="none";
    }

  return (
    <div>
       <section class="Hero" id="home">
            <div class="Hero-left">
                <h3>Hello My Name is, <br/></h3>
                <h1>PRAJWAL</h1>

                <div class="footercontainer">
                    <div class="socialicons">
                        <a href=""><i class="fa fa-envelope"></i></a>
                        <a href="https://www.instagram.com/im_prajju_bangera/?locale=zh_CN"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/prajwal-m-p-15bb9b285/"><i class="fa-brands fa-linkedin"></i></a>
                  
                    </div>  
                </div>
                <div class="sub">
                    <h5><p>Iam a passionate front-end developer with expertise in HTML, CSS, and JavaScript. <br/>I love creating beautiful, responsive, and user-friendly websites.</p></h5>
                </div> 
            </div>

            <div class="Hero-right">
                <div class="outer-circle circle">
                    
                    <img class="imge" src="./me.webp" alt="My_Profile_Pic"/>
                </div>
            </div>
        </section>
        <section class="work" id="work">
            <h2>MY CERTIFICATE</h2>
           
            <div id="FullImageView" style={{display: showImageView ? "flex":"none"}}>
                <img src={displayImg || ""} id="FullImage"/>
                <span id="CloseButton" onClick={CloseFullView}>&times;</span>
            </div>
           
            <div class="certificate-list">
                {images.map((img,index)=>(
                <img key={index} src={img} onClick={()=>FullView(img)} />
                ))}
            </div>
</section>
        
    </div>
  )
}

export default Menu
