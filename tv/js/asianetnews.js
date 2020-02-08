<script>

        $(document).ready(function(){

            $(".youmax-pro").youmaxPro({
                apiKey:"AIzaSyCiKlBlkxQJ0DQSk15QYM-zibj4Di5iS9A",
                youTubeClientId:"237485577723-lndqepqthdb3lh4gec2skvpfaii9sgh0.apps.googleusercontent.com",
                vimeoAccessToken:"c289d754a132ca07051aaf931ef0de33",
                channelLinkForHeader:"https://www.youtube.com/user/productlaunch",
                tabs:[
                    {
                        name:"Uploads",
                        type:"youtube-channel-uploads",
                        link:"https://www.youtube.com/user/asianetnews",
                        //YouTube Channel Link needed here
                    },
                    {
                        name:"Playlists",
                        type:"youtube-channel-playlists",
                        link:"https://www.youtube.com/user/asianetnews"
                        //YouTube Channel Link needed here
                    },
                    /*{
                        name:"Videos",
                        type:"youtube-playlist-videos",
                        link:"https://www.youtube.com/playlist?list=PL6_h4dV9kuuIOBDKgxu3q9DpvvJFZ6fB5"
                        //YouTube Playlist Link needed here
                    },
                    {
                        name:"Vimeo",
                        type:"vimeo-user-videos",
                        link:"https://vimeo.com/proceq"
                    }*/
                ],
                defaultTab:"Uploads",       //Name of the Tab that should be displayed on your page start
                videoDisplayMode:"newpage",   //popup|link|inline

                /*
                callouts: [
                {
                    title:"The Launch Book",
                    image:"http://ecx.images-amazon.com/images/I/51ij4WROduL._SX324_BO1,204,203,200_.jpg",
                    description:"An Internet Millionaire's Secret Formula to Sell Almost Anything Online, Build a Business You Love and Live the Life of Your Dreams!",
                    buyButtonText:"Only for $10",
                    buyButtonLink:"http://www.amazon.in/Launch-Internet-Millionaires-Anything-Business/dp/1471143163/ref=sr_1_2?ie=UTF8&qid=1476074741&sr=8-2&keywords=launch",
                    previewButtonIcon:"fa-play",
                    previewButtonLink:"http://www.amazon.in/Launch-Internet-Millionaires-Anything-Business/dp/1471143163/ref=sr_1_2?ie=UTF8&qid=1476074741&sr=8-2&keywords=launch"
                },
                {
                    title:"The Launch Book",
                    image:"http://ecx.images-amazon.com/images/I/51ij4WROduL._SX324_BO1,204,203,200_.jpg",
                    description:"An Internet Millionaire's Secret Formula to Sell Almost Anything Online, Build a Business You Love and Live the Life of Your Dreams!",
                    buyButtonText:"Only for $10",
                    buyButtonLink:"http://www.amazon.in/Launch-Internet-Millionaires-Anything-Business/dp/1471143163/ref=sr_1_2?ie=UTF8&qid=1476074741&sr=8-2&keywords=launch",
                    previewButtonIcon:"fa-play",
                    previewButtonLink:"http://www.amazon.in/Launch-Internet-Millionaires-Anything-Business/dp/1471143163/ref=sr_1_2?ie=UTF8&qid=1476074741&sr=8-2&keywords=launch"
                }

                ],
                calloutType:"double-list", //list|grid|double-list
                */

                maxResults:"9",
                autoPlay:false,
                minimumViewsPerDayForTrendingVideos:"5",  
                //If Views per day is greater than this number, the video will be marked a trending in Youmax.
                
                displayFirstVideoOnLoad:true,       //for inline video display mode only
                defaultSortOrder:"recent-first",    //popular-first|recent-first
                youmaxDisplayMode:"grid",           //list|double-list|grid
                gridThumbnailType:"neat",         //simple|full|neat
                dateFormat:"relative",              //relative|specific

                //keep the titleColor in rgb format
                youmaxBackgroundColor     :"#ECEFF1",
                itemBackgroundColor       :"#fbfbfb",
                headerBackgroundColor     :"rgb(163, 79, 16)",
                headerTextColor           :"white",
                tabsColor                 :"black",
                titleColor                :"#383838",
                descriptionColor          :"#828282",
                viewsColor                :"#6f6f6f",
                controlsTextColor         :"black",
                
                offerBackgroundColor      :"#fbfbfb",
                offerTextColor            :"#686868",
                offerHighlightColor       :"#FFC107",

                titleFontFamily           :"Roboto Condensed",           //Open Sans|Roboto Condensed|sans-serif
                generalFontFamily         :"Roboto Condensed",           //Open Sans|Roboto Condensed|sans-serif
                titleFontSize             :"0.9",
                titleFontWeight           :"normal",              //bold|normal
                descriptionFontSize       :"0.85",
                viewsDateFontSize         :"0.75",
                baseFontSize              :"16px",                //use this to increase or decrease all font-sizes in Youmax
                offerTitleFontSize          :"1.3",
                offerDescriptionFontSize    :"0.85",
                offerButtonFontSize         :"1",

                responsiveBreakpoints   :[600,900,1050,1600],

                loadingMechanism        :"load-more",       //load-more|prev-next
                loadMoreText            :"<i class=\"fa fa-plus\"></i>&nbsp;&nbsp;Show me more videos..",
                ctaText                 :"<i class=\"fa fa-envelope\"></i>&nbsp;&nbsp;Get me a consultation..",
                ctaLink                 :"http://www.healthbyscience.co.uk/get-started-now/",
                previousButtonText      :"<i class=\"fa fa-angle-left\"></i>&nbsp;&nbsp;Previous",
                nextButtonText          :"Next&nbsp;&nbsp;<i class=\"fa fa-angle-right\"></i>",
                loadingText             :"loading...",
                allDoneText             :"<i class=\"fa fa-times\"></i>&nbsp;&nbsp;All done..",

                /*
                offerTitle              :"Christmas Offer",
                offerDescription        :"50% Off on all Courses till December 31!",
                offerButtonText         :"Learn More",
                offerLink               :"http://codehandling.com",
                */

                hideHeader              :false,
                hideSearch              :false,
                hideTabs                :false,
                hideSorting             :false,
                hideViewSwitcher        :false,
                hideLoadingMechanism    :false,
                hideCtaButton           :false,
                hidePopupDetails        :false,
                hideDuration            :false,
                hideThumbnailShadow     :false,


                showFixedPlayIcon       :false,
                iconShape               :"circle",        //circle|square
                showHoverAnimation      :true,

                playlistNavigation      :true,


            });
        });


    </script>