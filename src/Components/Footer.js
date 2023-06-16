import React from 'react'
import "../Style/Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer_nav">

            <div>
                <ul>
                    <li className='footer_heading'>Get to Know Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press Releases</li>
                    <li>Amazon Cares</li>
                    <li>Gift a Smile</li>
                    <li>Amazon Science</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='footer_heading'>Connect with Us</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='footer_heading'>Make Money with Us</li>
                    <li>Sell on Amazon</li>
                    <li>Sell under Amazon Accelerator</li>
                    <li>Amazon Global Selling</li>
                    <li>Become an Affiliate</li>
                    <li>Fulfilment by Amazon</li>
                    <li>Advertise Your Products</li>
                    <li>Amazon Pay on Merchants</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='footer_heading'>Let Us Help You</li>
                    <li>Covid-19 and Amazon</li>
                    <li>Your Account</li>
                    <li>Returns Center</li>
                    <li>100% Purchase Protection</li>
                    <li>Amazon App Download</li>
                    <li>Amazon Assistant Download</li>
                    <li>Help</li>
                </ul>
            </div>    
        </div>

        <div className="logo">
            <img  className="footer_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="error" />
        </div>

        <div className='Condition'>
            <ul>
                <li>Conditions of Use & Sale</li>
                <li>Privacy Notice</li>
                <li>Interest-Based Ads</li>
                <li>© 1996-2022, Amazon.com, Inc. or its affiliates</li>
            </ul>
        </div>
    </div>
  )
}
