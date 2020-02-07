
   $(document).ready(function(){

        $(".youmax-pro").youmaxPro({
            apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
            youTubeClientId:"237485577723-lndqepqthdb3lh4gec2skvpfaii9sgh0.apps.googleusercontent.com",
            vimeoAccessToken:"c289d754a132ca07051aaf931ef0de33",
            channelLinkForHeader:"https://www.youtube.com/user/crashcourse",
            tabs:[
                {
                    name:"Uploads",
                    type:"youtube-channel-uploads",
                    link:"https://www.youtube.com/user/crashcourse",
                    //YouTube Channel Link needed here
                },
                {
                    name:"Videos",
                    type:"youtube-playlist-videos",
                    link:"https://www.youtube.com/playlist?list=PL6_h4dV9kuuIOBDKgxu3q9DpvvJFZ6fB5"
                    //YouTube Playlist Link needed here
                }
            ],
            defaultTab:"Uploads",       //Name of the Tab that should be displayed on your page start
            videoDisplayMode:"popup",   //popup|link|inline

            maxResults:"9",
            autoPlay:false,
            minimumViewsPerDayForTrendingVideos:"5",  
            //If Views per day is greater than this number, the video will be marked a trending in Youmax.
            
            displayFirstVideoOnLoad:true,       //for inline video display mode only
            defaultSortOrder:"recent-first",    //popular-first|recent-first
            youmaxDisplayMode:"grid",           //list|double-list|grid
            gridThumbnailType:"full",           //simple|full|neat
            dateFormat:"relative",              //relative|specific

            //keep the titleColor in rgb format
            youmaxBackgroundColor     :"#ECEFF1",
            itemBackgroundColor       :"#fbfbfb",
            headerColor               :"rgb(252, 76, 74)",
            titleColor                :"#383838",
            descriptionColor          :"#828282",
            viewsColor                :"#6f6f6f",
            controlsTextColor         :"black",
            
            offerBackgroundColor      :"#fbfbfb",
            offerTextColor            :"#686868",
            offerHighlightColor       :"#FFC107",

            titleFontFamily           :"Roboto Condensed",           //Open Sans|Roboto Condensed|sans-serif
            generalFontFamily         :"Roboto Condensed",    //Open Sans|Roboto Condensed|sans-serif
            titleFontSize             :"0.9",
            titleFontWeight           :"normal",              //bold|normal
            descriptionFontSize       :"0.85",
            viewsDateFontSize         :"0.75",
            baseFontSize              :"16px",                //use this to increase or decrease all font-sizes in Youmax
            offerTitleFontSize          :"1.3",
            offerDescriptionFontSize    :"0.85",
            offerButtonFontSize         :"1",

            responsiveBreakpoints   :[600,900,2000,2500],

            loadingMechanism        :"load-more",       //load-more|prev-next
            loadMoreText            :"<i class='fa fa-plus'></i>&nbsp;&nbsp;Show me more videos..",
            ctaText                 :"<i class='fa fa-envelope'></i>&nbsp;&nbsp;Get me a consultation..",
            ctaLink                 :"http://www.healthbyscience.co.uk/get-started-now/",
            previousButtonText      :"Previous",
            nextButtonText          :"Next",

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
            hideCtaButton           :false


        });
    });
