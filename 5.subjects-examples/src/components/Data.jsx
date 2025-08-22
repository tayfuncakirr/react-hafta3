import Televizyon from "./images/TV.jpg"
//import Telefon from "./images/telefon.jpg"
import Tablet from "./images/tablet.jpg"
//import Bilgisayar from "./images/bilgisayar.jpg"
import Klavye from "./images/klavye.jpg"
import PS5 from "./images/PS5.jpg"
import Elektronik from "./images/elektronik.png"
import Bilgisayar from "./images/bilgisayar.png"
import Telefon from "./images/Telefon.png"
import Evgerecleri from "./images/Evgerecleri.png"


export const categories =[
   {id:1, name:"Elektronik", image:Elektronik},
   {id:2, name:"Bilgisayar", image:Bilgisayar},
   {id:3, name:"Ev aletleri", image:Evgerecleri},
   {id:4, name:"Telefon", image:Telefon}
]

export const items =[
    {
       id:1, 
        name:"UHD Televizyon",
         title:"60 inch UHD 4K Android TV",
          description:"lorem ipsum dolor sit amet",
           price:20000,
            image:Televizyon,
             categoryId:1
        },
    {
       id:2,  
        name:"Samsung s24 plus",
         title:"40mp front CAM 1920x1080 OLED Ekran telefon",
          description:"lorem ipsum dolor sit amet",
           price:30000,
            image:Telefon,
             categoryId:4
         },
            
    {
       id:3, 
        name:"Samsung Galaxy tablet",
         title:"Samsung Galaxy Tab S9 FE Plus SM-X610 128 GB",
          description:"lorem ipsum dolor sit amet",
           price:10000,
           image:Tablet,
            categoryId:1,
        },
    {
       id:4,  
        name:"Casper Excalibur",
         title:"i7 12.nesil, 20 inch CASPER bilgisayar",
          description:"lorem ipsum dolor sit amet",
           price:25000,
            image:Bilgisayar,
             categoryId:2,
        },
    {
       id:5, 
        name:"LED Klavye",
         title:"RGB Wireless/Bluetooth/Kablolu ",
          description:"lorem ipsum dolor sit amet",
           price:2999,
            image:Klavye,
             categoryId:1,
        },

    {
       id:6, 
        name:"Tefal Ütü",
         title:"Tefal Calc Filter Ütü",
          description:"lorem ipsum dolor sit amet",
           price:10000,
            image:PS5,
             categoryId:3,
              
            
         },
   {
       id:7, 
        name:"Dyson",
         title:"Dyson V12 Detect Slim Absolute Kablosuz Süpürge",
          description:"lorem ipsum dolor sit amet",
           price:25999,
            image:PS5,
             categoryId:3,
            
         },
   {
       id:8, 
        name:"PS5",
         title:"Sony PS5 Slim Digital Edition 1 TB SSD PlayStation",
          description:"lorem ipsum dolor sit amet",
           price:25999,
            image:PS5,
             categoryId:1,
            
         },
   
   {
       id:9, 
        name:"Tefal",
         title:"Tefal Ceramic Renew Tencere",
          description:"lorem ipsum dolor sit amet",
           price:3499,
            image:PS5,
             categoryId:3,
            
         },
   
   {
       id:10, 
        name:"Airfry",
         title:"SSDPhilips Airfryer Avance Collection Sıcak Hava Fritözü",
          description:"lorem ipsum dolor sit amet",
           price:3500,
            image:PS5,
             categoryId:3,
            
         },

   {
       id:11, 
        name:"Saç Kurutma Makinesı",
         title:"Philips BHD350/06 Thermoprotect Saç Kurutma Makinesi",
          description:"lorem ipsum dolor sit amet",
           price:999,
            image:PS5,
             categoryId:3,
            
         },

   {
       id:12, 
        name:"Mutfak Robotu",
         title:"Karaca Prosteel 7 in 1 Süt Köpürtücülü Mutfak Robotu 1000 W Soft Cream",
          description:"lorem ipsum dolor sit amet",
           price:4999,
            image:PS5,
             categoryId:3,
            
         },

   {
       id:13, 
        name:"Saç Düzleştirici",
         title:"Babyliss ST089E Ceramic Straight 230 Saç Düzleştirici",
          description:"lorem ipsum dolor sit amet",
           price:1999,
            image:PS5,
             categoryId:3,
            
         },

   {
       id:14, 
        name:"DELL Bilgisayar",
         title:"Dell 20 inch AMD athlon",
          description:"lorem ipsum dolor sit amet",
           price:35000,
            image:PS5,
             categoryId:2,
            
         },

   {
       id:15, 
        name:"ASUS Vivobook",
         title:"ASUS intel core i7 4 çekirdek Bilgisayar",
          description:"lorem ipsum dolor sit amet",
           price:28000,
            image:PS5,
             categoryId:2,
            
         },

   {
       id:16, 
        name:"Logitech Mouse",
         title:"Logitech 910-004287 Kablosuz Mouse (Siyah)",
          description:"lorem ipsum dolor sit amet",
           price:1999,
            image:PS5,
             categoryId:1,
            
         },

   {
       id:17, 
        name:"MAC Air",
         title:"Apple Macbook Air MGN63TU/A M1 8C 8GB Bilgisayar",
          description:"lorem ipsum dolor sit amet",
           price:45000,
            image:PS5,
             categoryId:2,
            
         },

   {
       id:18, 
        name:"Monster Notebook",
         title:"Monster Abra A7 V15.3.1 Intel Core i5 13500H 16 GB RAM Bilgisayar",
          description:"lorem ipsum dolor sit amet",
           price:38000,
            image:PS5,
             categoryId:2,
            
         },

   {
       id:19, 
        name:"ASUS tablet",
         title:"ASUS Tab S9 12GB 256GB Gray Tablet AS-X710",
          description:"lorem ipsum dolor sit amet",
           price:27000,
            image:PS5,
             categoryId:1,
            
         },

   {
       id:20, 
        name:"APPLE Ipad",
         title:"8 inch 256 GB Akıllı tablet",
          description:"lorem ipsum dolor sit amet",
           price:1999,
            image:PS5,
             categoryId:1,
            
         },

   {
       id:21, 
        name:"SAMSUNG Monitor",
         title:"Samsung Essential S3 22 inch FHD IPS 100HZ Siyah Monitör",
          description:"lorem ipsum dolor sit amet",
           price:3500,
            image:PS5,
             categoryId:1,
            
         },

   {
       id:22, 
        name:"Samsung Telefon",
         title:"Samsung Galaxy A05s 4gb 128gb Siyah Akıllı Telefon",
          description:"lorem ipsum dolor sit amet",
           price:9999,
            image:PS5,
             categoryId:4,
            
         },

   {
       id:23, 
        name:"Apple Iphone 16",
         title:"IPHONE 16 plus 1 TB",
          description:"lorem ipsum dolor sit amet",
           price:50000,
            image:PS5,
             categoryId:4,
            
         },

   {
       id:24, 
        name:"APPLE Iphone 11",
         title:"IPHONE 11 plus 500 GB",
          description:"lorem ipsum dolor sit amet",
           price:15000,
            image:PS5,
             categoryId:4,
            
         },

      {
       id:25, 
        name:"APPLE Iphone 13",
         title:"IPHONE 13 pro max 500 GB",
          description:"lorem ipsum dolor sit amet",
           price:35000,
            image:PS5,
             categoryId:4,
            
         },

   

   

   
   

]

