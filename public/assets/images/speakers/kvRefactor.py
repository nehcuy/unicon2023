import json, os

#Last id: 931c2c1d-bc9e-49a5-9a0d-9bb6d1bf18ce
"""
jsonData = [
    {
        "title":"MOS Alvin Tan",
        "subtitle":"Minister of State",
        "info": "Ministry of Trade and Industry and Ministry of Culture, Community and Youth",
        "personalLink":"https://www.linkedin.com/in/alvinshtan/",
        "imgsrc":"/assets/images/"speakerIds"/2021/MOS Alvin Tan - headshot (2) edited.png",
        "imgFull":"/assets/images/"speakerIds"/2021/MOS Alvin Tan - headshot (2) edited.png"
    },
    {
        "title":"Eugene Ng",
        "subtitle":"Co-Founder, Head of Growth",
        "info": "StaffAny",
        "imgsrc":"/assets/images/"speakerIds"/2021/Eugene_Mugshot edited.png",
        "imgFull":"/assets/images/"speakerIds"/2021/Eugene_Mugshot edited.png",
    },
    {
        "title":"David Soukhasing",
        "subtitle":"Managing Director",
        "info": "ANGIN",
        "imgsrc":"/assets/images/"speakerIds"/2021/David Soukhasing_Photo edited.png",
        "imgFull":"/assets/images/"speakerIds"/2021/David Soukhasing_Photo edited.png"
    },
    {
        "title":"Gustavo Liu",
        "subtitle":"CEO and Co-Founder",
        "info": "EAT Launchpad",
        "imgsrc":"/assets/images/"speakerIds"/2021/Gustavo.jpg",
        "imgFull":"/assets/images/"speakerIds"/2021/Gustavo.jpg",
    },
    {
        "title":"Serene Cai",
        "subtitle":"Co-Founder & Head of Partnerships & Projects",
        "info": "Speedoc",
        "imgsrc":"/assets/images/"speakerIds"/2021/sereneCai.jpg",
        "imgFull":"/assets/images/"speakerIds"/2021/sereneCai.jpg",
    },
    {
        "title":"Dionisius Nathaniel",
        "subtitle":"Chief Marketing Officer",
        "info": "Halodoc",
        "imgsrc":"/assets/images/"speakerIds"/2021/Dionisius Nathaniel.jpg",
        "imgFull":"/assets/images/"speakerIds"/2021/Dionisius Nathaniel.jpg",
    },
    {
        "title":"John Gu",
        "subtitle":"CEO and Co-founder",
        "info": "Alphalab Capital",
        "imgsrc":"/assets/images/"speakerIds"/2021/johngu.jpg",
        "imgFull":"/assets/images/"speakerIds"/2021/johngu.jpg",
    },
    {
        "title":"Dione Song",
        "subtitle":"COO",
        "info": "Love, Bonito",
        "imgsrc":"/assets/images/"speakerIds"/2021/Dione_2020_LoveBonito-Edited-Front (cropped).png",
        "imgFull":"/assets/images/"speakerIds"/2021/Dione_2020_LoveBonito-Edited-Front (cropped).png",
    },
    {
        "title":"Josephine Chow",
        "subtitle":"Head of Expansion",
        "info": "Shopback",
        "imgsrc":"/assets/images/"speakerIds"/2021/josephineChow-shopback.png",
        "imgFull":"/assets/images/"speakerIds"/2021/josephineChow-shopback.png",
    },
    {
        "title":"Daryl Lim",
        "subtitle":"Co-Founder",
        "info": "Augmentus",
        "imgsrc":"/assets/images/"speakerIds"/2021/Daryl(cropped).png",
        "imgFull":"/assets/images/"speakerIds"/2021/Daryl(cropped).png",
    },
    {
        "title":"Ryan Chong",
        "subtitle":"Co-Founder & CEO",
        "info": "Pitchspot",
        "imgsrc":"/assets/images/"speakerIds"/2021/ryanChong.png",
        "imgFull":"/assets/images/"speakerIds"/2021/ryanChong.png",
    },
    {
        "title":"William Gilchrist",
        "subtitle":"CEO",
        "info": "Konsyg",
        "imgsrc":"/assets/images/"speakerIds"/2021/william edited.png",
        "imgFull":"/assets/images/"speakerIds"/2021/william edited.png",
    },
    {
        "title":"Amra Naidoo",
        "subtitle":"Co-Founder",
        "info": "Accelerating Asia",
        "imgsrc":"/assets/images/"speakerIds"/2021/Amra-2 (cropped).png",
        "imgFull":"/assets/images/"speakerIds"/2021/Amra-2 (cropped).png",
    },
    {
        "title":"Anurag Banerjee",
        "subtitle":"CEO & Co-Founder",
        "info": "Quilt.AI",
        "imgsrc":"/assets/images/"speakerIds"/2021/AnuragBarajee.jpg",
        "imgFull":"/assets/images/"speakerIds"/2021/AnuragBarajee.jpg"
    },
    {
        "title":"Aparna Bhatnagar Saxena",
        "subtitle":"CEO",
        "info": "TORAJAMELO",
        "imgsrc":"/assets/images/"speakerIds"/2021/Aparna Angular Front Facing edited.png",
        "imgFull":"/assets/images/"speakerIds"/2021/Aparna Angular Front Facing edited.png"
    },
    {
        "title":"Anthony Russell",
        "subtitle":"Head of Ecosystem Partnerships (APAC), Workplace by Facebook",
        "info": "Facebook",
        "imgsrc":"/assets/images/"speakerIds"/2021/ARussell HeadShot April 2015 cropped BW.jpeg",
        "imgFull":"/assets/images/"speakerIds"/2021/ARussell HeadShot April 2015 cropped BW.jpeg"
    },
    {
        "title":"Brandon Foo",
        "subtitle":"Regional Lead, Business Development - SEA",
        "info": "Tencent",
        "imgsrc":"/assets/images/"speakerIds"/2021/BrandonFoo.jpg",
        "imgFull":"/assets/images/"speakerIds"/2021/BrandonFoo.jpg",
    },
    {
        "title":"Brice Degeyter",
        "subtitle":"General Manager",
        "info": "bizsu",
        "imgsrc":"/assets/images/"speakerIds"/2021/BriceDegeyter (1).png",
        "imgFull":"/assets/images/"speakerIds"/2021/BriceDegeyter (1).png"
    },
    {
        "title":"Darren Cheng",
        "subtitle":"Co-Founder",
        "info": "FluidLytix Asia",
        "imgsrc":"/assets/images/"speakerIds"/2021/Darren Pic (cropped).png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Darren Pic (cropped).png" 
    },
    {
        "title":"David Lim",
        "subtitle":"VP, Marketing",
        "info": "HappyFresh",
        "imgsrc":"/assets/images/"speakerIds"/2021/David_Med_Formal edited.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/David_Med_Formal edited.png" ,
    },
    {
        "title":"Elaine Pai",
        "subtitle":"Head of Client Success, APAC, Workplace by Facebook",
        "info": "Facebook",
        "imgsrc":"/assets/images/"speakerIds"/2021/Devika photo.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Devika photo.jpg" ,
    },
    {
        "title":"Devika Ramnani",
        "subtitle":"Regional E-commerce Platform Lead, Loreal APAC",
        "info": "L’Oréal",
        "imgsrc":"/assets/images/"speakerIds"/2021/Elaine Pai.jpeg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Devika photo.jpg" ,
    },
    {
        "title":"Elena Chow",
        "subtitle":"Founder",
        "info": "ConnectOne",
        "imgsrc":"/assets/images/"speakerIds"/2021/elena edited.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/elena edited.png" ,
    },
    {
        "title":"Eric Sim",
        "subtitle":"Founder",
        "info": "Institute of Life",
        "imgsrc":"/assets/images/"speakerIds"/2021/ERICSIM-HEADSHOT ORIGINAL.jpeg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/ERICSIM-HEADSHOT ORIGINAL.jpeg" ,
    },
    {
        "title":"Felix Tan",
        "subtitle":"Founder & CEO",
        "info": "Skilio",
        "imgsrc":"/assets/images/"speakerIds"/2021/Felix DP1 (cropped).png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Felix DP1 (cropped).png" ,
    },
    {
        "title":"Sasha Wight",
        "subtitle":"Founder & EX Lead",
        "info": "Wrkflow",
        "imgsrc":"/assets/images/"speakerIds"/2021/Sasha-Wight.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Sasha-Wight.jpg" ,
    },
    {
        "title":"Jeremy Loh",
        "subtitle":"Co-Founder and Managing Partner",
        "info": "Genesis Alternative Ventures",
        "imgsrc":"/assets/images/"speakerIds"/2021/Genesis_Jeremy Loh edited.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Genesis_Jeremy Loh edited.png" ,
    },
    {
        "title":"Tan Gibson",
        "subtitle":"Regional Lead-Southeast Asia for Adobe Sign",
        "info": "Adobe",
        "imgsrc":"/assets/images/"speakerIds"/2021/gibson.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/gibson.jpg" ,
    },
    {
        "title":"Gordon Ng",
        "subtitle":"Co-Founder & CEO",
        "info": "Talenox",
        "imgsrc":"/assets/images/"speakerIds"/2021/gordon_colour edited.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/gordon_colour edited.png" ,
    },
    {
        "title":"Graham Kinch",
        "subtitle":"Global Head of Trust & Safety Operations",
        "info": "ByteDance",
        "imgsrc":"/assets/images/"speakerIds"/2021/GrahamKinch edited.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/GrahamKinch edited.png" ,
    },
    {
        "title":"Spencer Yang",
        "subtitle":"Senior Product Manager",
        "info": "Coinbase",
        "imgsrc":"/assets/images/"speakerIds"/2021/Headshot Spencer edited.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Headshot Spencer edited.png" ,
    },
    {
        "title":"Vikas Jain",
        "subtitle":"Senior Commercial Director",
        "info": "Funding Societies ",
        "imgsrc":"/assets/images/"speakerIds"/2021/Vikas Jain_Photo.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Vikas Jain_Photo.jpg" ,
    },
    {
        "title":"Hussein Bin Sulaiman",
        "subtitle":"Programme Head",
        "info": "BLOCK71 Indonesia",
        "imgsrc":"/assets/images/"speakerIds"/2021/Hussein.jpeg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Hussein.jpeg" ,
    },
    {
        "title":"Irene Langille",
        "subtitle":"Retail Media Lead",
        "info": "Google",
        "personalLink": "https://www.linkedin.com/in/ireneshubladze/",
        "imgsrc":"/assets/images/"speakerIds"/2021/irene-bw.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/irene-bw.png" ,
    },
    {
        "title":"Jamaur Bronner",
        "subtitle":"Founder & CEO",
        "info": "Asavi",
        "imgsrc":"/assets/images/"speakerIds"/2021/jamaurbronner-1 edited.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/jamaurbronner-1 edited.png" ,
    },
    {
        "title":"Jeffery Paine",
        "subtitle":"Founding Partner",
        "info": "Golden Gate Ventures",
        "imgsrc":"/assets/images/"speakerIds"/2021/Jeff Paine [high res] (1).jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Jeff Paine [high res] (1).jpg" ,
    },
    {
        "title":"Jeffery Nah",
        "subtitle":"CEO",
        "info": "JN Capital & Growth Advisory",
        "imgsrc":"/assets/images/"speakerIds"/2021/Jeff portrait photo (2) edited.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Jeff portrait photo (2) edited.png" ,
    },
    {
        "title":"Joel Leong",
        "subtitle":"Co-Founder",
        "info": "Shopback",
        "personalLink": "https://www.linkedin.com/in/joelleongyongsiang/",
        "companyLinkedin": "https://www.linkedin.com/company/shopback-com/",
        "imgsrc":"/assets/images/"speakerIds"/2021/Joel Leong, Co-Founder, ShopBack (1).jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Joel Leong, Co-Founder, ShopBack (1).jpg" ,
    },
    {
        "title":"Joshine Briane W",
        "subtitle":"Global Business Account Manager",
        "info": "Facebook",
        "personalLink": "https://www.linkedin.com/in/joshine//",
        "imgsrc":"/assets/images/"speakerIds"/2021/joshine.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/joshine.jpg" ,
    },
    {
        "title":"Kara-Mae Lim",
        "subtitle":"Head of Products & Solutions,Singapore & Brunei",
        "info": "Visa",
        "personalLink": "https://www.linkedin.com/in/kmaelim/",
        "companyLinkedin": " https://www.linkedin.com/company/visa/",
        "imgsrc":"/assets/images/"speakerIds"/2021/Kara-Mae-Lim.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Kara-Mae-Lim.jpg" ,
    },
    {
        "title":"Kenneth Lou",
        "subtitle":"Co-Founder & CEO",
        "info": "Seedly",
        "imgsrc":"/assets/images/"speakerIds"/2021/Kenneth3 (cropped).png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Kenneth3 (cropped).png" ,
    },
    {
        "title":"Kamila Navarro",
        "subtitle":"Senior Writer",
        "info": "Asian Scientist Magazine",
        "imgsrc":"/assets/images/"speakerIds"/2021/KNavarro_1x1.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/KNavarro_1x1.jpg" ,
    },
    {
        "title":"Leck Ting Yan",
        "subtitle":"Partner",
        "info": "TRIVE",
        "imgsrc":"/assets/images/"speakerIds"/2021/leckTingYan.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/leckTingYan.jpg" ,
    },
    {
        "title":"Loem Lida",
        "subtitle":"Co-Founder",
        "info": "SHE Investments",
        "imgsrc":"/assets/images/"speakerIds"/2021/Loem Lida.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Loem Lida.jpg" ,
    },
    {
        "title":"Magnus Ekbom",
        "subtitle":"Chief Strategy Officer",
        "info": "Lazada Group",
        "imgsrc":"/assets/images/"speakerIds"/2021/Magnus Ekborn_square edited.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Magnus Ekborn_square edited.png" ,
    },
    {
        "title":"Manisha Seewal",
        "subtitle":"Group CMO",
        "info": "Carro",
        "imgsrc":"/assets/images/"speakerIds"/2021/Manisha Seewal (Carro Tee) edited.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Manisha Seewal (Carro Tee) edited.png" ,
    },
    {
        "title":"Natalie Khoo",
        "subtitle":"Partnerships and Programmes Executive",
        "info": "*SCAPEentrepreneurship",
        "personalLink":"https://www.linkedin.com/in/natalie-jia-ling-khoo/",
        "companyLinkedin":"https://www.linkedin.com/company/scapesg",
        "imgsrc":"/assets/images/"speakerIds"/2021/natalie photo_1.1.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/natalie photo_1.1.jpg" ,
    },
    {
        "title":"Neel Bhatt",
        "subtitle":"Head of Partnerships (SEA)",
        "info": "Shopify Plus",
        "personalLink":"https://www.linkedin.com/in/neel-bhatt/",
        "companyLinkedin":"https://www.linkedin.com/company/shopify-plus/",
        "imgsrc":"/assets/images/"speakerIds"/2021/neel bhatt.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/neel bhatt.jpg" ,
    },
    {
        "title":"Nicholas Ooi",
        "subtitle":"Co-Founder & CEO",
        "info": "bantu",
        "imgsrc":"/assets/images/"speakerIds"/2021/nic2 (cropped).png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/nic2 (cropped).png" ,
    },
    {
        "title":"Nisha Oswal",
        "subtitle":"Youth Startup Support Coordinator, UNDP",
        "info": "Youth Co:Lab",
        "personalLink":"https://www.linkedin.com/in/nisha-oswal-19563435/",
        "companyLinkedin":"https://www.linkedin.com/company/youth-co-lab/",
        "imgsrc":"/assets/images/"speakerIds"/2021/Nisha Pic.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Nisha Pic.jpg" ,
    },
    {
        "title":"Noom Poovarawan",
        "subtitle":"Director of CX, APAC",
        "info": "Airbnb",
        "personalLink":"https://sg.linkedin.com/in/noom-poovarawan-7531605a",
        "companyLinkedin":"https://www.linkedin.com/company/airbnb/",
        "imgsrc":"/assets/images/"speakerIds"/2021/Noom Poovarawan.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Noom Poovarawan.jpg" ,
    },
    {
        "title":"Pam Chuang",
        "subtitle":"Head of Growth",
        "info": "Revolut",
        "imgsrc":"/assets/images/"speakerIds"/2021/Pam Chang.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Pam Chang.png" ,
    },
    {
        "title":"Paul Lemaistre",
        "subtitle":"Business Development and ESG Manager",
        "info": "Arsari-group",
        "personalLink":"https://www.linkedin.com/in/paullemaistre/",
        "companyLinkedin":"https://www.linkedin.com/company/arsari-group/",
        "imgsrc":"/assets/images/"speakerIds"/2021/Paul Lemaistre.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Paul Lemaistre.jpg" ,
    },
    {
        "title":"Peng T Ong",
        "subtitle":"Co-Founder & Managing Partner",
        "info": "Monk's Hill Ventures",
        "imgsrc":"/assets/images/"speakerIds"/2021/Peng T Ong - Co-Founder and Managing Partner_MHV (cropped).png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Peng T Ong - Co-Founder and Managing Partner_MHV (cropped).png" ,
    },
    {
        "title":"Piyush Tarachand",
        "subtitle":"Head of Omnichannel Innovation",
        "info": "Sephora SEA",
        "personalLink":"https://www.linkedin.com/in/rathizz/",
        "companyLinkedin":"https://www.linkedin.com/company/sephora-sea/",
        "imgsrc":"/assets/images/"speakerIds"/2021/Piyush Tarachand.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Piyush Tarachand.jpg" ,
    },
    {
        "title":"Radha Amalraj",
        "subtitle":"Head of APAC Business Partnerships ",
        "info": "Facebook",
        "imgsrc":"/assets/images/"speakerIds"/2021/Radha Amalraj.jpeg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Radha Amalraj.jpeg" ,
    },
    {
        "title":"Rayner Loi",
        "subtitle":"Co-Founder & CEO",
        "info": "Lumitics",
        "imgsrc":"/assets/images/"speakerIds"/2021/Rayner1 (cropped).png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Rayner1 (cropped).png" ,
    },
    {
        "title":"Rufus Sorsa",
        "subtitle":"Associate Director",
        "info": "Antler",
        "personalLink":"https://sg.linkedin.com/in/rufussorsa",
        "companyLinkedin":"https://sg.linkedin.com/company/antlerglobal ",
        "imgsrc":"/assets/images/"speakerIds"/2021/Rufus_Sorsa_Antler_Headshot.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Rufus_Sorsa_Antler_Headshot.png" ,
    },
    {
        "title":"Shobit Shukla",
        "subtitle":"Co-Founder & Chief Revenue Officer",
        "info": "Near",
        "imgsrc":"/assets/images/"speakerIds"/2021/Shobhit Shukla.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Shobhit Shukla.png" ,
    },
    {
        "title":"Gopal Kolli",
        "subtitle":"Director of eCommerce",
        "info": "Levi Strauss & Co.",
        "imgsrc":"/assets/images/"speakerIds"/2021/gopalKolli.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/gopalKolli.png" ,
    },
    {
        "title":"Veronica Low Kai Lin",
        "subtitle":"President",
        "info": "ASEAN Business Youth Association (ABYA)",
        "personalLink":"https://www.linkedin.com/in/veronicalowkailin/",
        "companyLinkedin":" https://www.linkedin.com/company/aseanbya",
        "imgsrc":"/assets/images/"speakerIds"/2021/Veronica Low_Individual.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Veronica Low_Individual.jpg" ,
    },
    {
        "title":"Dr Tok, Wee Hyong",
        "subtitle":"Principal Group Program Manager",
        "info": "Microsoft",
        "imgsrc":"/assets/images/"speakerIds"/2021/weehyong-400x400 (cropped).png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/weehyong-400x400 (cropped).png" ,
    },
    {
        "title":"William Hartono",
        "subtitle":"Vice-President, Mitra Commercial & Operation",
        "info": "Bukalapak",
        "imgsrc":"/assets/images/"speakerIds"/2021/William Hartono Budiman - 19083627 - O2O Business (cropped).png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/William Hartono Budiman - 19083627 - O2O Business (cropped).png" ,
    },
    {
        "title":"Khoo Choon Yen",
        "subtitle":"Head of People Operations",
        "info": "Workato APJ",
        "personalLink":"https://www.linkedin.com/in/khoo-choon-yen/",
        "companyLinkedin":"https://www.linkedin.com/company/workato/",
        "imgsrc":"/assets/images/"speakerIds"/2021/Workato - Choon Yen 16-9 Ratio.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Workato - Choon Yen 16-9 Ratio.jpg" ,
    },
    {
        "title":"Shane Tan",
        "subtitle":"Automation Specialist",
        "info": "Workato APJ",
        "personalLink":"https://www.linkedin.com/in/shane-lee-tan-b5b2268b/",
        "companyLinkedin":"https://www.linkedin.com/company/workato/",
        "imgsrc":"/assets/images/"speakerIds"/2021/Workato - Shane Tan.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Workato - Shane Tan.jpg" ,
    },
    {
        "title":"Xin Yi Lim",
        "subtitle":"Executive Director of Sustainability and Agriculture Impact",
        "info": "Pinduoduo",
        "imgsrc":"/assets/images/"speakerIds"/2021/Xin Yi Lim edited.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Xin Yi Lim edited.png" ,
    },
    {
        "title":"Chan Yuk Lun",
        "subtitle":"Founder",
        "info": "SingaporeLegalAdvice.com",
        "personalLink":"https://www.linkedin.com/in/yuk-lun-chan-8981607a/",
        "companyLinkedin":"https://www.linkedin.com/company/singaporelegaladvice-com/",
        "imgsrc":"/assets/images/"speakerIds"/2021/Yuk Lun.png" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Yuk Lun.png" ,
    },

    {
        "title":"Zac Chen",
        "subtitle":"Venture Associate",
        "info": "Plug and Play Ventures",
        "personalLink":"https://www.linkedin.com/in/zac-chen-374b7bb2/",
        "companyLinkedin":"https://www.linkedin.com/showcase/plugandplayapac/",
        "imgsrc":"/assets/images/"speakerIds"/2021/Zac Chen 1x1.jpg" ,
        "imgFull":"/assets/images/"speakerIds"/2021/Zac Chen 1x1.jpg" ,
    },


]

"""




# ids = """17178cbf-38d2-49ed-b17f-303d7fdd89b0
#     60d72ae6-2374-408b-b784-6b97f488b37d
#     b4a0b2a9-e7d7-44c3-907f-9ead3a55b49b
#     0ebef4d3-22ca-438c-a983-c58fefad0833
#     5b7c2119-e0e2-4ccb-8d40-feb0bc9fce66
#     1279e27d-8a8b-4518-8f83-51b4ef508012
#     3c1ffb1f-f0f2-416f-a192-4ac695e549ff
#     12805db5-8b78-4723-b0ef-adb22f581d56
#     0e8fa170-54fa-4092-89d9-69c9f0687439
#     6e48c1e6-0209-40bd-ad1f-1c89b2657c42
#     9349a28c-01e0-4b2a-afb2-2c7efbd2482c
#     26d9dd25-c818-480b-a2a0-85482110c4ee
#     18e6e4f3-7543-4327-a1dc-aaef9272be9e
#     a7102229-52eb-4cdf-8cd1-8f3b1ef25474
#     3c7a52cc-8d01-4eab-991f-eb8f90a44e06
#     026ede2d-bdf1-4b9c-ad5b-097ae0a8abfc
#     4fa12ab0-77ed-4511-a362-4a8a31ae7261
#     822c20a1-2fdf-4daa-a66a-267a3783decc
#     d7e4aa42-a771-43ba-8038-0b1a357c61bc
#     c350b500-ec43-4f0b-82ab-05c42aca9a59
#     9e43a0bc-a988-4496-9756-739b72a23dfc
#     e031b68e-1e0a-4bf9-83b0-17a494fef434
#     7065a411-181e-4164-a8ce-ec1f31b584bf
#     1f3fc576-e2d2-484a-bfb3-a0eb21ac03c2
#     fcc48853-4ce0-4000-be1f-f5da6f1898b2
#     f6bfcd20-7e08-4249-896a-1e2d01ffc88d
#     6fe9b12b-ddb7-4dbf-a5d2-a32b8bb10b8a
#     4242b3bd-6cc0-45c9-9339-22368447e6d0
#     446eb7d5-3de8-4aef-a875-b5af914d31f1
#     c414110b-56d8-4da0-bc4c-a0cdc886a10a
#     9ac6adcd-52af-4ccb-bd26-236cfba39c0f
#     b09737a9-85e6-4625-8bfa-6068ecda9b01
#     76116508-f75b-4ff9-9959-6695d7292947
#     db912891-d156-49c1-8917-c98f173758ed
#     6f9d8f81-e3de-4cad-abc2-7cd04a87f0ec
#     30f96772-4fab-4dc9-8801-c51a3e1496e3
#     191f1539-c955-431b-a2f7-6e1bfa5aba41
#     c77b6859-a3d4-4b2b-9361-a4c572186f69
#     a6bd79eb-51ae-4a84-9f0a-46ff28539bb6
#     6a88b9f5-b0ea-4618-8a2a-42561c4448f9
#     10d84d80-f3ba-41b6-b120-50b750162463
#     e80982e8-1d2c-48de-ac76-2cd22194da7a
#     70c88bb9-618c-4efd-8a61-50defed02d27
#     1150ce09-f5d7-4cb5-bbb0-f6b1356163f6
#     30cb2609-a4f3-4652-92ae-fc6dcf8425d9
#     da8efb4c-d04d-4c05-b36f-e358cde779c8
#     0c9597b9-ec32-4e4f-be4d-f207118b63c2
#     e31cb105-d1d2-47f7-9299-983a7c99a8cb
#     3ecd464b-f11b-4929-a7e4-e8d588e58d13
#     fd027b5c-e0a9-45e9-8c33-3e05a266c476
#     fa4a255b-4f1b-4e4b-9ebc-2c2463d9b2ea
#     8bc190ff-deaf-4bd5-9f68-52863ec2de35
#     b9962919-1659-4bcb-8053-d48a267d0b28
#     77eca671-4016-4384-b570-79ff910dfda0
#     6a8cbeba-f00f-447d-8861-3b11ba7a4f37
#     5efa3773-a09e-43cc-84e0-1d15341fb6e5
#     9dcbabb7-93b9-4218-9e3c-3b7abf94b284
#     78beaf89-fed5-4ef5-b722-ba70dcdf96e4
#     bca40d5b-d079-4a67-a0f8-134748d9e39b
#     e031c1d4-98e6-4e66-8d48-8b7a957138e3
#     650b82d8-fe54-4227-8bd4-7480f1cfbc0d
#     137d767e-d08c-444f-8439-5ebc709abed0
#     5f9d9723-a7bc-405c-9a93-8bb188277cbf
#     e8e65f47-551e-40a2-9c4a-b26481140d33
#     e1411244-14fb-44da-8667-30e16c7ceb58
#     d6e21c50-1987-4b3d-9c0f-4890362bea32
#     53027a72-013c-485e-b323-cc3a1b9e745e
#     d9cff232-dfc2-4a55-b655-aceee9ef5449"""


# jsonData = [
#     {
#       ""startTime"": "Jan 15, 2022 09:00:00",
#       ""endTime"": "Jan 15, 2022 09:30:00",
#       ""category"": "Opening",
#       ""topic"": "Opening Welcome by NES",
#       # ""description"": "Opening Welcome by NES",
#       ""setting"": "online",
#       ""venue"": "zoom link (tbc)",
#     },
#     {
#       ""startTime"": "Jan 15, 2022 09:30:00",
#       ""endTime"": "Jan 15, 2022 10:00:00",
#       ""category"": "Keynote",
#       ""topic"": "Startup to IPO",
#       ""description"":
#         "A Founder who has successfully gone for IPO to share his/her journey and tips on how to identify the right timing to do so",
#       ""setting"": "online",
#       ""venue"": "zoom link (tbc)",
#     },
#     {
#       ""startTime"": "Jan 15, 2022 10:00:00",
#       ""endTime"": "Jan 15, 2022 10:30:00",
#       ""category"": "Fireside",
#       ""topic"": "Booming Industries - Robotics",
#       ""description"": "Robotics",
#       ""setting"": "physical",
#       ""venue"": "zoom link (tbc)",
#       "speakerIds": [
#         "4f399780-9ddd-4d66-a4ee-0d8824de11cd",
#         "2d0f1e19-f335-4c10-9ff1-f621c1d20d6c",
#         "c51dd698-7dab-46a1-8974-9abd7debc21b",
#         "7f33a703-eaaa-4334-9397-a14563ab5693"
#       ],
#     },
#     {
#       ""startTime"": "Jan 15, 2022 10:30:00",
#       ""endTime"": "Jan 15, 2022 11:30:00",
#       ""category"": "Panel",
#       ""topic"": "First Steps",
#       ""description"":
#         "Taking the first steps when starting a company, how to gauge whether the idea is good, what were some of the founders’ considerations, how to be brave when starting",
#       ""setting"": "physical",
#       ""venue"": "zoom link (tbc)",
#       "speakerIds": ["7471cfa0-bbc6-4122-ad6c-32cf1b2a4f40"],
#     },
#     {
#       ""startTime"": "Jan 15, 2022 11:30:00",
#       ""endTime"": "Jan 15, 2022 12:00:00",
#       ""category"": "Fireside",
#       ""topic"": "Booming Industries - SaaS",
#       ""description"": "Saas",
#       ""setting"": "physical",
#       ""venue"": "zoom link (tbc)",
#       "speakerIds": ["c6051b2e-c51e-4bed-936a-4d57d7ad98f2", "1c790ec9-c03f-4a1f-96f5-eb47db8db5ae"],
#     },
#     {
#       ""startTime"": "Jan 15, 2022 12:00:00",
#       ""endTime"": "Jan 15, 2022 13:00:00",
#       ""category"": "Break",
#       ""topic"": "LUNCH",
#     },
#     {
#       ""startTime"": "Jan 15, 2022 13:00:00",
#       ""endTime"": "Jan 15, 2022 13:30:00",
#       ""category"": "Fireside",
#       ""topic"": "Post-Covid Startups/ SMEs",
#       ""description"": "Startups that were founded at the onset of COVID",
#       ""setting"": "physical",
#       ""venue"": "zoom link (tbc)",
#       "speakerIds": ["038d23ca-64f0-4830-b175-915bc5357a27", "7b9a90a2-016e-47f1-a67d-8d5c33417e18", "79aef4e3-7006-47cd-8e2d-c068b74eadb8"],
#     },
#     {
#       ""startTime"": "Jan 15, 2022 13:30:00",
#       ""endTime"": "Jan 15, 2022 14:30:00",
#       ""category"": "Panel",
#       ""topic"": "ASEAN startup ecosystem",
#       ""description"":
#         "Founders from neighboring countries to share their experiences and trends in their respective countries",
#       ""setting"": "online",
#       ""venue"": "zoom link (tbc)",
#       "speakerIds": ["a9b79272-0f9b-4224-893d-5bd4b0c73112","6e50ba82-3d0d-4e25-9d58-997da107bf9f"],
#     },
#     {
#       ""startTime"": "Jan 15, 2022 14:30:00",
#       ""endTime"": "Jan 15, 2022 15:00:00",
#       ""category"": "Fireside",
#       ""topic"": "Women in Entrepreneurship",
#       ""description"":
#         "A popular "topic" from last year UNICON, a panelist of women founders/CEOs",
#       ""setting"": "physical",
#       ""venue"": "zoom link (tbc)",
#       "speakerIds": ['7527cedb-f803-4234-8b83-9eb4cf7b0c87','13476b80-93a5-48a8-8a6e-8dfe21091511','9d51a42d-a461-4bd2-aa76-afc9c972062f'],
#     },
#     {
#       ""startTime"": "Jan 15, 2022 15:00:00",
#       ""endTime"": "Jan 15, 2022 16:00:00",
#       ""category"": "Panel",
#       ""topic"": "Startups vs Corporates",
#       ""description"":
#         "Experiences from founders that have worked in both, started working in a corporate "setting" as a fresh graduate then starting their own company afterwards",
#       ""setting"": "online",
#       ""venue"": "zoom link (tbc)",
#       "speakerIds": [
#           "b82a940d-d656-43d2-8142-dddcababf6b3",
#           "1a190086-62ab-475e-913a-5e3dde9098fc",
#           "2cd5c57e-7c2f-4e9a-aaed-d676068421cf",
#           "cfbc9282-4286-46d2-b551-4e49fed5c1af",
#           "9556430a-62c3-46a6-8790-dc4cbac21a7a"
#         ],
#     },
#     {
#       ""startTime"": "Jan 15, 2022 16:00:00",
#       ""endTime"": "Jan 15, 2022 17:00:00",
#       ""category"": "Panel",
#       ""topic"": "Innovation and new technologies",
#       ""description"":
#         "Exploring DeepTech and learning from founders who are innovating in new technologies.",
#       ""setting"": "physical",
#       ""venue"": "zoom link (tbc)",
#       "speakerIds": [
#           "71c194b7-078e-4f03-95af-a4a3cf8c2482", 
#           "7eeb098a-bdf7-45e1-a752-2cc81150fe98", 
#           "31135cd1-10bc-4584-9303-fc2dce84ba7f", 
#           "1bf622e0-778e-4bdf-b7ae-740e96004af3", 
#           "0f25f452-d5b4-40bb-826a-000c0490ead4"
#         ],
#     },
#     {
#       ""startTime"": "Jan 15, 2022 17:00:00",
#       ""endTime"": "Jan 15, 2022 17:30:00",
#       ""category"": "Fireside",
#       ""topic"": "Student Entrepreneurs",
#       ""description"":
#         "How they managed their startup while still being a student, how to be disciplined and be able to manage their time well between managing their startup and academics",
#       ""setting"": "physical",
#       ""venue"": "zoom link (tbc)",
#       "speakerIds": [
#           "0b78834f-d32b-444e-9cc9-35628b5761b4", 
#           "7494d95f-e479-4ccf-ad6e-9c262499fe31", 
#           "e6957ece-c172-4912-a1cf-9c79534087c9"
#         ]
#     },
#     {
#       ""startTime"": "Jan 15, 2022 17:30:00",
#       ""endTime"": "Jan 15, 2022 18:30:00",
#       ""category"": "Panel",
#       ""topic"": "Seed to Unicorn",
#       ""description"":
#         "Potentially a panelist of founders, early employees or high-ranking employees from unicorn startups, how they managed to reach the unicorn status",
#       ""setting"": "online",
#       ""venue"": "zoom link (tbc)",
#       "speakerIds": [
#           "5ec753f8-2ada-4c9b-bd75-d1c415c77220", 
#           "52da4fc9-678e-4d21-a5b5-65faef814507", 
#           "52da4fc9-678e-4d21-a5b5-65faef814507", 
#           "e3972664-05a0-4959-9760-94880ebf0edf"
#         ]
#     },
#   ]

# ids = """bfdf2d18-869e-49c0-9be0-672146478b54
# fc646632-b4ef-47db-84ae-87ff1a3f8a1f
# e2e63c55-c97e-4a3b-8a2b-44582b0de3e2
# 914006bb-6610-472f-9f1b-d14a9edbc890
# 3f863d76-0d18-4181-944b-9d357da161a8
# c1cdf9b1-86ff-4d38-8c51-9b6a343e4e05
# 4d39deb3-5f89-44ce-8997-b01f652fce94
# 8b8e665b-f0be-4d33-abbc-132eb342b98e
# 1832b2f1-d586-47a1-98e8-9f368dd396e6
# 1c110a57-7fa3-47d0-ae08-5ef28793985d
# c4501f64-3e2e-45f1-b011-6dd96fd894cb
# 162d35c2-26a3-4df0-815c-f165cbf591a0
# 986b6d71-54a8-4614-aa4d-e2a3f1c70004"""


jsonData = [
    {
      "startTime": "Jan 15, 2022 09:30:00",
      "endTime": "Jan 15, 2022 10:00:00",
      "category": "Opening by NES",
      "topic": "Opening Welcome by NES",
      "setting": "online",
      "venue": "zoom link (tbc)",
    },
    {
      "startTime": "Jan 15, 2022 10:00:00",
      "endTime": "Jan 15, 2022 11:00:00",
      "category": "Panel",
      "topic": "Securing Funding",
      "description":
        "A panel of VC partners, what do they look for in early stage startups, important points to note when pitching",
      "setting": "online",
      "venue": "zoom link (tbc)",
      "speakerIds": [
          "68dd3863-9de4-444b-b53f-d4d401994002", 
          "c5825d86-4f51-461b-ad7e-7a4006168343", 
          "990ff5d7-177b-41ac-adb6-e6fa132bec47"
        ],
    },
    {
      "startTime": "Jan 15, 2022 10:00:00",
      "endTime": "Jan 15, 2022 10:30:00",
      "category": "Fireside",
      "topic": "Booming Industries - FinTech",
      "description": "FinTech",
      "setting": "physical",
      "venue": "zoom link (tbc)",
      "speakerIds": [
          "3640394b-ccb9-4c69-b08f-7d1d3ac6d27a", 
          "40b70155-cf0f-43c1-9c84-f7c0c9555da7", 
          "5de712e6-0e33-4886-b786-614d2567d5c8"
        ],
    },
    {
      "startTime": "Jan 15, 2022 11:30:00",
      "endTime": "Jan 15, 2022 13:00:00",
      "category": "TigerLaunch",
      "topic": "TigerLaunch Pitching #1",
      "description":
        "Part 1 of the pitching (First set of Teams out of total 15 Teams)",
      "setting": "physical",
      "venue": "zoom link (tbc)",
      "speakerIds": [
          "0514f285-7d9b-4f55-98cc-fba546debbdd", 
          "2a1a30d7-6158-4d20-a749-39b104cf0b2d", 
          "538e524d-ea6a-4956-9ebd-695129e95074"
        ],
    },
    {
      "startTime": "Jan 15, 2022 13:00:00",
      "endTime": "Jan 15, 2022 14:00:00",
      "category": "Break",
      "topic": "LUNCH",
    },
    {
      "startTime": "Jan 15, 2022 14:00:00",
      "endTime": "Jan 15, 2022 15:00:00",
      "category": "TigerLaunch",
      "topic": "TigerLaunch Pitching #2",
      "description":"Part 2 of the pitching (Second set of Teams out of total 15 Teams)",
      "setting": "physical",
      "venue": "zoom link (tbc)",
      "speakerIds": [
          "0514f285-7d9b-4f55-98cc-fba546debbdd", 
          "2a1a30d7-6158-4d20-a749-39b104cf0b2d", 
          "538e524d-ea6a-4956-9ebd-695129e95074"
        ],
    },
    {
      "startTime": "Jan 15, 2022 15:00:00",
      "endTime": "Jan 15, 2022 16:00:00",
      "category": "Panel",
      "topic": "Zero to One",
      "description":
        "How founders learnt from their mistakes, lessons from failures in companies/business ideas they executed prior to their successful startup, how to apply the lessons learnt onto their next startup",
      "setting": "online",
      "venue": "zoom link (tbc)",
      "speakerIds": [
          "293c76a0-6d77-40d6-b750-727bbd33e282", 
          "79ea44a6-361f-41d6-b16a-6d2f97018a92", 
          "aef2503f-51de-4a1f-bc30-9db5be367dae", 
          "0eef9274-d038-4e40-a1ee-018d62eacd7d", 
          "4b09e65e-371d-4d46-bdd8-4c7dc1983ccc"
        ],
    },
    {
      "startTime": "Jan 15, 2022 16:00:00",
      "endTime": "Jan 15, 2022 16:30:00",
      "category": "TigerLaunch",
      "topic": "TigerLaunch results & UNICON Closing",
      "setting": "physical",
      "venue": "zoom link (tbc)",
    }
]
ids = """ba81cbc1-d34c-41bc-a171-357d9176adab
8f8aaa71-2d9d-425f-8fd5-ba8074a3c860
25cd41d7-637e-4b8d-b0f8-27f19db8b1dc
a555bb71-a2ee-4b33-98d0-53722bc14818
fdeb7286-c42f-4fd0-ac5d-ab6192f05ebf
303b2922-fa34-4143-9a08-9272ffb7862d
70a2422b-eb9b-4bf9-b340-d70756f524be
65e685bb-e9b5-4d58-9b61-3e73374aae8f"""

print(len(jsonData))
ids = ids.replace(" ", "").split('\n')
print(len(ids))
# print(ids)


res = dict(zip(ids,jsonData))

print(res)
# print(res["162d35c2-26a3-4df0-815c-f165cbf591a0"])

