const { buildQueries } = require("@testing-library/react");

const pathData = {
    data : [
      {
        id: 1,
        name: "Vail Ski Resort",
        location: "Vail, CO 81657",
        opening: "November 11, 2022",
        snow: "189 inches",
        type: "Best varied terrain for all types of skiers",
        overview: "Vail is one of the world’s most popular ski resorts, and one of the top places to go in Colorado for winter sports. Just the word “Vail” is basically synonymous with skiing, so it’s no wonder they have skiable terrain for every skill level. Lionshead Village is at the base of the mountain and has shops, fine dining, ice skating, and other activities if you have non-skiers in your party.",
        image:
          "https://travellemming.com/wp-content/uploads/Vail-Mountain-Resort-in-Colorado.jpg",
        base: "8,120 feet",
        summit: "11,570 feet",
        cost: "&&&&",
        map: "https://skimap.org/data/507/3535/1664218364thumb.jpg",
        difficulty: 'black',
      },
      {
        id: 2,
        name: "Breckenridge Ski Resort",
        location: "1599 Ski Hill Rd, Breckenridge, CO 80424",
        opening: "November 11, 2022",
        snow: "366 inches",
        type: "Ski in, ski out lodgings",
        overview: "Skiing and riding are some of the best things to do in Breckenridge, CO. Peak 8 has terrain parks, bowls, and plenty of intermediate and advanced ski runs. The resort also offers lessons for beginners, or anyone looking to improve. If you want a break from skiing, other outdoor adventures like dog-sledding, tubing, and snowmobiling are available. Downtown has great restaurants, bars, shops, and plenty of great places to stay.",
        image:
          "https://travellemming.com/wp-content/uploads/Breckenridge-Snowy-Mountain.jpg",
        base: "9,600 feet",
        summit: "12,998 feet",
        cost: "$$$",
        map: "https://skimap.org/data/510/150/1665455999thumb.jpg",
        difficulty: 'green',
      },
      {
        id: 3,
        name: "Aspen Mountain Ski Resort",
        location: "601 E Dean St, Aspen, CO 81611",
        opening: "November 24, 2022",
        snow: "300 inches",
        type: "Best for expert runs",
        overview: "There are four ski resorts in Aspen, and Aspen Mountain Ski Resort is the closest to downtown. There aren’t many beginners runs here, but there are plenty of black diamonds and a few blues. If you’re experienced, it’s one of the best places to ski in Colorado.",
        image:
          "https://travellemming.com/wp-content/uploads/Aspen-Mountain-Ski-Resort.jpg",
        base: "7,945 feet",
        summit: "11,212 feet",
        cost: "$$$$",
        map: "https://skimap.org/data/1031/4070/1642702859thumb.jpg",
        difficulty: 'blue',
      },
      {
        id: 4,
        name: "Aspen Snowmass Ski Resort",
        location: "120 Lower, Carriage Way, Snowmass Village, CO 81615",
        opening: "November 24, 2022",
        snow: "300 inches",
        type: "Best intermediate resort",
        overview: "One lift ticket allows you to access all four major ski resorts in Aspen. Snowmass is the largest and most popular. It’s in between the expert runs of Aspen Mountain and Highlands, and the easy runs at Buttermilk. It also offers plenty of non-ski activities like zip lines, an alpine coaster, and ice skating.",
        image:
          "https://travellemming.com/wp-content/uploads/Aspen-Snowmass-Ski-Resort.jpg",
        base: "8,104 feet",
        summit: "12,510 feet",
        cost: "$$$$",
        map: "https://freeskier.com/wp-content/uploads/2016/10/AspenMap4.jpg",
        difficulty: 'green',
      },
      {
        id: 5,
        name: "Aspen Highlands",
        location: "199 Prospector Rd, Aspen, CO 81611",
        opening: "December 10, 2022",
        snow: "300 inches",
        type: "Best for Aspen locals",
        overview: "Aspen Highlands isn’t as popular as the other Aspen resorts, which could be why it’s a hangout for locals and more advanced skiers. More than two-thirds of the resort is expert skiing, and the views of the Maroon Bells are unrivaled.",
        image:
          "https://travellemming.com/wp-content/uploads/Aspen-Highlands-Bowl.jpg",
        base: "8,040 feet",
        summit: "12,392 feet",
        cost: "$$$$",
        map: "https://skimap.org/data/1032/4070/1642702981thumb.jpg",
        difficulty: 'black',
      },
      {
        id: 6,
        name: "Buttermilk Mountain",
        location: "38700 CO-82, Aspen, CO 81611",
        opening: "December 17, 2022",
        snow: "200 inches",
        type: "Best Aspen resort for beginners",
        overview: "Buttermilk is the best of the four Aspen resorts for learning to ski, and for kids wanting to take to the mountain. There’s also a popular terrain park. Buttermilk’s visibility as home to the X Games also makes it popular with freestyle skiers and riders.",
        image:
          "https://travellemming.com/wp-content/uploads/Buttermilk-Mountain.jpg",
        base: "7,870 feet",
        summit: "9,900 feet",
        cost: "$$$$",
        map: "https://skimap.org/data/504/4070/1642703037thumb.jpg",
        difficulty: 'green',
      },
      {
        id: 7,
        name: "Keystone Resort",
        location: "Keystone, CO 80435",
        opening: "mid-October (as soon as weather permits)",
        snow: "225 inches",
        type: "Best for beginners",
        overview: "Keystone is family-friendly and one of the best ski resorts near Denver. It has plenty of free gear wagons to cart kids and stuff around, a Kidtopia play area, and deals on gear and lessons. Lift tickets here aren’t as expensive as in other Colorado ski areas, and entry is permitted with an Epic Pass, too. The resort has beginner and intermediate runs scattered throughout so new skiers have plenty of choices. For a unique experience, check out Keystone’s night skiing that goes until 8 pm on weekends and holidays.",
        image:
          "https://travellemming.com/wp-content/uploads/Keystone-Resort.jpg",
        base: "9,280 feet",
        summit: "11,570 feet",
        cost: "$$$",
        map: "https://skimap.org/data/519/2200/1632084626thumb.jpg",
        difficulty: 'blue',
      },
      {
        id: 8,
        name: "Telluride Ski Resort",
        location: "Telluride, CO 81435",
        opening: "November 24, 2022",
        snow: "280 inches",
        type: "World-class resort with every amenity",
        overview: "Telluride is hard to reach (it’s a 6+ hour drive from Denver!), but once you’re there it has everything you’ll need for a winter vacation. The mountain views are legendary, and the resort has a variety of beginner-advanced runs. There’s a free gondola in town, and an adventure park, and other winter fun.",
        image:
          "https://travellemming.com/wp-content/uploads/Telluride-Ski-Resort.jpg",
        base: "8,750 feet",
        summit: "13,150 feet",
        cost: "$$$$",
        map: "https://skimap.org/data/517/2200/1637368445thumb.jpg",
        difficulty: 'double-black',
      },
      {
        id: 9,
        name: "Steamboat Resort",
        location: "2305 Mt Werner Cir, Steamboat Springs, CO 80487",
        opening: "November 23, 2022",
        snow: "336 inches",
        type: "Best “Champagne Powder”",
        overview: "Steamboat Resort trademarked their snow. It’s the only place in the world where you can ski on official “Champagne Powder,” and the pillowy, fluffy snow is a whole lot of fun. The mountain is lower than most others, so if you struggle with altitude sickness, this could be a good option. Steamboat also has great runs for tree skiing.",
        image:
          "https://travellemming.com/wp-content/uploads/Steamboat-Resort.jpg",
        base: "6,900 feet",
        summit: "10,568 feet",
        cost: "$$$",
        map: "https://skimap.org/data/500/5095/1666756974thumb.jpg",
        difficulty: 'blue',
      },
      {
        id: 10,
        name: "Winter Park",
        location: "Winter Park, CO 80482",
        opening: "November 24, 2022",
        snow: "327 inches",
        type: "Great for families",
        overview: "Winter Park is another popular place for locals, as it makes for one of the best winter day trips from Denver. If driving, Winter Park is just 90 minutes from the city; and public transit will get you from Denver International Airport to this resort, too. Here, you’ll find a wide variety of trails for beginners to expert skiers and boarders. There’s plenty of lodging nearby along with shops and restaurants, plus tubing and other activities for kids.",
        image:
          "https://travellemming.com/wp-content/uploads/Winter-Park-Colorado.jpg",
        base: "9,000 feet",
        summit: "12,060 feet",
        cost: "$$$",
        map: "https://skimap.org/data/503/5098/1666803394thumb.jpg",
        difficulty: 'blue',
      },
      {
        id: 11,
        name: "Arapahoe Basin Ski Area",
        location: "28194 US-6, Dillon, CO 80435",
        opening: "October 23, 2022",
        snow: "350 inches",
        type: "Local skiing for intermediates and beyond",
        overview: "Thanks to its close proximity to Denver and the fact that there’s no on-site lodging, A-Basin is popular with locals and less so with tourists. The slopes are more challenging here, and there aren’t a ton of options for beginning skiers. For more fun, picnic at “The Beach” — a section of the parking lot where people tailgate.",
        image:
          "https://travellemming.com/wp-content/uploads/Arapahoe-Basin-Ski-Area-in-Colorado.jpg",
        base: "10,780 feet",
        summit: "12,408 feet",
        cost: "$$",
        map: "https://skimap.org/data/513/3535/1667164199thumb.jpg",
        difficulty: 'blue',
      },
      {
        id: 12,
        name: "Copper Mountain",
        location: "Copper Mountain, CO 80443",
        opening: "November 17, 2022",
        snow: "305 inches",
        type: "Popular overnight resort for locals",
        overview: "When locals want to get away for a weekend of skiing, many of them head to Copper Mountain. It has the upscale amenities of Vail Resorts destinations, and quick freeway access makes for an easy drive. It’s family-friendly with plenty of runs for every level, plus tubing, ice skating, and other activities.",
        image:
          "https://travellemming.com/wp-content/uploads/Copper-Mountain.jpg",
        base: "9,712 feet",
        summit: "12,441 feet",
        cost: "$$$",
        map: "https://skimap.org/data/509/4768/1645487627thumb.jpg",
        difficulty: 'blue',
      },
      {
        id: 13,
        name: "Loveland Ski Area",
        location: "I-70, Dillon, CO 80435",
        opening: "October 31, 2022",
        snow: "422 inches",
        type: "Best for a quick day trip",
        overview: "Found along the scenic Loveland Pass, Loveland Ski Area and A-Basin are two of the most popular local ski areas. While Loveland Valley is much easier for less-experienced skiers, the Basin features more challenging runs. They also offer free snowcat skiing along the Continental Divide.",
        image:
          "https://travellemming.com/wp-content/uploads/Loveland-Ski-Area.jpg",
        base: "10,800 feet",
        summit: "13,010 feet",
        cost: "$$",
        map: "https://skimap.org/data/515/2200/1666208042thumb.jpg",
        difficulty: 'blue',
      },
      {
        id: 14,
        name: "Beaver Creek Resort",
        location: "210 Beaver Creek Plaza, Beaver Creek, CO 81620",
        opening: "November 23, 2022",
        snow: "325 inches",
        type: "Less crowded upscale resort",
        overview: "Beaver Creek is in the same general area as Vail, but with fewer amenities, it’s not nearly as crowded. Still, Beaver Creek Village offers dining, shopping, and lodging, plus some of the best skiing in Colorado. Here, you’ll find a famous World Cup run, plus plenty of beginner through advanced runs. When I skied at this resort, helpful guides at the top of the lifts suggested routes based on my ability.",
        image:
          "https://travellemming.com/wp-content/uploads/Beaver-Creek-Resort.jpg",
        base: "8,100 feet ",
        summit: "11,440 feet",
        cost: "$$$",
        map: "https://skimap.org/data/497/2200/1635286154thumb.jpg",
        difficulty: 'blue',
      },
      {
        id: 15,
        name: "Purgatory Resort",
        location: "1 Skier Pl, Durango, CO 81301",
        opening: "November 23, 2022",
        snow: "260 inches",
        type: "Jaw-dropping scenery, budget price",
        overview: "Set in the San Juan Mountains, Purgatory is an affordable southwestern Colorado resort. It’s mostly visited by local families as there are plenty of beginner and intermediate runs, but advanced skiers will find terrain for them, too. Durango is the closest town, about a 20-minute drive away.",
        image:
          "https://travellemming.com/wp-content/uploads/Purgatory-Resort.jpg",
        base: "8,793 feet",
        summit: "10,822 feet",
        cost: "$ - $$$$",
        map: "https://www.purgatory.ski/wp-content/uploads/sites/2/2022/07/Purgatory_Winter21-22_TrailMap_MapSide_Website.png",
        difficulty: 'blue',
      },
      {
        id: 16,
        name: "Silverton Mountain",
        location: "6226 State Hwy 110, Silverton, CO 81433",
        opening: "November 24, 2022",
        snow: "400 inches",
        type: "Expert backcountry skiing",
        overview: "Silverton is the steepest ski slope in Colorado, so it’s not for beginners. It’s also unique in that there’s one double chairlift that drops you off at a spot where you then have plenty of options to hike to ski. If that’s not your style… you can also heli-ski. Every skier on the mountain is required to carry avalanche gear, and nothing is groomed — it’s all untouched snow. Guides are available, or you can go your own way.",
        image:
          "https://travellemming.com/wp-content/uploads/Silverton-Mountain.jpg",
        base: "10,400 feet",
        summit: "13,487 feet",
        cost: "$$ - $$$$",
        map: "https://skimap.org/data/2280/3535/1573356158thumb.jpg",
        difficulty: 'black',
      },
      {
        id: 17,
        name: "Wolf Creek Ski Area",
        location: "E Hwy 160 E, Pagosa Springs, CO 81147",
        opening: "November 1, 2022",
        snow: "430 inches",
        type: "Best for early skiing",
        overview: "Wolf Creek brags they’re the resort with the most snow in Colorado. There’s a good range of beginner and intermediate runs, and almost half the runs are advanced. There’s no town or lodgings at the resort, but Pagosa Springs is just over half an hour away. There, you’ll find some of the best hot springs in Colorado — perfect after a day on the slopes! ",
        image:
          "https://travellemming.com/wp-content/uploads/Wolf-Creek-Ski-Area.jpg",
        base: "10,300 feet",
        summit: "11,904 feet",
        cost: "$$",
        map: "https://skimap.org/data/505/3535/1634337883thumb.jpg",
        difficulty: 'black',
      },
      {
        id: 18,
        name: "Crested Butte",
        location: "Crested Butte, CO 81224",
        opening: "November 23, 2022",
        snow: "234 inches",
        type: "Best real Colorado ski town",
        overview: "Crested Butte prides itself on being a “real Colorado ski town” with no high rises or even traffic lights. It’s one of the best mountain towns in Colorado, and the ski area features a terrain park and runs for all levels. Get lift tickets or the Epic Pass to experience what some locals call the best ski resort in Colorado.",
        image:
          "https://travellemming.com/wp-content/uploads/Crested-Butte-in-Colorado.jpg",
        base: "9,375 feet",
        summit: "12,162 feet",
        cost: "$$$",
        map: "https://skimap.org/data/514/2200/1633561436thumb.jpg",
        difficulty: 'black',
      },
      {
        id: 19,
        name: "Eldora Mountain",
        location: "2861 Eldora Ski Rd, Nederland, CO 80466",
        opening: "November 18, 2022",
        snow: "300 inches",
        type: "Best for Boulder locals",
        overview: "Eldora Mountain is less than an hour from Boulder, making it popular among locals. It’s a laid-back resort with plenty of skiing for all levels. The children’s center also makes it a great choice for families looking to ski.",
        image:
          "https://travellemming.com/wp-content/uploads/Eldora-Mountain.jpg",
        base: "9,200 feet",
        summit: "10,600 feet",
        cost: "$$$",
        map: "https://skimap.org/data/508/2200/1636658008thumb.jpg",
        difficulty: 'green',
      },
      {
        id: 20,
        name: "Ski Cooper",
        location: "232 Co Rd 29, Leadville, CO 80461",
        opening: "December 8, 2022",
        snow: "260 inches",
        type: "Best family budget ski area",
        overview: "As evidenced above, Ski Cooper is one of our family’s favorites. Here’s why: it’s not crowded. It’s cheap. It’s small enough that older kids who want to ski on their own aren’t going to get lost. It’s not built up or fancy.",
        image:
          "https://www.elevationoutdoors.com/wp-content/uploads/2022/06/CaseyDay-09701-1024x683.jpeg",
        base: "10,500 feet",
        summit: "11,700 feet",
        cost: "$",
        map: "https://skimap.org/data/512/3535/1634338606thumb.jpg",
        difficulty: 'green',
      },
      {
        id: 21,
        name: "Powderhorn Mountain Resort",
        location: "48338 Powderhorn Rd, Mesa, CO 81643",
        opening: "December 14, 2022",
        snow: "250 inches",
        type: "Best Western Slope skiing",
        overview: "Powderhorn is known for its awesome tree skiing, but they also have great options for beginners. If you don’t want to downhill ski, they have cross-country skiing and snowmobiling.",
        image:
          "https://travellemming.com/wp-content/uploads/Powderhorn-Mountain-Resort.jpg",
        base: "8,200 feet",
        summit: "9,850 feet",
        cost: "$",
        map: "https://coloradoskiresortmaps.com/images/powderhorn2/Powderhorn-Resort-Ski-Trail-Map1.jpg",
        difficulty: 'blue',
      },
      {
        id: 22,
        name: "Sunlight Mountain Resort",
        location: "10901 Co Rd 117, Glenwood Springs, CO 81601",
        opening: "December 9, 2022",
        snow: "250 inches",
        type: "Best uncrowded ski area",
        overview: "Sunlight is off the beaten path and is a budget-friendly, family-friendly resort without a lot of fancy amenities. There’s skiing and boarding for all abilities, along with snowmobile tours. You can also soak in Glenwood’s famous hot springs after a day of hard work on the mountain!",
        image:
          "https://travellemming.com/wp-content/uploads/Sunlight-Mountain-Resort.jpg",
        base: "7,880 feet",
        summit: "9,895 feet",
        cost: "$",
        map: "https://skimap.org/data/506/2200/1667685756thumb.jpg",
        difficulty: 'blue',
      },
      {
        id: 23,
        name: "Monarch Mountain",
        location: "23715 US-50, Salida, CO 81201",
        opening: "November 27, 2022",
        snow: "350 inches",
        type: "Best hidden gem",
        overview: "Monarch is west of Salida, and is a lesser-known resort with amazing views. If you want to branch out from the 64 trails, you can also go snowcat skiing or backcountry skiing in the Mirkwood Basin.",
        image:
          "https://travellemming.com/wp-content/uploads/Monarch-Mountain-Colorado.jpg",
        base: "10,790 feet",
        summit: "11,952 feet",
        cost: "$$",
        map: "https://skimap.org/data/511/3535/1578624956.png",
        difficulty: 'blue',
      },
      {
        id: 24,
        name: "Granby Ranch",
        location: "1000 Village Rd, Granby, CO 80446",
        opening: "December 10, 2022",
        snow: "120 inches",
        type: "Best place to learn to ski",
        overview: "Granby is a family-friendly resort that’s one of the best places in the state to learn to ski. It also offers night skiing and boarding. It’s about an hour and a half from Denver, so you can make it a long day or stay nearby.",
        image:
          "https://cdn.allwinterpark.com/images/content/6534_14352_SolVista_Resort_Skiing_lg.jpg",
        base: "8,202 feet ",
        summit: "9,202 feet",
        cost: "$$",
        map: "https://skimap.org/data/516/2200/1606486755thumb.jpg",
        difficulty: 'blue',
      },
      {
        id: 25,
        name: "Echo Mountain",
        location: "19285 CO-103, Idaho Springs, CO 80452",
        opening: "December 16, 2022",
        snow: "275 inches",
        type: "Closest to Denver",
        overview: "Echo Mountain is one of Colorado’s newest resorts and is the closest to Denver. It has night skiing and boarding, and a terrain park. Although, if you’re a beginning skier, you may find there aren’t many runs for you here.",
        image:
          "https://s3.amazonaws.com/ocn-media/477dc9ef-97e5-4774-80f1-d3d2f081d571.jpg",
        base: "10,050 feet ",
        summit: "10,650 feet ",
        cost: "$",
        map: "https://skimap.org/data/1034/2200/1666984675thumb.jpg",
        difficulty: 'green',
      },
      {
        id: 26,
        name: "Howelsen Hill",
        location: "38700 CO-82, Aspen, CO 81611",
        opening: "TBD",
        snow: "170 inches",
        type: "Best long jumps",
        overview: "Howelsen Hill in Steamboat Springs is the oldest ski resort in Colorado. It has also produced the most Olympic skiers. Howelsen has great night skiing and is cheaper than Steamboat Ski Resort.",
        image:
          "https://travellemming.com/wp-content/uploads/Howelsen-Hill.jpg",
        base: "6,696",
        summit: "7,136 feet",
        cost: "$",
        map: "https://skimap.org/data/498/2200/1638598523thumb.jpg",
        difficulty: 'blue',

      },
      {
        id: 27,
        name: "Kendall Mountain Ski Area",
        location: "1 Kendall Pl, Silverton, CO 81433",
        opening: "TBD",
        snow: "200 inches",
        type: "Best tiny community ski spot",
        overview: "Kendall Mountain was a resort that closed in the 80s. The city of Silverton then bought and opened it for the community. It isn’t fancy, but it has one lift, a terrain park, and four trails. It’s a great spot for families who want to do a little skiing for barely more than it costs to go to the movies.",
        image:
          "https://images.squarespace-cdn.com/content/v1/5a0a46d37131a5757c46ceea/1542835550924-EWD12A8B6QF5XCLRZC8D/image-asset.jpeg",
        base: "9,313 feet ",
        summit: "9,596 feet",
        cost: "$",
        map: "https://images.squarespace-cdn.com/content/v1/5dade5d6f3de04278ab5ade9/1572538676771-GIKU5P0148RTON4N579G/image-asset.jpeg",
        difficulty: 'blue',
      }
]
}