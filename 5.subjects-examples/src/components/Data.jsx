/*
import Televizyon from "./images/TV.jpg"
import SamsungS24 from "./images/samsungs24.jpg"
import Tablet from "./images/tablet.jpg"
import Casper from "./images/casper.jpg"
import Klavye from "./images/klavye.jpg"
import PS5 from "./images/PS5.jpg"
import Elektronik from "./images/elektronik.png"
import Bilgisayar from "./images/bilgisayar.png"
import Telefon from "./images/Telefon.png"
import Evgerecleri from "./images/Evgerecleri.png"
*/

export const categories =[
   {id:1, name:"Elektronik", image:"/images/elektronik.png"},
   {id:2, name:"Bilgisayar", image:"/images/bilgisayar.png"},
   {id:3, name:"Ev aletleri", image:"/images/evgerecleri.png"},
   {id:4, name:"Telefon", image:"/images/telefon.png"}
]

export const items =[
    {
       id:1, 
        name:"UHD Televizyon",
         title:"60 inch UHD 4K Android TV",
          description:"lorem ipsum dolor sit amet",
           price:20000,
            images:["/images/TV.jpg", "/images/TV1.jpg", "/images/TV2.jpg", "/images/TV3.jpg"],
             categoryId:1
        },
    {
       id:2,  
        name:"Samsung S24 Ultra",
         title:"40mp front CAM 1920x1080 OLED Ekran telefon",
          description:"lorem ipsum dolor sit amet",
           price:30000,
            images:["/images/samsungs24.jpg", "/images/samsungs24-1.jpg", "/images/samsungs24-2.jpg", "/images/samsungs24-3.jpg"],
             categoryId:4
         },
            
    {
       id:3, 
        name:"Samsung Galaxy tablet",
         title:"Samsung Galaxy Tab S9 FE Plus SM-X610 128 GB",
          description:"lorem ipsum dolor sit amet",
           price:10000,
           images:["/images/tablet.jpg", "/images/tablet1.jpg", "/images/tablet2.jpg", "/images/tablet3.jpg"],
            categoryId:1,
        },
    {
       id:4,  
        name:"Casper Excalibur",
         title:"i7 12.nesil, 20 inch CASPER bilgisayar",
          description:"lorem ipsum dolor sit amet",
           price:25000,
            images:["/images/casper.jpg", "/images/casper1.jpg", "/images/casper2.jpg", "/images/casper3.jpg"],
             categoryId:2,
        },
    {
       id:5, 
        name:"LED Klavye",
         title:"RGB Wireless/Bluetooth/Kablolu ",
          description:"lorem ipsum dolor sit amet",
           price:2999,
            images:["/images/klavye.jpg", "/images/klavye1.jpg", "/images/klavye2.jpg", "/images/klavye3.jpg"],
             categoryId:1,
        },

    {
       id:6, 
        name:"Tefal Ütü",
         title:"Tefal Calc Filter Ütü",
          description:"lorem ipsum dolor sit amet",
           price:10000,
            images:["/images/utu.jpg", "/images/utu1.jpg", "/images/utu2.jpg", "/images/utu3.jpg"],
             categoryId:3,
              
            
         },
   {
       id:7, 
        name:"Dyson",
         title:"Dyson V12 Detect Slim Absolute Kablosuz Süpürge",
          description:"lorem ipsum dolor sit amet",
           price:25999,
            images:["/images/dyson.jpg", "/images/dyson1.jpg", "/images/dyson2.jpg", "/images/dyson3.jpg"],
             categoryId:3,
            
         },
   {
       id:8, 
        name:"PS5",
         title:"Sony PS5 Slim Digital Edition 1 TB SSD PlayStation",
          description:"lorem ipsum dolor sit amet",
           price:25999,
            images:["/images/PS5.jpg", "/images/PS5-1.jpg", "/images/PS5-2.jpg"],
             categoryId:1,
            
         },
   
   {
       id:9, 
        name:"Tefal Tencere",
         title:"Tefal Ceramic Renew Tencere",
          description:"lorem ipsum dolor sit amet",
           price:3499,
            images:["/images/TencereSeti.jpg", "/images/TencereSeti1.jpg", "/images/TencereSeti2.jpg", "/images/TencereSeti3.jpg"],
             categoryId:3,
            
         },
   
   {
       id:10, 
        name:"Airfryer",
         title:"SSDPhilips Airfryer Avance Collection Sıcak Hava Fritözü",
          description:"lorem ipsum dolor sit amet",
           price:3500,
            images:["/images/airfryer.jpg", "/images/airfryer1.jpg", "/images/airfryer2.jpg"],
             categoryId:3,
            
         },

   {
       id:11, 
        name:"Saç Kurutma Makinesi",
         title:"Philips BHD350/06 Thermoprotect Saç Kurutma Makinesi",
          description:"lorem ipsum dolor sit amet",
           price:999,
            images:["/images/sackurutma.jpg", "/images/sackurutma1.jpg", "/images/sackurutma2.jpg", "/images/sackurutma3.jpg"],
             categoryId:3,
            
         },

   {
       id:12, 
        name:"Mutfak Robotu",
         title:"Karaca Prosteel 7 in 1 Süt Köpürtücülü Mutfak Robotu 1000 W Soft Cream",
          description:"lorem ipsum dolor sit amet",
           price:4999,
            images:["/images/karaca.jpg", "/images/karaca1.jpg", "/images/karaca2.jpg", "/images/karaca3.jpg"],
             categoryId:3,
            
         },

   {
       id:13, 
        name:"Saç Düzleştirici",
         title:"Babyliss ST089E Ceramic Straight 230 Saç Düzleştirici",
          description:"lorem ipsum dolor sit amet",
           price:1999,
            images:["/images/sacduz.jpg", "/images/sacduz1.jpg", "/images/sacduz2.jpg", "/images/sacduz3.jpg"],
             categoryId:3,
            
         },

   {
       id:14, 
        name:"DELL Monitor",
         title:"Dell 26 inch 4K Ultra HD",
          description:"lorem ipsum dolor sit amet",
           price:35000,
            images:["/images/Dell.jpg", "/images/Dell1.jpg", "/images/Dell2.jpg", "/images/Dell3.jpg"],
             categoryId:1,
            
         },

   {
       id:15, 
        name:"ASUS Vivobook",
         title:"ASUS intel core i7 4 çekirdek Bilgisayar",
          description:"lorem ipsum dolor sit amet",
           price:28000,
            images:["/images/asus.jpg", "/images/asus1.jpg", "/images/asus2.jpg", "/images/asus3.jpg","/images/asus4.jpg"],
             categoryId:2,
            
         },

   {
       id:16, 
        name:"Logitech Mouse",
         title:"Logitech 910-004287 Kablosuz Mouse (Siyah)",
          description:"lorem ipsum dolor sit amet",
           price:1999,
            images:["/images/Logitech.jpg", "/images/Logitech1.jpg", "/images/Logitech2.jpg", "/images/Logitech3.jpg"],
             categoryId:1,
            
         },

   {
       id:17, 
        name:"MAC Air",
         title:"Apple Macbook Air MGN63TU/A M1 8C 8GB Bilgisayar",
          description:"lorem ipsum dolor sit amet",
           price:45000,
            images:["/images/macpro.jpg", "/images/macpro1.jpg", "/images/macpro2.jpg", "/images/macpro3.jpg"],
             categoryId:2,
            
         },

   {
       id:18, 
        name:"Monster Notebook",
         title:"Monster Abra A7 V15.3.1 Intel Core i5 13500H 16 GB RAM Bilgisayar",
          description:"lorem ipsum dolor sit amet",
           price:38000,
            images:["/images/monster.jpg", "/images/monster1.jpg", "/images/monster2.jpg", "/images/monster3.jpg", "/images/monster4.jpg"],
             categoryId:2,
            
         },

   {
       id:19, 
        name:"Honor tablet",
         title:"Honor Tab S9 12GB 256GB Blue Tablet H-X710",
          description:"lorem ipsum dolor sit amet",
           price:27000,
            images:["/images/honor.jpg", "/images/honor1.jpg", "/images/honor2.jpg", "/images/honor3.jpg"],
             categoryId:1,
            
         },

   {
       id:20, 
        name:"APPLE Ipad",
         title:"8 inch 256 GB Akıllı tablet",
          description:"lorem ipsum dolor sit amet",
           price:1999,
            images:["/images/ipad.jpg", "/images/ipad1.jpg", "/images/ipad2.jpg", "/images/ipad3.jpg"],
             categoryId:1,
            
         },

   {
       id:21, 
        name:"SAMSUNG Monitor",
         title:"Samsung Essential S3 22 inch FHD IPS 100HZ Siyah Monitör",
          description:"lorem ipsum dolor sit amet",
           price:3500,
            images:["/images/samsungmonitor.jpg", "/images/samsungmonitor1.jpg", "/images/samsungmonitor2.jpg", "/images/samsungmonitor3.jpg"],
             categoryId:1,
            
         },

   {
       id:22, 
        name:"Samsung Galaxy A52",
         title:"Samsung Galaxy A52 4gb 128gb Siyah Akıllı Telefon",
          description:"lorem ipsum dolor sit amet",
           price:9999,
            images:["/images/samsunga52.jpg", "/images/samsunga52-1.jpg", "/images/samsunga52-2.jpg", "/images/samsunga52-3.jpg"],
             categoryId:4,
            
         },

   {
       id:23, 
        name:"Apple Iphone 16",
         title:"IPHONE 16 plus 1 TB",
          description:"lorem ipsum dolor sit amet",
           price:50000,
            images:["/images/iphone16.jpg", "/images/iphone16-1.jpg", "/images/iphone16-2.jpg"],
             categoryId:4,
            
         },

   {
       id:24, 
        name:"APPLE Iphone 11",
         title:"IPHONE 11 plus 500 GB",
          description:"lorem ipsum dolor sit amet",
           price:15000,
            images:["/images/iphone11.jpg", "/images/iphone11-1.jpg", "/images/iphone11-2.jpg", "/images/iphone11-3.jpg"],
             categoryId:4,
            
         },

      {
       id:25, 
        name:"APPLE Iphone 13",
         title:"IPHONE 13 pro max 500 GB",
          description:"lorem ipsum dolor sit amet",
           price:35000,
            images:["/images/iphone13.jpg", "/images/iphone13-1.jpg"],
             categoryId:4,
            
         },

   

   

   
   

]

