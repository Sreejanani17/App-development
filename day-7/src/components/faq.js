// import React from 'react';
// import NavBar from './utils/NavBar';
// import Footer from './utils/footer';
// import "../assets/css/legal.css";


// const FAQ=()=>
// {
    
//     return(
//        <div>
//         <NavBar /><br></br>
//         <div style={{marginTop:"80px"}}>
//         <div className='privacy-text1'>Online Auction and Bidding in India<br></br><br></br><br></br></div></div>
//         <div className='privacy-text2'>What is Online Auction?<br></br><br></br></div>
//         <div className='privacy-text3'>Online auctions are conducted over the internet, to enable quicker and more profitable sales which are not only advantageous but ease out on efforts and costs involved. Unlike the traditional buying and selling, where sellers decide the price and the buyers purchase something at that pre-decided price, online auctions help the buyer quote price for a property and it is at the option of the seller to sell or not to sell the property at that price or sell it to the highest bidder. 

// Online auctions and bidding are expected to be a greater success as they take place in the virtual world and anyone can make their bid for their desired property, with a real hope of acquiring them at very favourable prices.<br></br><br></br><br></br></div>

//         <div className='privacy-text2'>Is Online Auction and Bidding Legal in India?<br></br><br></br></div>
//         <div className='privacy-text3'>Online auctions are in the form of e-contracts. E-contract is a contract constitutes, specified, executed and deployed by a software system. In an auction, call for bids act as an invitation to offer. The bids made by the persons at the auction act as offer and it is at the auctioneer's discretion to accept or reject the offer. On acceptance, the offer turns into an agreement, where the buyer agrees to buy a certain property on payment of a certain consideration. Since all the elements of a valid contract are present, online auctions are legal contracts.
//         <br></br><br></br><br></br></div>
//         <div className='privacy-text2'>What are the types of Online Auctions in India?<br></br><br></br></div>
//         <div className='privacy-text3'>There are generally two types of internet auctions: <br></br><br></br>
//         1.Business-to-person, in which sites have possession of the items being offered<br></br>
//         2.Person-to-person, in which individual sellers or small businesses offer their items for auction directly to consumers. Generally, the seller, not the site, has physical possession of the items on sale and is directly responsible for the sale.
//         <br></br><br></br><br></br>
//         </div>
//         <div className='privacy-text2'> What are the Benefits of Online Auctions and Online Bidding in India?<br></br><br></br>
//         </div>
//         <div className='privacy-text3'>E-auction offers a variety of benefits to both the buyer and the seller. These include-
//         <br></br><br></br>
//         Ease- The buyers can choose the item to bid on and can bid while sitting anywhere, just with the help of an internet.<br></br>
//         Transparency- In order to conduct a transparent bidding, the sellers provide a comprehensive description of the item on sale.<br></br>
//         Competitive prices- Buyers get an opportunity to compete with other potential buyers and get attractive prices.<br></br>
//         Expansion- A seller can expand his reach by conducting an online auction, as over the web he can contact a large number of potential buyers together.<br></br>
//         Handsome returns- A seller can get handsome returns by selecting the most appropriate bid for his item.<br></br>
//         Quick and easy- E-auctions are easy, quick and also saves on the pocket.<br></br><br></br><br></br>
//         </div>       
//         <div className='privacy-text2'>What are the Drawbacks of Online Auctions?<br></br><br></br></div>
//         <div className='privacy-text3'>Lack of awareness- People lack awareness about online auctions and online bidding. There is lack of availability of internet options in remote areas.<br></br>

//         Potential threats- Even though online bidding process is transparent, one cannot eliminate the chances of fraud when entering the online bidding market. Therefore, a strong background check is required by both the buyer and the seller, before indulging in the process.
//         <br></br><br></br><br></br></div>
//         <div className='privacy-text2'>What to do in case of Online Auction fraud? <br></br><br></br></div>
//         <div className='privacy-text3'>With growth and advancement in technology and the internet, the online auctions process can reap multiple benefits. Online auctions have a tremendous future, considering the massive benefits they have such as ease, transparency, and efficiency, they bring to both the buyers and sellers. It is important for buyers to perform a strong background check of the online auction site, and existing buyers and sellers on the online auction site before indulging in the process.
//         <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>

        
        

        
//         <div><Footer /></div>
//        </div>


//     )
// }
// export default FAQ;
import React from "react";
import '../assets/css/legal.css';
import NavBar from "./utils/NavBar";
import Footer from "./utils/footer";
import { useState } from "react";

const FAQ = () =>{

    const [faqs, setFaqs] = useState([
        {
            question: 'How do I view the lots ?',
            answer: 'All lots for sale are featured in this auction catalogue. The number listed next to each image is the lot number and should be used as a reference during bidding or for any information requests. '
        },
        {
            question: 'What are Price Estimates ?',
            answer: 'Each lot has a price range listed. These estimates are based on characteristics of the lot such as condition, quality, rarity, provenance. These estimates are provided only as a guide for buyers and do not include buyer’s premium or applicable taxes. If applicable there is a link for pricing achieved for similar art works at auction available next to the lot in the online catalogue. Price estimates may be subject to revision.'
        },
        {
            question: 'What is a Reserve Price ?',
            answer: 'Unless stated otherwise, all lots offered in the auction are subject to a reserve price, which is the minimum price that the lot may be sold for. No lot will be sold below its reserve price and the reserve price will not exceed the low price estimate. Reserve prices are confidential and will not be disclosed.'
        },
        {
            question: 'How do I register to bid ?',
            answer: 'Bidders are advised to register atleast 24 hours in advance of the sale. Bidders may choose to register online or send in their details to Saffronart and we will process the details for you. Saffronart requires the following details from a first time bidder to register and process an approval to bid'
        },
        {
            question: 'How do I Bid ?',
            answer: '(i) Bidding in the room: All approved bidders, including those who have registered online, will be handed a paddle to bid in the auction. Please bring a proof of identity to collect your paddle. Registrations open 30 minutes prior to the sale(ii) Bidding Online: Bidders may view and hear the auction on their PC or Mac with our real-time online video feed from the auction room. Online bidders may place a bid by clicking on the “Bid Now” button when their lot of interest is open for bidding. If their bid is accepted by the auctioneer, it will be recorded.(iii) Bidding on the Phone: Saffronart accepts requests from bidders to place bids on the phone with our staff depending on availability. To avail of this service you must be registered as a bidder. Please note that the number of telephone lines available for telephone bidding may be limited and this facility is provided at Saffronart’s discretion.(iv) Bidding on the Mobile: Bidders may download a software application from Saffronart onto their eligible mobile device and use it to place bids during the sale. To avail of this service you must be registered as a bidder. For devices operating on iOS, click here and Android click here.(v) Absentee/proxy Bids: Bidders may place bids prior to the sale either online or in writing by submitting the Absentee/proxy bid form. Absentee/proxy bids shall be accepted upto a certain time prior to the sale which will be listed online'
        },
        {
            question: 'What are bid increments ?',
            answer: 'Any new bid must be greater than the current highest bid by a minimum increment. The next valid bid amount is the current highest bid plus the minimum increment value. The auctioneer may vary the increments during the course of the auction at his or her discretion. Online bids however, are accepted only at the next valid bid based on the minimum increment. Please refer to the bid increments printed at the back of the catalogue (on the reverse of the Absentee/proxy bid form).'
        },
        {
            question: 'Can a bid be cancelled ?',
            answer: 'No bid may be cancelled by a bidder. Saffronart reserves the right to cancel a bid at its discretion if it considers it necessary to do so.'
        },
        {
            question: 'What is an Opening/Start Bid ?',
            answer: 'The opening/start bid is the value at which the auction house starts the bidding on a particular lot.'
        },
        {
            question: 'When does a lot sell ?',
            answer: 'The fall of the Auctioneer’s gavel shall mark the close of bidding on each Lot. The final bid announced by the auctioneer is considered a winning bid in the sale, if the auctioneer announces the lot as sold.'
        },
        {
            question: 'How will I be invoiced ?',
            answer: 'If you win a bid, you will be sent an email after the close of the auction, containing an invoice for the winning bid plus additional charges (shipping, handling, duties and taxes as applicable) and the Buyer’s Premium plus service tax at applicable rates. The invoicing details provided at the time of registration will used to raise the invoice and no changes will be accepted after the sale.You may review acceptable modes of payment described in the section below. If you are the winning bidder, you are legally bound to purchase the item from Saffronart. Please note that purchases will not be shipped out until payment has been received and cleared.'
        },
        {
            question: 'What are additional charges ?',
            answer: 'All post-sales expenses, including packing, insurance, shipping or handling charges, are borne by the buyer. Shipping will be charged on courier rates and are determined by the value, origin and destination of the package.You may choose to make your own arrangements for shipping and handling. However, all documentation requirements must be complied with. Please contact us for further details'
        },
        {
            question: 'How do I make payment ?',
            answer: 'Buyers will be required to complete payment within a period of 7 business days from the receipt of the invoice via email. If you have not received your invoice within 48 hours of the close of the sale please contact us.For Buyers in IndiaPayment can be made in INR only by the following acceptable modes of payment(i) Cheque/Demand Draft: To be made in favour of: Saffron Art Private Limited(i) RTGS/NEFT: Details will be included with the invoice and available upon request (ii) Credit card: up to INR 3,40,000 For Buyers outside India Payment can be made in USD only by the following acceptable modes of payment (i) Cheque to be made in favour of: Saffron Art Private Limited (ii) Direct wire transfer: Details will be included with the invoice and available upon request (iii) Credit card: up to USD 5,000 (iv) Payment from an NRE account The invoice will be raised in USD based on the winning bid value and the buyer will have to transfer an equivalent INR amount at the bank exchange rate'
        },
        {
            question: 'When will my purchases be delivered/can I collect my purchases ?',
            answer: 'Purchases shipped out within 10 - 15 business days of the payment being cleared and are insured under the terms of Saffronart’s insurance policy (please note that frames are not insured). If there is an expected delay in dispatch, the buyer will be informed of the delay via email, unless the buyer has indicated an alternative preferred mode of communication. Buyers may choose to collect their purchases from the Saffronart office in Mumbai. In such cases, buyers are requested to make an appointment to collect purchases within 10 - 15 business days of completion of all payments and documentation formalities. Buyers who have completed payment formalities and have not taken delivery of their lots from Saffronart within 30 days of the completion of payment formalities will be charged demurrage at 1% per month on the value of the artworks.'
        },
        {
            question: 'What documentation will I receive with my purchases ?',
            answer: 'Upon confirmation of delivery or receipt of shipment, we will send you the invoices for your purchases along with any relevant documentation for the lot that has been mentioned in the lot details. Please note that Saffronart does not issue any authenticity certificates and does not provide artist authenticities either.'
        },
        {
            question: 'What if my shipment reaches damaged ?',
            answer: 'All purchases from this sale are final. In the unlikely event of your receiving a damaged product, please notify Saffronart directly within five days of receipt of the lot. Please call or email us at any of our locations mentioned in the Sales and Enquiries Section. If Saffronart does not receive any notification within 7 business days of delivery, it shall be assumed that the lot has been received in good condition, and no claims will be entertained.'
        },
        {
            question: 'What are some of the symbols used next to the lots in auction ?',
            answer: '(i) Lots marked with  are not situated in India and therefore, may only be bid for and purchased in USD. Persons residing in India, wishing to bid in USD must be eligible under the various foreign exchange regulations to make payments overseas. Please contact Saffronart for further details. (ii) Lots marked with  indicate that Saffronart owns the lot in whole or in part or has an economic interest in the lot equivalent to an ownership interest. (iii) Lots marked with  have been imported into India, and in order to remove the lots from a Free Trade Warehousing Zone and into Indian free circulation, a customs duty at 10.3% will be added to the hammer price. The applicable VAT/CST will be charged on the amount inclusive of the hammer price and the duty.'
        },
        {
            question: 'How do I participate in your next auction ?',
            answer: 'If you would like to register to bid or consign to any of our upcoming auctions please contact any of our locations listed in the Sales and Enquiries Section. If you would like to stay informed of Saffronart’s upcoming events, please register with us.'
        }
    ])
    const [expanded, setExpanded] = useState(null);
    const toggleFAQ = (index) => {
        if(expanded === index) {
            setExpanded(null);
            setRotationAngle(rotationAngle + 180);
        } else{
            setExpanded(index);
            setRotationAngle(rotationAngle + 180);
        }
    }
    const [rotationAngle, setRotationAngle] = useState(0);
//   const rotateImage = (index) => {
//     if(expanded === index){
//         setRotationAngle(null);
//     }
//     else{
//         setRotationAngle(rotationAngle + 45);
//     }
//   };
    return(
        <><NavBar /><br></br>
        <br></br><br></br><hr></hr>
        <div style={{marginTop: "80px"}}>
        <div className="privacy-text1">
        {/* <hr width="350px" size="2" color="black"></hr> */}
        FREQUENTLY ASKED QUESTIONS
        {/* <hr width="350px" size="2" color="black"></hr> */}
        </div><br></br>
        {faqs.map((faq, index) => (
        <div key={index} className="faq-ques">
          <div className={`faq-question ${expanded === index ? 'faq-question2' : 'faq-question1'}`} onClick={() => toggleFAQ(index)}>
          {faq.question}<div style={{marginTop: "-20px"}}><img style={{marginLeft: "950px", transform: `rotate(${rotationAngle}deg)`}} alt="" src="down.png" height="20px" width="20px"></img></div>
            {expanded === index && (
            <div className="faq-answer"><div className="ans-text">{faq.answer}</div></div>
          )}
          </div>
        </div>
      ))}

      <br></br>
      <div>
         <div style={{marginTop:"80px"}}>
         <div className='privacy-text1'>Online Auction and Bidding in India<br></br><br></br><br></br></div></div>
       <div className='privacy-text2'>What is Online Auction?<br></br><br></br></div>
       <div className='privacy-text3'>Online auctions are conducted over the internet, to enable quicker and more profitable sales which are not only advantageous but ease out on efforts and costs involved. Unlike the traditional buying and selling, where sellers decide the price and the buyers purchase something at that pre-decided price, online auctions help the buyer quote price for a property and it is at the option of the seller to sell or not to sell the property at that price or sell it to the highest bidder. 

 Online auctions and bidding are expected to be a greater success as they take place in the virtual world and anyone can make their bid for their desired property, with a real hope of acquiring them at very favourable prices.<br></br><br></br><br></br></div>

        <div className='privacy-text2'>Is Online Auction and Bidding Legal in India?<br></br><br></br></div>
         <div className='privacy-text3'>Online auctions are in the form of e-contracts. E-contract is a contract constitutes, specified, executed and deployed by a software system. In an auction, call for bids act as an invitation to offer. The bids made by the persons at the auction act as offer and it is at the auctioneer's discretion to accept or reject the offer. On acceptance, the offer turns into an agreement, where the buyer agrees to buy a certain property on payment of a certain consideration. Since all the elements of a valid contract are present, online auctions are legal contracts.
         <br></br><br></br><br></br></div>
         <div className='privacy-text2'>What are the types of Online Auctions in India?<br></br><br></br></div>
         <div className='privacy-text3'>There are generally two types of internet auctions: <br></br><br></br>
         1.Business-to-person, in which sites have possession of the items being offered<br></br>
         2.Person-to-person, in which individual sellers or small businesses offer their items for auction directly to consumers. Generally, the seller, not the site, has physical possession of the items on sale and is directly responsible for the sale.
         <br></br><br></br><br></br>
         </div>
         <div className='privacy-text2'> What are the Benefits of Online Auctions and Online Bidding in India?<br></br><br></br>
         </div>
         <div className='privacy-text3'>E-auction offers a variety of benefits to both the buyer and the seller. These include-
         <br></br><br></br>
         Ease- The buyers can choose the item to bid on and can bid while sitting anywhere, just with the help of an internet.<br></br>
         Transparency- In order to conduct a transparent bidding, the sellers provide a comprehensive description of the item on sale.<br></br>
         Competitive prices- Buyers get an opportunity to compete with other potential buyers and get attractive prices.<br></br>
         Expansion- A seller can expand his reach by conducting an online auction, as over the web he can contact a large number of potential buyers together.<br></br>
         Handsome returns- A seller can get handsome returns by selecting the most appropriate bid for his item.<br></br>
         Quick and easy- E-auctions are easy, quick and also saves on the pocket.<br></br><br></br><br></br>
         </div>       
         <div className='privacy-text2'>What are the Drawbacks of Online Auctions?<br></br><br></br></div>
         <div className='privacy-text3'>Lack of awareness- People lack awareness about online auctions and online bidding. There is lack of availability of internet options in remote areas.<br></br>

         Potential threats- Even though online bidding process is transparent, one cannot eliminate the chances of fraud when entering the online bidding market. Therefore, a strong background check is required by both the buyer and the seller, before indulging in the process.
         <br></br><br></br><br></br></div>
         <div className='privacy-text2'>What to do in case of Online Auction fraud? <br></br><br></br></div>
         <div className='privacy-text3'>With growth and advancement in technology and the internet, the online auctions process can reap multiple benefits. Online auctions have a tremendous future, considering the massive benefits they have such as ease, transparency, and efficiency, they bring to both the buyers and sellers. It is important for buyers to perform a strong background check of the online auction site, and existing buyers and sellers on the online auction site before indulging in the process.
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>

        
        

        
         
        </div>
      <br></br><br></br><br></br>
        <Footer/>
        </div>
        </>
    )
}
export default FAQ;