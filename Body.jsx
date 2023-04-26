// import React from 'react'
// import RestaurantCard from './src/components/RestaurantCard'

const resObj={
    type: "restaurant",
    data: {
      type: "F",
      id: "31370",
      name: "KFC",
      uuid: "50b8ed1c-900a-4d34-b9d4-e1027c9e91fd",
      city: "4",
      area: "Janakpuri",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      cuisines: [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      tags: [
        
      ],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "37 MINS",
      lastMileTravel: 5.699999809265137,
      slugs: {
        restaurant: "kfc-janakpuri-janakpuri-2",
        city: "delhi"
      },
      cityState: "4",
      address: "unit no-01 , G.F.101, Unity One Janakpuri, Near Janakpuri West Metro Station, New Delhi- 110058",
      locality: "Unity One",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [
        
      ],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [
        
      ],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 4900,
        message: "",
        title: "Delivery Charge",
        amount: "4900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6536727~p=1~eid=00000187-ad90-1615-0c42-0c4200d50104",
      badges: {
        imageBased: [
          
        ],
        textBased: [
          
        ],
        textExtendedBadges: [
          
        ]
      },
      lastMileTravelString: "5.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "31370",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 5.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false
    },
    subtype: "basic"
  };
  
const Body = () => {
  return (
   <div className='body'>
    <div className='search'>
        Search
    </div>
    <div className='restaurant-container'>
       <RestaurantCard
        resData={resObj}
       />
       <RestaurantCard  
       restaurantName="KFC"
       cuisine="Chicken"
       />
    </div>
   </div>
  )
}

// export default Body