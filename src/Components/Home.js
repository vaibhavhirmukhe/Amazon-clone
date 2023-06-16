import React from 'react'
import "../Style/Home.css"
import Footer from './Footer';
import Product from './Product'
import Slider from './Slider'

export default function Home() {

    const bannerImages = [
        'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg',

        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/XbizNewCreativejune22/2x-PC-GW-Hero._CB633993634_.jpg",

        'https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/GWUnrec/PFS/D39822856_WLA_BAU_GW-Unrec-heroes_DesktopTallHero_3000x1200._CB634361564_.jpg',
        
        'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/Headphones_Tallhero_3000x1200._CB634379300_.jpg',

        "https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Flight_PC_Hero_3000x1200_April._CB636945433_.jpg",

        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/July2022GW/New_FST_Icons/Federal/Shoes/shoes-3000x._CB632760683_.jpg",

        'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/jun22/eoss/fed/MA_3000._CB633421278_.jpg',

    ];

  return (
    <div className='home'>
        <div className="home_container">
            <Slider images={bannerImages}/>

            <div className="home_row">
                <Product
                id="1001" 
                title="OPPO F21 Pro (Cosmic Black, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers" 
                image="https://m.media-amazon.com/images/I/410UOtOGvsL._AC_SY200_.jpg" 
                price={22990} 
                rating={5}/>

                <Product
                id="1002" 
                title="boAt Rockerz 450 Bluetooth Wireless On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions and Dual Modes (Luscious Black)" 
                image="https://m.media-amazon.com/images/I/51xxA+6E+xL._SY450_.jpg" 
                price={1999} 
                rating={4}/>

                <Product
                id="1003" 
                title="LG Ultra-Gear 24 inches 1920 x 1080 Pixels 144Hz, Native 1ms Full HD LCD Gaming Monitor with Radeon Free-sync TN Panel with Display Port- 24GL650F(Black)" 
                image="https://m.media-amazon.com/images/I/71dxhg7mYWL._SX522_.jpg" 
                price={44990} 
                rating={5}/>
            </div>

            <div className="home_row">
                <Product
                id="2001" 
                title="Echo Dot (3rd Gen) - New and improved smart speaker with Alexa (Black)" 
                image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UL320_.jpg" 
                price={3999} 
                rating={4}/>

                <Product
                id="2002" 
                title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Charcoal Black)" 
                image="https://images-eu.ssl-images-amazon.com/images/I/41lQan54SPL._AC_SX184_.jpg" 
                price={4999} 
                rating={4}/>
            </div>

            <div className="home_row">
                <Product
                id="3001" 
                title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)" 
                image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX679_.jpg" 
                price={95000} 
                rating={5}/>

            </div>
                
            <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"  alt="error" className="home_ad" />

            <div className="home_row">
                <Product
                id="4001" 
                title="Centrino Men's Sneakers" 
                image="https://m.media-amazon.com/images/I/713Y4uvspWL._AC_UL320_.jpg" 
                price={949} 
                rating={4}/>

                <Product
                id="4002" 
                title="Sparx Men's Sd0323g Sneakers" 
                image="https://m.media-amazon.com/images/I/81iTstw4SkL._AC_UL320_.jpg" 
                price={799} 
                rating={3}/>


                <Product
                id="4003" 
                title="road runner Men's Sneaker Shoes" 
                image="https://m.media-amazon.com/images/I/51Km3sXirPL._AC_UL320_.jpg" 
                price={499} 
                rating={3}/>
            </div>

            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/June/Co-op/HP/Revised/lapnacc/1500x300px_01.jpg"  alt="error" className="laptop_ad" />

            <div className="home_row">
                <Product
                id="5001" 
                title="HP Pavilion 14 12th Gen Intel Core i5 16GB SDRAM/512GB SSD 14 inch(35.6cm) FHD,IPS,Micro-Edge Display/Intel..." 
                image="https://m.media-amazon.com/images/I/61sdH+DGGDL._AC_UL320_.jpg" 
                price={69900} 
                rating={5}/>

                <Product
                id="5002" 
                title="HP Pavilion Gaming 10th Gen Intel Core i5 15.6 (39.6cm) FHD IPS 144Hz (8GB/512GB SSD/Win 11/GeForce GTX 1650 4GB Graphics..."
                image="https://m.media-amazon.com/images/I/611VHOvjkES._AC_UL320_.jpg" 
                price={61090} 
                rating={5}/>


                <Product
                id="5003" 
                title="Hp 15S, 11Th Gen Intel Core I3, 8Gb Ram/512Gb Ssd 15 Inches (39.6 Cm) Fhd, Micro-Edge, Anti-Glare Display/Alexa Built-In/Windows 11 Home..." 
                image="https://m.media-amazon.com/images/I/81+GUrzccYL._AC_UL320_.jpg" 
                price={39650} 
                rating={4}/> 
            </div>

            <Footer/>

        </div>
    </div>
  )
}
